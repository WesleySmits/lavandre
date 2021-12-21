const cookieList = {
    approvedCookies: 'approved_cookies'
};

export default cookieList;

before(() => {
    cy.setCookie(cookieList.approvedCookies, 'true');
});

Cypress.Cookies.defaults({
    preserve: [cookieList.approvedCookies]
});
