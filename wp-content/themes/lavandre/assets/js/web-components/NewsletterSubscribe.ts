import DataLayer from '../common/DataLayer';
import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import AjaxForm from './AjaxForm';

export default class NewsletterSubscribe extends AjaxForm {
    #dataLayer: typeof DataLayer = DataLayer;

    #emailField: HTMLInputElement | null = this.querySelector('[name="email"]');

    protected connectedCallback(): void {
        super.connectedCallback();

        const validator: FieldValidation = new FieldValidation(this.#emailField!);
        validator.initialize();
    }

    protected submitHandler(event: Event): void {
        event.preventDefault();

        const formData: FormData = new FormData(this);
        const firstName: string = formData.get('first-name')?.toString() || '';
        const companyName: string = formData.get('company-name')?.toString() || '';
        const email: string = formData.get('email')?.toString() || '';

        if (!email) {
            return;
        }

        const data = {
            action: 'mailchimpsubscribe',
            email,
            firstName,
            companyName
        };

        FieldValidation.removeErrorText(this.#emailField!);
        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this)
        );
    }

    #onSuccess(response: ajaxResponse) {
        FieldValidation.appendSuccessText(this.#emailField!, response.data.toString());
        this.#emailField!.value = '';

        const data: GoogleAnalyticsEvent = {
            event: 'GAEvent',
            eventCategory: 'newsletter',
            eventAction: 'subscribe',
            eventLabel: this.id || 'generic'
        };

        this.#dataLayer.push(data);
    }

    #onFailure(error: Error) {
        FieldValidation.appendErrorText(this.#emailField!, error.message);
        throw error;
    }
}

window.customElements.define('newsletter-subscribe', NewsletterSubscribe, { extends: 'form' });
