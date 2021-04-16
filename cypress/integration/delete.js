it("can delete article", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name");
    cy.get('form').submit();
    cy.visit("http://localhost:3000/articles");
    cy.get("p").contains("information")
    cy.get("button[value='information']").click();
    cy.get("p").contains("information").should('not.exist');
    cy.get("span").contains("my name").should('not.exist');
});