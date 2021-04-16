it("can input information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name")
});