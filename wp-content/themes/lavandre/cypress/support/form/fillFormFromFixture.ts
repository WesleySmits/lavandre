declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to fill a form based on a fixture
       * @example cy.fillFormFromFixture('/path/to/fixture', 'fixtureName', #formId)
       */
       fillFormFromFixture(filePath: string, name: string, formSelector: string): globalThis.Cypress.Chainable<Element>
    }
}

Cypress.Commands.add("fillFormFromFixture", (filePath, name, formSelector) => {
    return cy.fixture(filePath).as(name).then(function(data) {
        this.data = data;

        for (let key of Object.keys(this.data)) {
            if (this.data[key].type === "email") {
                const timestamp = Date.now();
                const testEmail = this.data[key].value.replace('@', `${timestamp}@`);
                cy.get(`${formSelector} [name="${this.data[key].name}"]`).focus().type(testEmail);
            } else if (this.data[key].type === "input") {
                cy.get(`${formSelector} [name="${this.data[key].name}"]`).focus().type(this.data[key].value);
            } else if (this.data[key].type === "select") {
                cy.get(`${formSelector} [name="${this.data[key].name}"]`).select(this.data[key].value);
            }
        }
    });
});
