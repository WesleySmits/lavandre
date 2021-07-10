type AccordionOptions = {
    selector?: string,
    toggleSelector?: string,
    height?: number
}

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to test the opening of all curtains in an accordion.
       * @example cy.accordion('{ selector: 'main', toggleSelector: '[data-curtain-toggle="homepage-seo-text"]' }')
       */
       accordion(optionArguments: AccordionOptions): Chainable<Element>
    }
}

Cypress.Commands.add('accordion', (optionArguments: AccordionOptions) => {
    const defaultOptions: AccordionOptions = {
        selector: 'body',
        toggleSelector: '[data-curtain-toggle]',
        height: 100
    };

    const options: AccordionOptions = {...defaultOptions, ...optionArguments};

    cy.get(`${options.selector} ${options.toggleSelector}`).each(($element) => {
        cy.get(`${options.selector} [data-curtain-content="${$element.data('curtainToggle')}"]`).invoke('outerHeight').should('be.lt', options.height);
        cy.wrap($element).click();
        cy.get(`${options.selector} [data-curtain-content="${$element.data('curtainToggle')}"]`).invoke('outerHeight').should('be.gt', options.height);
    });
});
