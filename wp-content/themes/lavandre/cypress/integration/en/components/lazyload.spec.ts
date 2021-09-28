/// <reference types="cypress" />

describe('Lazy loading tests - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visit('/');
    });
});

describe('Lazy loading tests - desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    ['sustainability', 'branches'].forEach((menu: string) => {
        it(`should load ${menu} dropdown banners only on hover`, () => {
            cy.get(`[data-sub-menu="${menu}"] img`)
                .should('not.be.visible')
                .should(($imgs) => $imgs.map((i: number, img: HTMLElement) => {
                    const image: HTMLImageElement = img as HTMLImageElement;
                    expect(image.classList.contains('loaded')).eq(false);
                }));

            cy.get(`[data-sub-menu="${menu}"] .ww-site-header__nav-link`).trigger('mouseenter');
            cy.get(`[data-sub-menu="${menu}"] .ww-sub-menu`).should('be.visible');

            cy.get(`[data-sub-menu="${menu}"] img`)
                .should('be.visible')
                .should(($imgs) => $imgs.map((i: number, img: HTMLElement) => {
                    const image: HTMLImageElement = img as HTMLImageElement;
                    expect(image.classList.contains('loaded')).eq(true);
                }));
        });
    });
});
