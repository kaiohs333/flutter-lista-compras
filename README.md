# Lista de Compras em Flutter

![Flutter](https://img.shields.io/badge/Flutter-3.x-blue.svg) ![Dart](https://img.shields.io/badge/Dart-3.x-orange.svg)

> Projeto acadêmico para a disciplina de Desenvolvimento de Aplicações Móveis e Distribuídas, demonstrando a criação de um aplicativo funcional com Flutter, cobrindo conceitos essenciais de UI, gerenciamento de estado e interação com o usuário.

---

### 📖 Índice

* [Sobre o Projeto](#-sobre-o-projeto)
* [Conceitos Fundamentais do Flutter](#-conceitos-fundamentais-do-flutter)
* [✨ Features](#-features)
* [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
* [👨‍💻 Autor](#-autor)

---

## 📱 Sobre o Projeto

Este projeto consiste em um aplicativo de **Lista de Compras** simples e funcional, desenvolvido inteiramente com o framework Flutter. O objetivo principal é servir como uma introdução prática ao desenvolvimento multiplataforma, aplicando os conceitos fundamentais do Flutter para construir uma interface de usuário reativa e intuitiva.

A aplicação permite que o usuário adicione, remova e gerencie itens de uma lista, fornecendo feedback visual em tempo real para cada ação, como marcar itens como comprados e visualizar estatísticas da lista.

## 🎓 Conceitos Fundamentais do Flutter

O Flutter constrói sua interface a partir de **Widgets**, que são os blocos de construção de tudo o que se vê na tela. Este projeto explora a diferença entre dois tipos principais de widgets, essenciais para o desenvolvimento de qualquer aplicação:

* **`StatelessWidget`**: Componentes cuja aparência e dados não mudam após serem construídos. São ideais para elementos estáticos da tela, como o título do aplicativo ou ícones.
* **`StatefulWidget`**: Componentes que possuem um "estado" interno que pode mudar durante o tempo de vida do widget, em resposta à interação do usuário ou recebimento de dados. Quando o estado muda (usando a função `setState()`), o widget se reconstrói para refletir as novas informações. A nossa lista de compras é o principal exemplo de um `StatefulWidget` neste projeto.

---

## ✨ Features

* **Adição e Remoção de Itens**: Interface intuitiva para adicionar e remover itens da lista em tempo real.
* **Marcar como Comprado**: Funcionalidade de `Checkbox` para marcar itens como concluídos, com feedback visual (texto riscado).
* **Painel de Estatísticas**: Um painel no topo da lista exibe dinamicamente o total de itens, a quantidade de comprados e os restantes.
* **Diálogos de Confirmação**: Alertas são exibidos para confirmar ações importantes, como remover um item ou limpar toda a lista, prevenindo ações acidentais.
* **Feedback com SnackBar**: Mensagens de notificação aparecem brevemente na tela para confirmar ações do usuário (ex: "Item adicionado!").
* **Validação de Duplicados**: O sistema impede que o mesmo item seja adicionado mais de uma vez na lista.
* **Botão para Limpar Lista**: Funcionalidade para apagar todos os itens da lista de uma só vez.

---

## 🛠️ Tecnologias Utilizadas



*   **[Flutter](https://flutter.dev/)**: Framework da Google para desenvolvimento de aplicações multiplataforma.

*   **[Dart](https://dart.dev/)**: Linguagem de programação otimizada para a criação de interfaces de usuário, utilizada pelo Flutter.

*   **[Visual Studio Code](https://code.visualstudio.com/)**: Editor de código com extensões para desenvolvimento Flutter.

*   **[Material Design 3](https://m3.material.io/)**: Sistema de design do Google, utilizado como base para os componentes visuais do aplicativo.



---



## ☁️ Serviços de Backend (Demonstração de Sistema Distribuído)



Este projeto inclui uma simulação de microsserviços de backend para demonstrar um cenário de sistema distribuído com mensageria assíncrona usando RabbitMQ. O objetivo é desacoplar operações críticas ou pesadas, como a "Finalização de Compra" de uma lista, do fluxo principal da API.



### Arquitetura



*   **List Service (Producer)**: Um serviço Node.js/Express que expõe um endpoint HTTP para finalizar uma lista. Ao receber uma requisição, ele publica uma mensagem no RabbitMQ e responde imediatamente com `202 Accepted`.

*   **Notification Consumer**: Um worker Node.js que escuta as mensagens de "checkout" do RabbitMQ e simula o envio de um comprovante por e-mail.

*   **Analytics Consumer**: Um segundo worker Node.js que escuta as mesmas mensagens de "checkout" e simula o cálculo de estatísticas e atualização de dashboards.

*   **RabbitMQ**: Um broker de mensagens que gerencia a comunicação assíncrona entre os serviços.



### Pré-requisitos para o Backend



*   **Node.js** e **npm** instalados.

*   **Docker** e **Docker Compose** instalados e rodando.



### Como Executar os Serviços de Backend



1.  **Navegue até o diretório `backend`**:

    ```bash

    cd backend

    ```



2.  **Inicie o RabbitMQ**:

    ```bash

    docker-compose up -d

    ```

    *   Verifique o painel de gerenciamento em `http://localhost:15672` (usuário/senha: `guest`/`guest`).



3.  **Instale as dependências e inicie o List Service (Producer)**:

    ```bash

    cd list-service

    npm install

    node index.js

    ```

    *   O serviço estará rodando em `http://localhost:3000`.



4.  **Instale as dependências e inicie o Notification Consumer**:

    ```bash

    cd ../notification-consumer

    npm install

    node index.js

    ```



5.  **Instale as dependências e inicie o Analytics Consumer**:

    ```bash

    cd ../analytics-consumer

    npm install

    node index.js

    ```



### Como Testar o Fluxo Assíncrono



Com todos os serviços de backend rodando, você pode simular a finalização de uma lista:



1.  **Faça uma requisição POST** para o endpoint de checkout do `List Service`. Você pode usar ferramentas como Postman ou `curl`.



    *   **URL**: `http://localhost:3000/lists/ID_DA_LISTA/checkout` (substitua `ID_DA_LISTA` por um valor, ex: `123`)

    *   **Método**: `POST`

    *   **Headers**: `Content-Type: application/json`

    *   **Body (Raw - JSON)**:

        ```json

        {

            "userEmail": "seu.email@example.com"

        }

        ```

    *   **Exemplo com `curl`**:

        ```bash

        curl -X POST -H "Content-Type: application/json" -d '{"userEmail": "usuario@example.com"}' http://localhost:3000/lists/123/checkout

        ```



2.  **Verifique a Resposta da API**: O `List Service` deve responder imediatamente com `202 Accepted`.



3.  **Observe os Consumers**: Nos terminais onde o `Notification Consumer` e o `Analytics Consumer` estão rodando, você verá as mensagens de log indicando que eles processaram o evento assíncronamente.



4.  **Monitore o RabbitMQ**: No painel de gerenciamento do RabbitMQ, você poderá ver os gráficos de mensagens publicadas e entregues/confirmadas na exchange `shopping_events`, confirmando o fluxo de mensageria.



---



## 🚀 Como Executar o Projeto



### Pré-requisitos



*   **Flutter SDK** instalado e configurado na sua máquina. Você pode verificar sua instalação com o comando `flutter doctor`.

*   **Google Chrome** instalado (para executar a versão web).



### Passos



1.  Clone o repositório:

    ```bash

    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

    ```

2.  Navegue até a pasta do projeto:

    ```bash

    cd flutter-lista-compras

    ```

3.  Execute o aplicativo. O Flutter irá listar os dispositivos disponíveis:

    ```bash

    flutter run

    ```

4.  Selecione **Chrome (chrome)** na lista para abrir o aplicativo no seu navegador.



---



## 👨‍💻 Autor



*   **Kaio Henrique Oliveira da Silveira Barbosa**

*   **Email**: kaiohsilveira@gmail.com