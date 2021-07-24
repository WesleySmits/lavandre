import { adminAjaxUrl } from "../form/form";

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to fill a form based on a fixture
       * @example cy.addProductToCart()
       */
       addProductToCart()
    }
}

Cypress.Commands.add("addProductToCart", () => {
    cy.intercept('POST', adminAjaxUrl).as('ajaxCall');

    cy.get('button[name="add-to-cart"]').click();

    return cy.wait('@ajaxCall').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.success).eq(true);
        cy.get('[data-panel-name="cart-panel"]').should("be.visible");
        cy.get('[data-panel-name="cart-panel"] .custom-cart__cta').should('exist');
    });
});
