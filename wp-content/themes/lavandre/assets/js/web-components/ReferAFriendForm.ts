/* eslint-disable no-console */
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';

export default class ReferAFriendForm extends HTMLFormElement {
    protected connectedCallback(): void {
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
    }

    #onFailure(response: Response): void {
        console.log('success', response);
    }
}

window.customElements.define('refer-a-friend-form', ReferAFriendForm, { extends: 'form' });
