/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to test the status 200 on all given link hrefs.
       * @example cy.get('nav a').testLinks()
       */
       testLinks(): Chainable<Element>
    }
}

const commandOptions: Cypress.CommandOptions = {
    prevSubject: 'element'
};

// @ts-ignore
Cypress.Commands.add('testLinks', commandOptions, (subject) => {
    cy.wrap(subject).should('have.length.at.least', 1).each((link) => {
        if (!link) {
            return;
        }

        cy.request(link.prop('href'));
    });
});
