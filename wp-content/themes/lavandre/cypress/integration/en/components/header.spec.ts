/// <reference types="cypress" />

// describe('header tests - mobile', () => {
//     beforeEach(() => {
//         cy.viewport('iphone-xr');
//         cy.visit('/');
//     });

//     it('should', () => {

//     });
// });

describe('Header tests - desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should load all navigation links', () => {
        cy.get('.ww-site-header__top a').each(($link) => {
            cy.request($link.prop('href'));
        });

        cy.get('.ww-site-header__nav-link').each(($link) => {
            cy.request($link.prop('href'));
        });
    });

    it('should have a functioning search form', () => {
        cy.get('.header__search .woocommerce-product-search').should('not.be.visible');
        cy.get('.header__search button').first().click();
        cy.get('.header__search .woocommerce-product-search').should('be.visible');

        cy.get('.header__search .product-search-field').type('test');
        cy.get('.header__search form.woocommerce-product-search').submit();
        cy.url().should('contain', 's=test');
    });

    it('should have a functioning delivery info sidepanel', () => {
        const toggleSelector: string = '[data-panel="order-delivery"]';
        const panelSelector: string = '[data-panel-name="order-delivery"]';

        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });
        cy.accordion({selector: panelSelector, height: 10});
    });

    it('should have a functioning customer service sidepanel', () => {
        const toggleSelector: string = '[data-panel="customer-service"]';
        const panelSelector: string = '[data-panel-name="customer-service"]';

        cy.get(toggleSelector).click();
        cy.get(panelSelector).should('be.visible');

        cy.accordion({selector: panelSelector, height: 10});
    });

    it('should have a functioning my account sidepanel', () => {
        cy.get('#my-account-toggle').click();
        cy.url().should('contain', 'account');
    });

    it('should have a functioning cart sidepanel', () => {
        cy.get('#cart-toggle').click();
        cy.url().should('contain', 'cart');
    });
});
