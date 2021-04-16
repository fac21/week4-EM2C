it("can submit multiple pieces of information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name")
    cy.get('form').submit()
    cy.get("li").contains("information");
    cy.get('li').contains("my name");
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information two");
    cy.get("#name").type("my name two")
    cy.get('form').submit()
    cy.get("li").contains("information");
    cy.get('li').contains("my name");
    cy.get("li").contains("information two");
    cy.get('li').contains("my name two");
});