/// <reference types="Cypress" />

context('check first integration test', () => {
  it('check if a users exist', () => {
    cy.visit('/home');
    cy.get('ul>li>a')
      .contains('/user')
      .should(element => {
        assert.isTrue(element.html() === '/user');
      });
  });

  it('Check the list of users after navigation', () => {
    cy.visit('/home');
    cy.get('ul>li>a')
      .contains('/user')
      .click()
      .get('a')
      .contains('Leanne Graham');
  });

  it('Check is transferState exist in html', () => {
    cy.visit('/user');
    cy.window()
      .its('scully-transfer-state')
      .should('have', 'users');
  });

  it('Check if users dont call httprequest', () => {
    cy.server();
    cy.route('http://localhost:8200/users', {
      onRequest: req => {
        cy.log('Call http done');
        expect(true).to.equal(false);
      },
    });
    cy.visit('/user');
    cy.wait(3000);
  });

  it('Check the list of users after navigation', () => {
    cy.visit('/home');
    cy.get('ul>li>a')
      .contains('/user')
      .click()
      .get('a')
      .contains('Leanne Graham')
      .click()
      .get('p')
      .contains('Leanne Graham');
  });

  it('Check is transferState exist in html', () => {
    cy.visit('/user/1');
    cy.window()
      .its('scully-transfer-state')
      .should('have', 'posts');
  });
});
