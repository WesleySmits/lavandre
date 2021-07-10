import EventEmitter from "./common/EventEmitter";
import AddCouponCode from "./components/AddCouponCode";
import AmountSelector from "./components/AmountSelector";
import { addOrUpdateCartTotals } from "./util/cart";
import { sendAjaxRequest } from "./util/requests";

class Cart {
    private eventEmitter: EventEmitter = EventEmitter;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private _cartElement: HTMLUListElement = document.getElementById('custom-cart') as HTMLUListElement;

    private cartShortCode: string = (this._cartElement && this._cartElement.classList.contains('custom-cart--mini')) ? '[ww_custom_cart_mini]' : '[ww_custom_cart]';

    private updateTimeout: number | null = null;

    private updateTimeoutDuration: number = 800;

    private amountSelector: AmountSelector | null = null;

    public initialize(): void {
        if (!this._cartElement) {
            return;
        }

        this.setEventListeners();
    }

    set cartElement(element: HTMLUListElement) {
        this._cartElement = element;
    }

    private setEventListeners(): void {
        this.amountSelector = new AmountSelector(this._cartElement);
        this.amountSelector.initialize();

        const deleteCartItemButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll('[data-delete-item]'));
        for (let i = 0; i < deleteCartItemButtons.length; i++) {
            const button = deleteCartItemButtons[i];
            button.addEventListener('click', () => { this.deleteCartItem(button); });
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

        const removeCouponCodeLinks: HTMLAnchorElement[] = Array.from(document.querySelectorAll('[data-remove-code]'));
        for (let index = 0; index < removeCouponCodeLinks.length; index++) {
            const anchor: HTMLAnchorElement = removeCouponCodeLinks[index];
            anchor.addEventListener('click', (event: Event) => {
                event.preventDefault();

                const code: string | undefined = anchor.dataset.removeCode;

                if (!code) {
                    window.location.href = anchor.href;
                    return;
                }

                const data: requestData = {
                    action: 'coupon_code_remove',
                    code: code,
                    shortcode: this.cartShortCode
                };

                sendAjaxRequest(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this), () => { window.location.href = anchor.href; });
            });
        }

        const openCouponButton: HTMLButtonElement | null = this._cartElement.querySelector('#coupon-code-add');
        if (openCouponButton) {
            openCouponButton.addEventListener('click', () => {
                // @ts-ignore
                elementorProFrontend.modules.popup.showPopup({ id: 6235 });
            });
        }

        const openTreePlantingButton: HTMLButtonElement | null = this._cartElement.querySelector('#tree-planting-button');
        if (openTreePlantingButton) {
            openTreePlantingButton.addEventListener('click', () => {
                // @ts-ignore
                elementorProFrontend.modules.popup.showPopup({ id: 6311 });
            });
        }

        let couponForm: HTMLFormElement | null = null;
        // @ts-ignore
        jQuery(document).on('elementor/popup/show', (event: any, id: any, instance: any) => {
            if (id === 6235) {
                couponForm = document.getElementById('coupon-code-form') as HTMLFormElement;
                if (couponForm !== null) {
                    const addCouponCode: AddCouponCode = new AddCouponCode(couponForm);
                    addCouponCode.initialize();
                }
            }
        });

        // @ts-ignore
        jQuery(document).on('elementor/popup/hide', (event: any, id: any, instance: any) => {
            if (id === 6235) {
                couponForm = null;
            }
        });
    }

    private updateCartItem(input: HTMLInputElement): void {
        const item: HTMLElement | null = input.closest('.custom-cart__item');
        const productID: string | undefined = input.dataset.productId;

        if (!item || !productID) {
            throw new Error('no item found');
        }

        const data = {
            action: 'update_cart_item',
            product_id: productID,
            quantity: input.value,
            shortcode: this.cartShortCode
        };

        sendAjaxRequest(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
    }

    private deleteCartItem(button: HTMLButtonElement): void {
        const item: HTMLElement | null = button.closest('.custom-cart__item');
        const productID: string | undefined = button.dataset.productId;
        if (!item || !productID) {
            throw new Error('no item found');
        }

        const data = {
            action: 'delete_cart_item',
            product_id: productID,
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

        sendAjaxRequest(data, this.ajaxEndpoint, this._cartElement, this.updateCartContent.bind(this));
    }

    public updateCartContent(response: ajaxResponse): void {
        if (!response || !response.data || !response.data['content']) {
            return;
        }

        const content: string = response.data['content'];

        this._cartElement.outerHTML = content;
        this._cartElement = document.getElementById('custom-cart') as HTMLUListElement;

        addOrUpdateCartTotals(response.data['total-cart-quantity']);
        this.setEventListeners();
    }
}

const cart = new Cart();
cart.initialize();

export { Cart };
export default cart;
