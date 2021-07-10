/// <reference types="cypress" />

import { adminAjaxUrl, getRandomEmail } from "../../../support/form";

describe('Homepage tests - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visit('/');
    });

    it('should be able to open the seo text accordion', () => {
        cy.get('[data-curtain-toggle="homepage-seo-text"]').should('not.be.visible')
    });

    it('should be able to open all best selling products', () => {
        cy.get('#best-sellers .ww-products__link').each(($element) => {
            cy.request($element.prop('href'));
        });
    });

    it('should display an instagram feed', () => {
        cy.get('#instagram-feed').scrollIntoView();
        cy.get('#instagram-feed-mobile').should('be.visible');
        cy.get('#instagram-feed-desktop').should('not.be.visible');
    });

    it('should subscribe to newsletter', () => {
        testNewsletterSubscribe();
    });
});

describe('Homepage tests - desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should be able to open the seo text accordion', () => {
        cy.accordion({ selector: 'main', toggleSelector: '[data-curtain-toggle="homepage-seo-text"]' });
    });

    it('should be able to open all best selling products', () => {
        cy.get('#best-sellers .ww-products__link').each(($element) => {
            cy.request($element.prop('href'));
        });
    });

    it('should display an instagram feed', () => {
        cy.get('#instagram-feed').scrollIntoView();
        cy.get('#instagram-feed-desktop').should('be.visible');
        cy.get('#instagram-feed-mobile').should('not.be.visible');
    });

    it('should subscribe to newsletter', () => {
        testNewsletterSubscribe();
    });
});

function testNewsletterSubscribe() {
    const email: string = getRandomEmail();

    cy.get('#homepage-newsletter-form-email').type(email);

    cy.intercept('POST', adminAjaxUrl).as('ajaxCall');

    cy.get('#homepage-newsletter-form-submit').click();

    cy.wait('@ajaxCall').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.success).eq(true);
        cy.get('#homepage-newsletter-form .validation-message--success').should('be.visible');
    });
}
