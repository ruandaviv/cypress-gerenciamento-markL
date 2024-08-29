describe("home", () => {
  it("webapp deve estar online", () => {
    cy.visit("/");

    // Validar se o título exibido na guia do navegador está sendo corretamente exibido
    // O método title recebe o título do head (cabeçalho). Utilizando o should() conseguimos fazer uma comparação, onde a primeira parte é o elemento de comparação e na segunda o valor/conteúdo a ser comparado
    cy.title().should("eq", "Gerencie suas tarefas com Mark L");
  });
});
