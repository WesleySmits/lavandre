import { formatDate, isDateValid } from '../util/dateHelper';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import SignupBlock from './SignupBlock';

class BirthdayForm extends HTMLFormElement {
    #submitButton = this.querySelector('[type="submit"]') as HTMLButtonElement;

    #dateField = this.querySelector('[type="date"]') as HTMLInputElement;

    protected connectedCallback(): void {
        this.addEventListener('submit', this.#onSubmit.bind(this));
        this.#submitButton.addEventListener('click', this.#onSubmit.bind(this));
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('submit', this.#onSubmit.bind(this));
        this.#submitButton.removeEventListener('click', this.#onSubmit.bind(this));
    }

    #onSubmit(event: Event): boolean {
        event.preventDefault();

        const date = new Date(this.#dateField.value);

        if (isDateValid(date) === false) {
            return false;
        }

        const data: requestData = {
            action: 'ajaxdateofbirth',
            date: formatDate(date)
        };

        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this),
            event,
            this.#submitButton
        );

        return false;
    }

    #onSuccess(): void {
        const block: SignupBlock | null = this.closest('[is="signup-block"]');
        if (!block) {
            return;
        }

        block.completed = true;
    }

    #onFailure(): void {
        // stuff
    }
}

customElements.define('birthday-form', BirthdayForm, { extends: 'form' });
