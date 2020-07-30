/// <reference types="Cypress" />

context('Scully-Content', () => {
  it('check link to have target_blank in blog page 2', () => {
    cy.visit('/blog/___UNPUBLISHED___k5nhcflm_SJwD4Z0QDrIHg1PGHo2mrfLZE8sfUsPy/');

    cy.get('a[target]').should('have.attr', 'target', '_blank');
  });

  it('should have customContent page2', () => {
    cy.visit('/content/two');
    cy.get('app-content-component > h1:nth-child(1)').should('have.html', 'Content component');
    cy.get('app-content-component > h1:nth-child(2)').should('have.html', ' Sample page two');
  });

  it('should have customContent page1 after navigation on same level', () => {
    /** click the 'one' a tag */
    cy.get('app-content-component > a:nth-child(5)').click().wait(15);
    cy.get('app-content-component > h1:nth-child(1)').should('have.html', 'Content component');
    cy.get('app-content-component > h1:nth-child(2)').should('have.html', ' Sample page one');
  });

  it('should have blog page 1 after navigation to different route', () => {
    /** click the 'blog page 1' a tag */
    cy.get('app-content-component > p:nth-child(4) > a').click().wait(15);
    cy.get('#or-how-to-do-interesting-blog-things').should('have.html', 'or, how to do interesting blog things');
  });

  it('should be able to navigate into subfolders', () => {
    /** click the '/blog/2014/2/12/asdf' a tag */
    cy.get('app-blog-holder > span:nth-child(7) > a').click().wait(15);
    // #deep-folder-1
    cy.get('#deep-folder-1').should('have.html', 'Deep folder 1');
    cy.get('#its-a-wild-world-after-all').should('have.html', 'its a wild world after all');
  });

  it('should be able to navigate back up', () => {
    /** click the '/blog/2014/2/12/asdf' a tag */
    cy.get('app-blog-holder > span:nth-child(8) > a').click().wait(15);
    cy.get('#or-how-to-do-interesting-blog-things').should('have.html', 'or, how to do interesting blog things');
  });

  it('and navigate back to conent page 2', () => {
    /** click the 'content page' a tag */
    cy.get('app-blog-holder > app-blog > p:nth-child(6) > a').click().wait(15);
    cy.get('app-content-component > h1:nth-child(1)').should('have.html', 'Content component');
    cy.get('app-content-component > h1:nth-child(2)').should('have.html', ' Sample page two');
  });

  it('then to a non-scully contant page', () => {
    /** click the 'home' a tag */
    cy.get('app-root > header > a').click().wait(15);
    /** click the all routes a tag */
    cy.get('app-static > a:nth-child(2)').click().wait(15);
    cy.get('app-static > ul > li:nth-child(9) > a:nth-child(1)').should('have.html', 'My first page');
  });

  it('revisit a scully-content-page that is just left should work also', () => {
    /** click the 'content/two' a tag */
    cy.get('app-static > ul > li:nth-child(15) > a:nth-child(1)').click().wait(15);
    cy.get('app-content-component > h1:nth-child(1)').should('have.html', 'Content component');
    cy.get('app-content-component > h1:nth-child(2)').should('have.html', ' Sample page two');
  });
});
