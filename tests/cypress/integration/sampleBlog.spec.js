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

  it('Check the list of users', () => {
    cy.visit('/user');
    cy.get('a').contains('Leanne Graham');
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
      .wait(25) // give the async fetch a bit of time to complete
      .get('a')
      .contains('Leanne Graham')
      .click()
      .get('p')
      .contains('1');
  });

  it('Check is transferState exist in html', () => {
    cy.visit('/user/1');
    cy.window()
      .its('scully-transfer-state')
      .should('have', 'posts');
  });

  it('check link to have target_blank in blog page 2', () => {
    cy.visit('/blog/___UNPUBLISHED___k5nhcflm_SJwD4Z0QDrIHg1PGHo2mrfLZE8sfUsPy/');

    cy.get('a[target]').should('have.attr', 'target', '_blank');
  });

  it('Check that the slow user mock template appears then disappears', () => {
    cy.visit('/slow').reload();

    cy.get('app-slow>h1').contains('Scully Not Generated');
    cy.wait(4100)
      .get('app-slow>h1')
      .contains('Scully Generated');
  });
});
