import cart from '../cart';
import { sendAjaxRequest } from '../util/requests';
import FieldValidation from './FieldValidation';

export default class AddCouponCode {
    private form: HTMLFormElement;

    private couponField: HTMLInputElement;

    private submitButton: HTMLButtonElement;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private cartElement: HTMLTableElement = document.getElementById(
        'custom-cart'
    ) as HTMLTableElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.couponField = this.form.querySelector('[name="coupon-code"]') as HTMLInputElement;
        this.submitButton = this.form.querySelector('[type="submit"]') as HTMLButtonElement;
    }

    public initialize(): void {
        this.form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const formData: FormData = new FormData(this.form);
            let couponCode: string | File | null = formData.get('coupon-code') || '';

            if (!couponCode || typeof couponCode !== 'string') {
                couponCode = '';
            }

            const data: requestData = {
                action: 'coupon_code_add',
                code: couponCode.toLowerCase()
            };

            FieldValidation.removeErrorText(this.couponField);
            sendAjaxRequest(
                data,
                this.ajaxEndpoint,
                this.cartElement,
                this.onSuccess.bind(this),
                this.onFailure.bind(this),
                event,
                this.submitButton
            );

            return false;
        });
    }

    private onSuccess(response: ajaxResponse, event?: Event) {
        const panel: HTMLDialogElement | null = this.form.closest('[data-panel-name]');
        if (panel) {
            panel.dispatchEvent(new CustomEvent('toggle'));
        }

        cart.updateCartContent(response);
    }

    private onFailure(error: Error) {
        FieldValidation.appendErrorText(this.couponField, error.message);
        throw error;
    }
}
