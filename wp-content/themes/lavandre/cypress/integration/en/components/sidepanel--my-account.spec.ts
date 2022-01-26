/// <reference types="cypress" />

import { StaticResponse } from 'cypress/types/net-stubbing';
import { adminAjaxUrl } from '../../../support/form/form';

let userEmail: string;
const toggleSelector: string = '[data-panel="my-account-panel"]';
const panelSelector: string = '[data-panel-name="my-account-panel"]';

describe('My account sidepanel tests', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should fail sending a password forget without a username', (done) => {
        const formId: string = '#ajax-login-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('Username not set');
            done();
            return false;
        });

        cy.get(`${formId} [data-role="password-forget"]`).click();
    });

    it('should fail sending a password forget with bad credentials', () => {
        const formId: string = '#ajax-login-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.get(`${formId} [name="username"]`).type('testuser@lavandre.com');

        cy.intercept('POST', adminAjaxUrl).as('ajaxCall');
        cy.get(`${formId} [data-role="password-forget"]`).click();

        cy.wait('@ajaxCall').then(({ response }) => {
            expect(response.statusCode).to.eq(401);
            expect(response.body.success).eq(false);
        });
    });

    it('should fail sending a password forget with bad credentials', () => {
        const formId: string = '#ajax-login-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.get(`${formId} [name="username"]`).type('testuser@lavandre.com');

        const mockResponse: StaticResponse = {
            body: {
                success: true
            }
        };

        cy.intercept('POST', adminAjaxUrl, mockResponse).as('ajaxCall');
        cy.get(`${formId} [data-role="password-forget"]`).click();

        cy.wait('@ajaxCall').then(({ response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.success).eq(true);
        });
    });

    it('should create a new account', () => {
        const formId: string = '#ajax-register-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.fillFormFromFixture('userData', 'user', formId);
        cy.get(`${formId} [name="email"]`)
            .invoke('val')
            .then((value) => {
                userEmail = value.toString();

                cy.intercept('POST', adminAjaxUrl).as('ajaxCall');

                cy.get(formId).submit();

                cy.wait('@ajaxCall').then(({ response }) => {
                    expect(response.statusCode).to.eq(200);
                    expect(response.body.success).eq(true);
                    cy.url().should('include', '/my-account/');
                });
            });
    });

    it('should fail to log in to new account with bad credentials', () => {
        const formId: string = '#ajax-login-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.get(`${formId} [name="username"]`).type('testuser@lavandre.com');
        cy.get(`${formId} [name="password"]`).type('test');

        cy.intercept('POST', adminAjaxUrl).as('ajaxCall');
        cy.get(formId).submit();

        cy.wait('@ajaxCall').then(({ response }) => {
            expect(response.statusCode).to.eq(401);
            expect(response.body.success).eq(false);
            cy.get(panelSelector).should('be.visible');
            cy.get('body').should('not.have.class', 'logged-in');
        });
    });

    it('should log in to new account', () => {
        const formId: string = '#ajax-login-form';
        cy.openSidePanel({ toggle: toggleSelector, panel: panelSelector });

        cy.get(`${formId} [name="username"]`).type(userEmail);
        cy.get(`${formId} [name="password"]`).type('Johndoe_1993');

        cy.intercept('POST', adminAjaxUrl).as('ajaxCall');
        cy.get(formId).submit();

        cy.wait('@ajaxCall').then(({ response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.success).eq(true);
        });
    });
});
