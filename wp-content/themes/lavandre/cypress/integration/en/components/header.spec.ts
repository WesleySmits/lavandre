/// <reference types="cypress" />

describe('Header tests - desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should load all navigation links', () => {
        cy.get('.ww-site-header__top a').testLinks();
        cy.get('.ww-site-header__nav-link').testLinks();
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

        cy.get(toggleSelector).each(($element) => {
            cy.wrap($element).click();
            cy.get(panelSelector).should('be.visible');

            cy.get(panelSelector).find('.side-panel__close').click();
            cy.get(panelSelector).should('not.be.visible');
        });

        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });
        cy.accordion({selector: panelSelector, height: 10});
    });

    it('should have a functioning customer service sidepanel', () => {
        const toggleSelector: string = '[data-panel="customer-service"]';
        const panelSelector: string = '[data-panel-name="customer-service"]';

        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });
    });

    it('should have a functioning my account sidepanel', () => {
        const toggleSelector: string = '[data-panel="my-account-panel"]';
        const panelSelector: string = '[data-panel-name="my-account-panel"]';

        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });
    });

    it('should have a functioning cart sidepanel', () => {
        const toggleSelector: string = '[data-panel="cart-panel"]';
        const panelSelector: string = '[data-panel-name="cart-panel"]';

        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });
    });
});
