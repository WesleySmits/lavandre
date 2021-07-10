type OpenSidePanelOptions = {
    toggle: string,
    panel: string
}

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to test opening a side-panel.
       * @example cy.openSidePanel('{ selector: 'main', toggleSelector: '[data-curtain-toggle="homepage-seo-text"]' }')
       */
       openSidePanel(options: OpenSidePanelOptions): Chainable<Element>
    }
}

Cypress.Commands.add('openSidePanel', (options: OpenSidePanelOptions) => {
    cy.get(options.toggle).click();
    cy.get(options.panel).should('be.visible');
});
