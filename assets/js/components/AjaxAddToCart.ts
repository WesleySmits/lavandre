import { addOrUpdateCartTotals } from "../util/cart";
import { sendAjaxRequest } from "../util/requests";

export default class AjaxAddToCart {
    private button: HTMLButtonElement;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    constructor(button: HTMLButtonElement) {
        this.button = button;
    }

    public initialize(): void {
        this.button.addEventListener('click', (event: Event) => {
            event.preventDefault();

            const form: HTMLFormElement | null = this.button.closest('form');
            const quantity: number = Number((form?.querySelector('input[name="quantity"]') as HTMLInputElement)?.value) || 1;

            const data = {
                action: 'ajaxaddtocart',
                product_id: this.button.value,
                quantity: quantity.toString()
            };

            sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), undefined, this.button);

            return false;
        });
    }

    private onSuccess(response: any): void {
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        // @ts-ignore
        elementorProFrontend.modules.popup.showPopup({ id: 6237 });

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
}
