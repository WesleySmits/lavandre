import Component from "../common/Component";
import SidePanel from "../ui/SidePanel";
import { addOrUpdateCartTotals } from "../util/cart";
import { sendAjaxRequest } from "../util/requests";
import Cart from '../cart';

export default class AjaxAddToCart extends Component {
    private button: HTMLButtonElement;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    constructor(button: HTMLButtonElement) {
        super();
        this.button = button;
    }

    public initialize(): void {
        this.button.addEventListener('click', (event: Event) => {
            event.preventDefault();

            const form: HTMLFormElement | null = this.button.closest('form');
            const quantity: number = Number((form?.querySelector('input[name="quantity"]') as HTMLInputElement)?.value) || 1;
            // @ts-ignore
            const variation_id: number = Number(form?.elements['attribute_attribute_pa_aantal-per-omverpakking']?.value) ?? 0;

            const data = {
                action: 'ajaxaddtocart',
                product_id: this.button.value,
                quantity: quantity.toString(),
                variation_id: variation_id.toString()
            };

            sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), undefined, this.button);

            return false;
        });
    }

    private onSuccess(response: any): void {
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        SidePanel.openSidePanel('cart-panel');
        Cart.updateCart();

        if (response.data.cartAmount) {
            addOrUpdateCartTotals(response.data.cartAmount);
        }
    }

    private onFailure() {
        const form: HTMLFormElement | null = this.button.closest('form');
        if (form === null) {
            return;
        }

        form.submit();
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const addToCartButton: HTMLButtonElement | null = selector.querySelector('button[name="add-to-cart"]');
        if (addToCartButton === null) {
            return;
        }

        const ajaxAddToCart: AjaxAddToCart = new AjaxAddToCart(addToCartButton);
        ajaxAddToCart.initialize();
    }
}
