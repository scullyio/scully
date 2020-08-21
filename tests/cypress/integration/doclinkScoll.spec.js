/// <reference types="Cypress" />

context('docs-link-update-plugin', () => {
  it('should have page 6 header', () => {
    cy.visit('/blog/page-6');
    cy.get('#page-6').should('have.text', 'Page 6');
  });

  it('should scroll down by clicking on hash-link', () => {
    cy.get('[data-hash=end-of-page]').click();
    cy.get('#end-of-page').should('be.visible');
  });
});
