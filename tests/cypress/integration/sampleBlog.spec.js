/// <reference types="Cypress" />

/** helper to get the transferstate object */
const getTransferState = (cy) => cy.window().then((w) => w['ScullyIO-transfer-state']);

context('combined integration tests', () => {
  it('check if a users exist', () => {
    cy.visit('/home');
    cy.get('ul>li>a')
      .contains('/user')
      .should((element) => {
        assert.isTrue(element.html() === '/user');
      });
  });

  it('Check the list of users', () => {
    cy.visit('/user');
    cy.get('a').contains(`Leanne "Graham o'neil"`);
  });

  it('Check is transferState exist in html', () => {
    cy.visit('/user');
    getTransferState(cy).then((ts) => expect(ts.users).to.be.not.undefined);
  });

  it('Check if users dont call httprequest', () => {
    cy.server();
    cy.route('http://localhost:8200/users', {
      onRequest: (req) => {
        cy.log('Call http done');
        expect(true).to.equal(false);
      },
    });
    cy.visit('/user');
    cy.wait(1500);
  });

  it('Check the list of users after navigation', () => {
    cy.visit('/home');
    cy.get('ul>li>a')
      .contains('/user', { timeout: 25 })
      .click()
      .wait(25)
      .get('a')
      .contains('Leanne', { timeout: 25 })
      .click()
      .wait(25)
      .get('p')
      .contains('1', { timeout: 25 });
  });

  it('Check of transferState exist in html', () => {
    cy.visit('/user/1');
    getTransferState(cy).then((ts) => expect(ts.posts).to.be.not.undefined);

  });

  it('Check of  encoding and CR/LF handling', () => {
    const catcPhrase = "Multi-layered </script> 'client-server' SQL DROP USERS neural-net";
    cy.visit('/user/1');
    cy.get('strong').contains(`Multi-layered </script> 'client-server' SQL DROP USERS neural-net`);
  });
  it('Check if hash is ignored', () => {
    cy.visit('/user/1#someHash');
    getTransferState(cy).then((ts) => expect(ts.posts).to.be.not.undefined);
  });

  it('Check if search param is ignored', () => {
    cy.visit('/user/1?filter=none');
    getTransferState(cy).then((ts) => expect(ts.posts).to.be.not.undefined);
  });

  it('Check if search + hash  param is ignored', () => {
    cy.visit('/user/1?blah=none#someHash');
    getTransferState(cy).then((ts) => expect(ts.posts).to.be.not.undefined);
  });

  it('Check that the slow user mock template appears then disappears', () => {
    cy.visit('/slow').reload();

    cy.get('app-slow>h1').contains('Scully Not Generated');
    cy.wait(2100).get('app-slow>h1').contains('Scully Generated');
  });
});
