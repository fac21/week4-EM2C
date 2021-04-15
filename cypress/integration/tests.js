it("can run a test", () => {
    assert.equal(1, 1);
  });

it("can navigate to main page", () => {
    cy.visit("http://localhost:3000/");
  });

it("can navigate to articles page", () => {
    cy.visit("http://localhost:3000/articles");
  });

it("can input information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name")

  });

it("can submit information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name")
    cy.get('form').submit()
  });

it("can submit multiple pieces of information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name")
    cy.get('form').submit()
    cy.get("li").contains("information").contains("my name")
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information two");
    cy.get("#name").type("my name two")
    cy.get('form').submit()
    cy.get("li").contains("information").contains("my name")
    cy.get("li").contains("information two").contains("my name two")
  });

// it("can delete information", () => {
//     cy.visit("http://localhost:3000");
//   });

// it("can navigate with back button", () => {
//     cy.visit("http://localhost:3000");
//   });
