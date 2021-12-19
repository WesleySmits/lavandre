type OpenSidePanelOptions = {
    toggle: string;
    panel: string;
};

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to test opening a side-panel.
         * @example cy.openSidePanel('{ selector: 'main', toggleSelector: '[data-curtain-toggle="seo-text"]' }')
         */
        openSidePanel(options: OpenSidePanelOptions): Chainable<Element>;
    }
}

Cypress.Commands.add('openSidePanel', (options: OpenSidePanelOptions): Chainable<Element> => {
    cy.get(options.toggle).first().click();
    cy.get(options.panel).should('be.visible');
});
