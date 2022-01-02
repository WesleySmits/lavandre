/// <reference types="cypress" />

const mobileMenuToggleSelector: string = '[data-panel="mobile-menu"]';
const mobileMenuSelector: string = '[data-panel-name="mobile-menu"]';

const navigationPages: string[] = [
    'Shop',
    'Sustainability',
    'Blog',
    'Contact',
    'Sign-in',
];

describe('Mobile menu tests - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visit('/');
        cy.get(mobileMenuToggleSelector).first().click();
        cy.get(mobileMenuSelector).first().should('be.visible');
    });

    it('should close the mobile menu', () => {
        cy.get(mobileMenuSelector).find('.side-panel__close').click();
        cy.get(mobileMenuSelector).first().should('not.be.visible');
    });

    navigationPages.forEach((page: string) => {
        it(`should link to a valid page for: ${page}`, () => {
            cy.get(mobileMenuSelector)
                .contains(page)
                .then((link) => {
                    if (!link) {
                        return;
                    }
                    cy.request(link.prop('href'));
                });
        });
    });
});

describe('Mobile menu tests - desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should not show the mobile menu or toggle', () => {
        cy.get(mobileMenuToggleSelector).should('not.be.visible');
        cy.get(mobileMenuSelector).should('not.exist');
    });
});
