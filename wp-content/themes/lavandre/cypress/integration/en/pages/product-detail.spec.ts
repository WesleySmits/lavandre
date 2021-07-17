/// <reference types="cypress" />

import { Interception } from "cypress/types/net-stubbing";
import { adminAjaxUrl } from "../../../support/form/form";

describe("Product detail tests", () => {
    beforeEach(() => {
        cy.visit("/product/organic-badhanddoek-200x100-wit/");
    });

    it("should display image and thumbnails", () => {
        cy.get("[data-thumbnail-id]")
            .should("have.length.at.least", 1)
            .should("be.visible");
        cy.get("[data-image-id]")
            .should("have.length.at.least", 1)
            .each((element, index) => {
                if (index === 0) {
                    cy.wrap(element).should("be.visible");
                } else {
                    cy.wrap(element).should("not.be.visible");
                }
            });
    });

    it("should toggle main image on thumbnail clicks", () => {
        cy.get("[data-thumbnail-id]").each((thumbnail) => {
            const id: string = thumbnail.data("thumbnail-id");
            cy.wrap(thumbnail)
                .click()
                .then(() => {
                    cy.get(`[data-image-id="${id}"]`)
                        .should("exist")
                        .should("be.visible");
                });
        });
    });

    it("should open/close specification curtain", () => {
        cy.accordion({ selector: "#product-detail__description", height: 10 });
    });

    it("should have functioning +- buttons", () => {
        cy.get('input[name="quantity"]')
            .should("exist")
            .should("have.value", 1);

        cy.get(".plus-amount").click();
        cy.get('input[name="quantity"]').should("have.value", 2);

        cy.get(".minus-amount").click();
        cy.get('input[name="quantity"]').should("have.value", 1);
    });

    it("should throw an error when adding to the cart without selecting options", (done) => {
        cy.get('[name="attribute_pa_pack-size"]')
            .should("exist")
            .each((radio) => {
                radio.prop("checked", false);
            });

        cy.get('[name="attribute_pa_color"]')
            .should("exist")
            .each((radio) => {
                radio.prop("checked", false);
            });

        cy.get('button[name="add-to-cart"]').click();
        cy.get('[data-panel-name="cart-panel"]').should("not.be.visible");

        cy.on("uncaught:exception", (err) => {
            expect(err.message).to.include("Product add form is not valid");
            done();
            return false;
        });
    });

    it("should add the product to the cart", () => {
        addProductToCart();
    });

    it('should remove product from cart side panel', () => {
        addProductToCart().then(() => {
            cy.get('[data-panel-name="cart-panel"] .custom-cart__item').should("exist");
            cy.intercept('POST', adminAjaxUrl).as('ajaxCall');
            cy.get('[data-panel-name="cart-panel"] [data-delete-item]').click();

            cy.wait('@ajaxCall').then(({ response }) => {
                expect(response.statusCode).to.eq(200);
                expect(response.body.success).eq(true);
                cy.get('[data-panel-name="cart-panel"] .custom-cart__item').should("not.exist");
            });
        });
    });
});

function addProductToCart(): Cypress.Chainable<Interception> {
    cy.intercept('POST', adminAjaxUrl).as('ajaxCall');

    cy.get('button[name="add-to-cart"]').click();

    return cy.wait('@ajaxCall').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.success).eq(true);
        cy.get('[data-panel-name="cart-panel"]').should("be.visible");
        cy.get('[data-panel-name="cart-panel"] .custom-cart__cta').should('exist');
    });
}
