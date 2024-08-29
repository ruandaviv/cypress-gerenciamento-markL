Este projeto envolve a automação de testes end-to-end (E2E) de uma aplicação de gerenciamento de tarefas utilizando o Cypress. A automação abrange as principais funcionalidades da aplicação, como cadastro, atualização e exclusão de tarefas, além de validar a integridade dos dados e a experiência do usuário.

Funcionalidades Testadas
Cadastro de Tarefas:

Cadastro de nova tarefa utilizando dados dinâmicos carregados de arquivos fixture.
Verificação de duplicidade para evitar a criação de tarefas com o mesmo nome.
Validação de campos obrigatórios com exibição de mensagens de erro adequadas.
Atualização de Tarefas:

Marcação de tarefas como concluídas e verificação do estado visual (texto tachado).
Tratamento de casos onde a tarefa já esteja marcada como concluída antes do teste.
Exclusão de Tarefas:

Remoção de tarefas e verificação de que elas não aparecem mais na lista visível.
Estrutura de Código
Comandos Customizados: Criação de comandos Cypress personalizados (createTask, isRequired, removeTaskByName) para aumentar a eficiência e a reutilização do código.
Dados Dinâmicos: Uso de arquivos fixture para carregar dados de teste de forma dinâmica e parametrizada.
Integração com API REST: Manipulação de tarefas no backend utilizando uma API REST para operações como remoção de tarefas.
Ferramentas Utilizadas
Cypress: Framework de testes E2E.
Visual Studio Code: Ambiente de desenvolvimento.
API REST e JSON: Tecnologias utilizadas para manipulação de dados no backend.
Git: Controle de versão e colaboração.
Como Executar os Testes
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:
bash
Copiar código
npm install
Execute os testes:
bash
Copiar código
npx cypress open
