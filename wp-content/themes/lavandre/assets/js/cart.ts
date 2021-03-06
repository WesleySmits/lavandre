/* eslint-disable camelcase */
import EventEmitter from './common/EventEmitter';
import AddCouponCode from './components/AddCouponCode';
import AmountSelector from './components/AmountSelector';
import addOrUpdateCartTotals from './util/cart';
import { sendAjaxRequest } from './util/requests';

class Cart {
    private eventEmitter: EventEmitter = EventEmitter;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private _cartElement: HTMLElement = document.getElementById('custom-cart') as HTMLElement;

    private updateTimeout: number | null = null;

    private updateTimeoutDuration: number = 800;

    private amountSelector: AmountSelector | null = null;

    constructor() {
        this.eventEmitter.on('template-instantiated', (element: HTMLElement) => {
            if (!element || !element.dataset.panelName) {
                return;
            }

            if (element.dataset.panelName === 'cart-panel') {
                this.handleCartPanel(element as InteractableHTMLDialogElement);
                this.initialize();
            }
        });
    }

    public initialize(): void {
        if (!this._cartElement) {
            return;
        }

        this.initializeCouponCodeForm();
        this.setEventListeners();
    }

    get cartElement() {
        return this._cartElement;
    }

    set cartElement(element: HTMLElement) {
        this._cartElement = element;
    }

    get cartShortCode() {
        return this._cartElement && this._cartElement.classList.contains('custom-cart--mini')
            ? '[ww_custom_cart_mini]'
            : '[ww_custom_cart]';
    }

    private setEventListeners(): void {
        this.amountSelector = new AmountSelector(this._cartElement);
        this.amountSelector.initialize();

        const deleteCartItemButtons: HTMLButtonElement[] = Array.from(
            document.querySelectorAll('[data-delete-item]')
        );
        for (let i = 0; i < deleteCartItemButtons.length; i++) {
            const button = deleteCartItemButtons[i];
            button.addEventListener('click', () => {
                this.deleteCartItem(button);
            });
        }

        this.eventEmitter.on('amount-changed', (input: HTMLInputElement) => {
            if (!this._cartElement.contains(input)) {
                return;
            }

            if (this.updateTimeout !== null) {
                window.clearTimeout(this.updateTimeout);
            }

            this.updateTimeout = window.setTimeout(() => {
                this.updateCartItem(input);
            }, this.updateTimeoutDuration);
        });

        const removeCouponCodeLinks: HTMLAnchorElement[] = Array.from(
            document.querySelectorAll('[data-remove-code]')
        );
        for (let index = 0; index < removeCouponCodeLinks.length; index++) {
            const anchor: HTMLAnchorElement = removeCouponCodeLinks[index];
            // eslint-disable-next-line no-loop-func
            anchor.addEventListener('click', (event: Event) => {
                event.preventDefault();

                const code: string | undefined = anchor.dataset.removeCode;

                if (!code) {
                    window.location.href = anchor.href;
                    return;
                }

                const data: requestData = {
                    action: 'coupon_code_remove',
                    code,
                    shortcode: this.cartShortCode
                };

                sendAjaxRequest(
                    data,
                    this.ajaxEndpoint,
                    this._cartElement,
                    this.updateCart.bind(this),
                    () => {
                        window.location.href = anchor.href;
                    }
                );
            });
        }
    }

    private initializeCouponCodeForm(): void {
        const couponForm: HTMLFormElement | null = document.getElementById(
            'coupon-code-form'
        ) as HTMLFormElement;
        if (couponForm === null) {
            return;
        }

        const addCouponCode: AddCouponCode = new AddCouponCode(couponForm);
        addCouponCode.initialize();
    }

    private updateCartItem(input: HTMLInputElement): void {
        const item: HTMLElement | null = input.closest('.custom-cart__item');
        const productID: string | undefined = item?.dataset.productId;
        const variation_id: number = Number(item?.dataset.variationId) ?? 0;

        if (!item || !productID) {
            throw new Error('no item found');
        }

        const data = {
            action: 'update_cart_item',
            product_id: productID,
            quantity: input.value,
            variation_id: variation_id.toString(),
            shortcode: this.cartShortCode
        };

        sendAjaxRequest(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
    }

    private deleteCartItem(button: HTMLButtonElement): void {
        const item: HTMLElement | null = button.closest('.custom-cart__item');
        const productID: string | undefined = button.dataset.productId;
        const variationID: string = button.dataset.variationId || '';

        if (!item || !productID || !variationID) {
            throw new Error('no item found');
        }

        const data = {
            action: 'delete_cart_item',
            product_id: productID,
            variation_id: variationID,
            shortcode: this.cartShortCode
        };

        sendAjaxRequest(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
    }

    public updateCart(content?: any): void {
        if (content) {
            this.updateCartContent(content);
            return;
        }

        this.getCartContent();
    }

    private getCartContent(): void {
        const data = {
            action: 'update_cart',
            shortcode: this.cartShortCode
        };

        sendAjaxRequest(
            data,
            this.ajaxEndpoint,
            this._cartElement,
            this.updateCartContent.bind(this)
        );
    }

    public updateCartContent(response: ajaxResponse): void {
        if (!response || !response.data || !response.data.content) {
            return;
        }

        const { content } = response.data;

        this._cartElement.outerHTML = content;
        this._cartElement = document.getElementById('custom-cart') as HTMLUListElement;

        addOrUpdateCartTotals(response.data['total-cart-quantity']);
        this.setEventListeners();
    }

    private handleCartPanel(panel: InteractableHTMLDialogElement) {
        const element: HTMLElement | null = panel.querySelector('#custom-cart');
        if (element === null) {
            return;
        }

        this.cartElement = element;
        this.updateCart();
    }
}

const cart = new Cart();
cart.initialize();

export { Cart };
export default cart;
