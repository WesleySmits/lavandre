import { endpoints } from "../../../support/objects/endpoints";

let productPrice: string = '';
let shippingPrice: string = '5,95';
let vatPrice: string = '';
let orderPrice: string = '';

describe('Test the order flow', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.viewport('macbook-16')
        cy.visit(endpoints.productDetail);
        cy.get('[data-product-price]').invoke('text').then((text) => {
            productPrice = text;
        });

        cy.addProductToCart();
        cy.wait(1000);

        cy.get('[data-panel-name="cart-panel"]').within(() => {
            cy.get('[data-cy="mini-cart-button"]').click();
        });

        cy.url().should('contain', 'cart');

        cy.get('[data-cy="subtotal"] [data-product-price]').invoke('text').then((text) => {
            expect(text).to.eq(productPrice);
        });
    });

    it("should order an item succesfully as a guest", () => {
        cy.get('#custom-cart .custom-cart__cta').click();
        cy.get('.customer-login__guest-option > [is="lavandre-button"]').click();

        // Toggle different shipping address
        cy.get('label[for="ship-to-different-address-radio-no"]').click();

        cy.wait(2000);

        const formSelector: string = 'form[name="checkout"]';
        cy.fillFormFromFixture('guestOrderData', 'order', formSelector);

        cy.wait(2000);

        checkCartPrices();

        cy.get('[name="option_sub_id"]').select('1');

        cy.get('#terms').check({ force: true });
        cy.get('#place_order').click();

        // Pay.nl test environment
        cy.get('#token-input').type('1f327d71a4b010a2b5c874cb4de58fdf0358c297');
        cy.get('#formSubmit1').click();

        // Thank you page
        cy.url().should('contain', 'order-received');
        checkCartPrices();
    });
});

function checkCartPrices(): void {
    cy.get('.cart-subtotal [data-product-price]').invoke('text').then((text) => {
        expect(text).to.eq(productPrice);
    });

    cy.get('.woocommerce-shipping-totals [data-product-price]').invoke('text').then((text) => {
        expect(text).to.eq(shippingPrice);
    });

    cy.get('.tax-total [data-product-price]').invoke('text').then((text) => {
        vatPrice = calculateVat(productPrice, shippingPrice);
        expect(text).to.eq(vatPrice);
    });

    cy.get('.order-total [data-product-price]').invoke('text').then((text) => {
        orderPrice = calculateTotal(productPrice, shippingPrice, vatPrice);
        expect(text).to.eq(orderPrice);
    });
}

function calculateVat(productPrice: string, shippingPrice: string): string {
    let price: number = Number(productPrice.replace(',', '.'));
    let shipping: number = Number(shippingPrice.replace(',', '.'));

    let subTotal: number = price + shipping;
    let vatPrice: number = subTotal * 0.21;

    const split = vatPrice.toFixed(4).toString().split('.');
    const cents: number = Math.ceil(Number(split[1]) / 100);
    split[1] = cents.toString();

    const newVatPrice: string = split.join('.');

    return newVatPrice.replace('.', ',');
}

function calculateTotal(productPrice: string, shippingPrice: string, vatPrice: string): string {
    let price: number = Number(productPrice.replace(',', '.'));
    let shipping: number = Number(shippingPrice.replace(',', '.'));
    let vat: number = Number(vatPrice.replace(',', '.'));

    return String(price + shipping + vat).replace('.', ',');
}
