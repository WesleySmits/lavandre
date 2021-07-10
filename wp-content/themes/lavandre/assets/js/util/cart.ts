export function addOrUpdateCartTotals(cartAmount: string) {
    const parent: HTMLElement | null = document.querySelector('.cart-amount-icon');
    if (parent === null) {
        throw new Error('No cart amount wrapper found');
    }

    let cartAmountElement: HTMLElement | null = parent.querySelector('.cart-amount-counter');

    if (cartAmountElement === null) {
        cartAmountElement = document.createElement('SPAN');
        cartAmountElement.classList.add('cart-amount-counter');

        parent.appendChild(cartAmountElement);
    }

    cartAmountElement.innerText = cartAmount;
}
