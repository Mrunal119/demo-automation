// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Reusable custom commands added

 Cypress.Commands.add("login", () => {
    //adding a new command named login
    cy.visit('https://amazon.in');
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.screenshot();
    cy.get('#ap_email').click().type("9511674692");
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').click().type("Nature@11");
    cy.get('#signInSubmit').click();
    cy.wait(2000);
  });

  
  Cypress.Commands.add("searchProduct", ( String) => { 

    cy.get('#twotabsearchtextbox').click().type(String);
    cy.get('#nav-search-submit-button').click();

   })