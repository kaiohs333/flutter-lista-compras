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

* **[Flutter](https://flutter.dev/)**: Framework da Google para desenvolvimento de aplicações multiplataforma.
* **[Dart](https://dart.dev/)**: Linguagem de programação otimizada para a criação de interfaces de usuário, utilizada pelo Flutter.
* **[Visual Studio Code](https://code.visualstudio.com/)**: Editor de código com extensões para desenvolvimento Flutter.
* **[Material Design 3](https://m3.material.io/)**: Sistema de design do Google, utilizado como base para os componentes visuais do aplicativo.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* **Flutter SDK** instalado e configurado na sua máquina. Você pode verificar sua instalação com o comando `flutter doctor`.
* **Google Chrome** instalado (para executar a versão web).

### Passos

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd lista_compras_simples
    ```
3.  Execute o aplicativo. O Flutter irá listar os dispositivos disponíveis:
    ```bash
    flutter run
    ```
4.  Selecione **Chrome (chrome)** na lista para abrir o aplicativo no seu navegador.

---

## 👨‍💻 Autor

* **Kaio Henrique Oliveira da Silveira Barbosa**
* **Email**: kaiohsilveira@gmail.com