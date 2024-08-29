/// <reference types="cypress" />

describe("gerenciamento de Tarefas", () => {
  let testData;

  before(() => {
    cy.fixture("tasks").then((t) => {
      testData = t;
    });
  });

  context("cadastro", () => {
    it("deve cadastrar uma nova tarefa", () => {
      const task = testData.dup;
      cy.removeTaskByName(task.name);
      cy.createTask(task.name);
      cy.contains("main div p", task.name).should("be.visible");
    });

    it("não deve permitir tarefa duplicada", () => {
      const taskName = "Comprar ketchup";
      // Cadastra a primeira vez
      cy.removeTaskByName(taskName);
      cy.createTask(taskName);

      // Tenta cadastrar a tarefa duplicada
      cy.createTask(taskName);

      // Verifica mensagem de duplicidade
      cy.get(".swal2-html-container")
        .should("be.visible")
        .should("have.text", "Task already exists!");
    });

    it("campo obrigatório", () => {
      cy.createTask();
      cy.isRequired("This is a required field");
    });
  });

  context("atualização", () => {
    it("deve concluir uma tarefa", () => {
      const taskName = "Pagar contas de consumo";

      cy.visit("/");

      cy.contains("p", taskName)
        .should("be.visible")
        .then(($task) => {
          const isCompleted =
            $task.css("text-decoration-line") === "line-through";
          if (isCompleted) {
            // Se já estiver concluída, desmarca
            cy.wrap($task).parent().find("button[class*=ItemToggle]").click();
          }
        });

      cy.contains("p", taskName)
        .parent()
        .find("button[class*= ItemToggle]")
        .click();

      cy.wait(500);
      cy.contains("p", taskName).should(
        "have.css",
        "text-decoration-line",
        "line-through"
      );
    });
  });

  context("exclusão", () => {
    it("deve remover uma tarefa", () => {
      const taskName = "Estudar NodeJs";

      cy.createTask(taskName);

      cy.visit("/");

      cy.contains("p", taskName)
        .parent()
        .find("button[class*= ItemDelete]")
        .click();

      cy.wait(500);
      cy.contains("p", taskName).should("not.exist");
    });
  });
});
