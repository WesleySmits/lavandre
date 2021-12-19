import addOrUpdateCartTotals from './cart';
import { parseStringAsHtml } from './dom';

describe('Test cart utils', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail because no wrapper was found', () => {
        expect(addOrUpdateCartTotals).toThrow('No cart amount wrapper found');
    });

    it('should early return', () => {
        const element = parseStringAsHtml(
            `
            <a href="/cart" class="no-button cart-amount-icon" id="cart-toggle" data-panel="cart-panel" aria-label="Shopping cart">
                <svg id="cart" viewBox="0 0 20 20"><path d="M18.273 17.518a1.18 1.18 0 0 1-1.173 1.191H2.9a1.181 1.181 0 0 1-1.173-1.191V5.145h3.091v1.319a.637.637 0 0 0 1.273 0V5.145H13.9V6.464a.637.637 0 0 0 1.273 0V5.255a.506.506 0 0 0 0-.11h3.1v12.373zM10 1.291a3.908 3.908 0 0 1 3.636 2.564H6.364A3.901 3.901 0 0 1 10 1.291zm5 2.564a5.154 5.154 0 0 0-10 0H.455v13.636A2.461 2.461 0 0 0 2.9 20h14.2a2.459 2.459 0 0 0 1.736-.735 2.459 2.459 0 0 0 .709-1.747V3.882L15 3.855z" fill-rule="evenodd"></path></svg>
            </a>
        `,
            'a'
        );

        document.body.appendChild(element);

        addOrUpdateCartTotals('0');
    });

    it('should remove cart counter', () => {
        const element = parseStringAsHtml(
            `
            <a href="/cart" class="no-button cart-amount-icon" id="cart-toggle" data-panel="cart-panel" aria-label="Shopping cart">
                <svg id="cart" viewBox="0 0 20 20"><path d="M18.273 17.518a1.18 1.18 0 0 1-1.173 1.191H2.9a1.181 1.181 0 0 1-1.173-1.191V5.145h3.091v1.319a.637.637 0 0 0 1.273 0V5.145H13.9V6.464a.637.637 0 0 0 1.273 0V5.255a.506.506 0 0 0 0-.11h3.1v12.373zM10 1.291a3.908 3.908 0 0 1 3.636 2.564H6.364A3.901 3.901 0 0 1 10 1.291zm5 2.564a5.154 5.154 0 0 0-10 0H.455v13.636A2.461 2.461 0 0 0 2.9 20h14.2a2.459 2.459 0 0 0 1.736-.735 2.459 2.459 0 0 0 .709-1.747V3.882L15 3.855z" fill-rule="evenodd"></path></svg>
                <span class="cart-amount-counter">5</span>
            </a>
        `,
            'a'
        );

        document.body.appendChild(element);

        addOrUpdateCartTotals('0');
    });

    it('should add cart counter', () => {
        const element = parseStringAsHtml(
            `
            <a href="/cart" class="no-button cart-amount-icon" id="cart-toggle" data-panel="cart-panel" aria-label="Shopping cart">
                <svg id="cart" viewBox="0 0 20 20"><path d="M18.273 17.518a1.18 1.18 0 0 1-1.173 1.191H2.9a1.181 1.181 0 0 1-1.173-1.191V5.145h3.091v1.319a.637.637 0 0 0 1.273 0V5.145H13.9V6.464a.637.637 0 0 0 1.273 0V5.255a.506.506 0 0 0 0-.11h3.1v12.373zM10 1.291a3.908 3.908 0 0 1 3.636 2.564H6.364A3.901 3.901 0 0 1 10 1.291zm5 2.564a5.154 5.154 0 0 0-10 0H.455v13.636A2.461 2.461 0 0 0 2.9 20h14.2a2.459 2.459 0 0 0 1.736-.735 2.459 2.459 0 0 0 .709-1.747V3.882L15 3.855z" fill-rule="evenodd"></path></svg>
            </a>
        `,
            'a'
        );

        document.body.appendChild(element);

        addOrUpdateCartTotals('5');
    });
});
