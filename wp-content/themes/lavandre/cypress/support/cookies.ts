before(() => {
    cy.setCookie('approved_cookies', 'true');
});

Cypress.Cookies.defaults({
    preserve: ['approved_cookies']
});
