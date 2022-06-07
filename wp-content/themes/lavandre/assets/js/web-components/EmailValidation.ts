import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import { removeExistingValidationMessages, setValidationMessage } from '../util/validation';

export default class EmailValidation extends HTMLInputElement {
    #form = this.closest('form') as HTMLFormElement;

    #blurTimeout: number | null = null;

    protected connectedCallback(): void {
        this.addEventListener('blur', this.#blurHandler.bind(this));
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('blur', this.#blurHandler.bind(this));
    }

    #blurHandler(): void {
        if (this.#blurTimeout) {
            window.clearTimeout(this.#blurTimeout);
        }

        this.#blurTimeout = window.setTimeout(() => {
            this.#handleBlurEvent();
        }, 500);
    }

    #handleBlurEvent(): void {
        const formData: FormData = new FormData(this.#form);
        const { value } = this;
        const security = formData.get('woocommerce-email-check-nonce')?.toString() || '';

        if (!value) {
            return;
        }

        const data = {
            action: 'ajaxemailcheck',
            email: value,
            security
        };

        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this)
        );
    }

    #onSuccess(): void {
        removeExistingValidationMessages(this);
    }

    #onFailure(error: Error): void {
        setValidationMessage(error.message, this);
    }
}

window.customElements.define('email-validation', EmailValidation, { extends: 'input' });
