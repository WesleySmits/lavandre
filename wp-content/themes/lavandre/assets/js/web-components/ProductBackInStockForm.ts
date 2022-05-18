import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import AjaxForm from './AjaxForm';

class ProductBackInStockForm extends AjaxForm {
    #emailField: HTMLInputElement | null = this.querySelector('[name="email"]');

    get successMessage(): string {
        return this.dataset.success || "You're in! We'll let you know when it's back.";
    }

    protected submitHandler(event: Event): void {
        event.preventDefault();

        if (!this.#emailField) {
            return;
        }

        const formData = new FormData(this);
        const email = formData.get('email')?.toString() || '';

        if (!email) {
            return;
        }

        const data = {
            action: 'ajaxproductbackinstockemail',
            email: email,
            size: this.#getProductSize() ?? ''
        };

        const submitButton = this.querySelector('[type="submit"]') as HTMLButtonElement;

        FieldValidation.removeErrorText(this.#emailField);
        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this),
            event,
            submitButton
        );
    }

    #getProductSize(): string | null {
        const form = document.querySelector('.variations_form');
        if (!form) {
            return null;
        }

        const size = form.querySelector('[name="attribute_pa_size"]:checked') as HTMLInputElement;
        if (!size) {
            return null;
        }

        return size.value;
    }

    #onSuccess() {
        if (!this.#emailField) {
            return;
        }

        FieldValidation.appendSuccessText(this.#emailField, this.successMessage);
    }

    #onFailure(error: Error) {
        if (!this.#emailField) {
            return;
        }

        FieldValidation.appendSuccessText(this.#emailField, this.successMessage);
        throw error;
    }
}

window.customElements.define('product-back-in-stock-form', ProductBackInStockForm, {
    extends: 'form'
});
