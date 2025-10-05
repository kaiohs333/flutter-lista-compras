# Lista de Compras Simples - App em Flutter

**Laboratório de Desenvolvimento de Aplicações Móveis e Distribuídas**
**Curso de Engenharia de Software - PUC Minas**

Este é um projeto introdutório ao Flutter que desenvolve um aplicativo de lista de compras funcional. O objetivo é aplicar conceitos básicos de widgets, gerenciamento de estado e interação do usuário para criar uma experiência de usuário simples e intuitiva.

---

## Funcionalidades

O aplicativo permite ao usuário gerenciar uma lista de compras com os seguintes recursos:

### Versão Básica
* **Adicionar Itens:** Um campo de texto para digitar e um botão para adicionar novos itens à lista.
* **Listar Itens:** Exibição de todos os itens em uma lista rolável.
* **Remover Itens:** Um botão de lixeira em cada item para removê-lo da lista.
* **Contador de Itens:** Exibição do número total de itens na parte inferior da tela.

### Melhorias Adicionadas
* **Marcar como Comprado:** Um `Checkbox` em cada item permite marcá-lo como comprado, riscando o texto e alterando a cor de fundo.
* **Painel de Estatísticas:** Um resumo no topo da lista exibe em tempo real o total de itens, a quantidade de itens comprados e os restantes.
* **Limpar Lista:** Um botão na barra superior para apagar todos os itens da lista de uma só vez.
* **Diálogos de Confirmação:** Alertas (`AlertDialog`) são exibidos para confirmar ações destrutivas, como remover um item ou limpar a lista.
* **Feedback ao Usuário:** Mensagens de confirmação (`SnackBar`) aparecem na parte inferior da tela para notificar sobre ações concluídas (ex: "Item adicionado!").
* **Validação de Duplicados:** O sistema impede a adição de um item que já existe na lista.
* **Interface Melhorada:** A tela de lista vazia e a área de entrada de texto foram redesenhadas para uma melhor experiência do usuário.

---

## Conceitos do Flutter Aplicados

Este projeto serve como uma introdução prática aos seguintes conceitos fundamentais do Flutter:

* **Estrutura de App:** `MaterialApp`, `Scaffold`.
* **Widgets de Layout:** `Column`, `Row`, `Expanded`, `Padding`.
* **Widgets de UI:** `Text`, `TextField`, `ElevatedButton`, `IconButton`, `Card`, `ListTile`, `Checkbox`, `Icon`.
* **Gerenciamento de Estado:** Uso de `StatefulWidget` e da função `setState()` para reconstruir a interface dinamicamente quando os dados da lista são alterados.
* **Listas Dinâmicas:** Construção de listas de tamanho variável com `ListView.builder`.

---

## Como Executar o Projeto

### Pré-requisitos
* [Flutter SDK](https://flutter.dev/docs/get-started/install) instalado e configurado.
* [Visual Studio Code](https://code.visualstudio.com/) com a extensão do Flutter.
* Google Chrome (para execução na web).

### Passos

1.  Clone o repositório:
    ```bash
    git clone <url-do-seu-repositorio>
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd lista_compras_simples
    ```

3.  Execute o comando para rodar o aplicativo. O Flutter irá perguntar em qual dispositivo você deseja executar.
    ```bash
    flutter run
    ```

4.  Selecione **Chrome (chrome)** na lista de dispositivos para abrir o aplicativo no seu navegador.

### Comandos Úteis Durante o Desenvolvimento
* **Hot Reload:** Pressione `r` no terminal onde o app está rodando para aplicar as mudanças de código instantaneamente.
* **Parar a Execução:** Pressione `Ctrl + C` no terminal.