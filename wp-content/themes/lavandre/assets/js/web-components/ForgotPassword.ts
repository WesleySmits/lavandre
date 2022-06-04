import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import { setValidationMessage } from '../util/validation';

export default class ForgotPassword extends HTMLButtonElement {
    #form: HTMLFormElement = this.closest('form') as HTMLFormElement;

    protected connectedCallback(): void {
        this.addEventListener('click', this.#submitHandler.bind(this));
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('click', this.#submitHandler.bind(this));
    }

    #submitHandler(event: Event): void {
        event.preventDefault();

        const formData: FormData = new FormData(this.#form);
        const username: string = formData.get('username')?.toString() || '';

        const emailField: HTMLInputElement = this.#form.username;
        const fieldValidation: FieldValidation = new FieldValidation(emailField);
        fieldValidation.initialize();

        emailField.dispatchEvent(new Event('validate'));

        if (!username) {
            throw new Error('Username not set');
        }

        const data = {
            action: 'ajaxforgotpassword',
            user_login: username
        };

        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this)
        );
    }

    #onSuccess(res: any) {
        const response: any = res;
        setValidationMessage(response.data, this.#form);
    }

    #onFailure(res: string) {
        const response = JSON.parse(res);
        setValidationMessage(response.data, this.#form);
    }
}

window.customElements.define('forgot-password', ForgotPassword, {
    extends: 'button'
});
