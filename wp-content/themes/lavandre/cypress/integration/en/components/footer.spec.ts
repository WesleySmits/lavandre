/// <reference types="cypress" />

describe('Footer tests - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visit('/');
    });

    it('should be able to open all accordions', () => {
        cy.accordion({ selector: '#footer', height: 10 });
    });
});
