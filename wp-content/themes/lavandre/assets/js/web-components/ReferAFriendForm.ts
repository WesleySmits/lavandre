/* eslint-disable no-console */
import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import LavandreToggle from './LavandreToggle';

export default class ReferAFriendForm extends HTMLFormElement {
    #emailField: HTMLInputElement | null = null;

    protected connectedCallback(): void {
        this.#emailField = this.querySelector('[name="email"]');

        const validator: FieldValidation = new FieldValidation(this.#emailField!);
        validator.initialize();
        this.addEventListener('submit', this.#submitHandler.bind(this), false);
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('submit', this.#submitHandler.bind(this), false);
    }

    #submitHandler(event: Event): void {
        event.preventDefault();

        const formData = new FormData(this);
        const email = formData.get('email')?.toString() || '';

        if (!email) {
            return;
        }

        const data = {
            action: 'ajaxreferafriendemail',
            email: email
        };

        const submitButton = this.querySelector('[type="submit"]') as HTMLButtonElement;

        FieldValidation.removeErrorText(this.#emailField!);
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

    #onSuccess(response: Response): void {
        console.log('success', response);
        const toggle = this.closest('lavandre-toggle') as LavandreToggle;
        if (!toggle) {
            return;
        }

        toggle.dispatchEvent(new CustomEvent('toggle'));
    }

    #onFailure(error: Error): void {
        console.log(error);
        FieldValidation.appendErrorText(this.#emailField!, error.message);
        throw error;
    }
}

window.customElements.define('refer-a-friend-form', ReferAFriendForm, { extends: 'form' });
