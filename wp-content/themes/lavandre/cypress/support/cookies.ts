export const cookieList = {
    approvedCookies: 'approved_cookies',
    newsletterPopupSeen: 'newsletter-popup-seen'
}

before(() => {
    cy.setCookie(cookieList.approvedCookies, 'true');
    cy.setCookie(cookieList.newsletterPopupSeen, 'true');
});

Cypress.Cookies.defaults({
    preserve: [
        cookieList.approvedCookies,
        cookieList.newsletterPopupSeen
    ]
});
