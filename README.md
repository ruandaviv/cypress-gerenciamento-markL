# Gerenciamento de Tarefas com Cypress

Este projeto é um conjunto de testes automatizados para um aplicativo de gerenciamento de tarefas, utilizando o framework Cypress. Os testes cobrem funcionalidades básicas como cadastro, atualização e exclusão de tarefas, além de validações para evitar duplicidade e verificar mensagens de erro.

## Estrutura do Projeto

- **Cadastro de Tarefas**
  - Cadastro de uma nova tarefa.
  - Verificação de que tarefas duplicadas não podem ser cadastradas.
  - Validação de campo obrigatório.

- **Atualização de Tarefas**
  - Marcação de tarefas como concluídas e verificação do estado usando CSS.

- **Exclusão de Tarefas**
  - Remoção de uma tarefa existente.

## Arquivos e Estrutura

- **`cypress/integration`**: Contém os arquivos de teste em Cypress.
  - **`tasks_spec.js`**: Arquivo principal de testes que cobre cadastro, atualização e exclusão de tarefas.

- **`cypress/fixtures`**: Contém dados de teste em formato JSON.
  - **`tasks.json`**: Dados utilizados nos testes.

- **`cypress/support/commands.js`**: Contém comandos personalizados para Cypress.
  - **`createTask`**: Comando para criar uma tarefa.
  - **`isRequired`**: Comando para verificar mensagens de validação.
  - **`removeTaskByName`**: Comando para remover uma tarefa por nome.

## Configuração

1. **Instalação de Dependências**

   Certifique-se de ter o Node.js instalado. Em seguida, instale as dependências do projeto:

   ```bash
   npm install
   
2. **Configuração do Ambiente**

   Configure a URL da API no arquivo de configuração do Cypress. Crie ou edite o arquivo cypress.json na raiz do projeto e adicione o seguinte:
   
   ```bash
   {"apiUrl": "http://localhost:3333"}

3. **Executar os Testes**

  Para rodar os testes, use o comando::
   
  ```bash
  npx cypress open


##Comandos Personalizados##

