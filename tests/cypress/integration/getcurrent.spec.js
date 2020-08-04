/// <reference types="Cypress" />

context('RoutesService tests', () => {
  it('should start with toplevel', () => {
    cy.visit('/home');
    cy.get('main>app-static>h1').should((el) => assert.isTrue(el.html() === 'Toplevel routes in application'));
  });

  it('navigate to all', () => {
    cy.get('main > app-static > a:nth-child(2)')
      .click()
      .get('main>app-static>h1')
      .should((el) => assert.isTrue(el.html() === 'All routes in application'));
  });
});
