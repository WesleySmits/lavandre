import DataLayer from '../common/DataLayer';
import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { loadRecaptcha, sitekey } from '../util/loadRecaptcha';
import { sendAjaxRequest } from '../util/requests';
import { setValidationMessage } from '../util/validation';
import AjaxForm from './AjaxForm';

class AjaxLoginForm extends AjaxForm {
    #emailField: HTMLInputElement | null = this.querySelector('[type="email"]');

    #fields: HTMLInputElement[] = Array.from(this.querySelectorAll('input'));

    protected connectedCallback(): void {
        super.connectedCallback();

        // @ts-ignore
        if (!window.Cypress) {
            loadRecaptcha(this.#fields);
        }

        for (let index = 0; index < this.#fields.length; index++) {
            const field = this.#fields[index];
            const validator: FieldValidation = new FieldValidation(field);

            setTimeout(() => {
                if (field.matches(':-webkit-autofill')) {
                    field.dispatchEvent(new Event('input'));
                }
            }, 100);

            validator.initialize();
        }

        const submitButton: HTMLButtonElement | null = this.querySelector('[type="submit"]');
        if (submitButton === null) {
            return;
        }

        submitButton.type = 'button';
        submitButton?.addEventListener('click', this.submitHandler.bind(this));
    }

    protected submitHandler(event: Event): void {
        event.preventDefault();

        let valid: boolean = true;

        for (let index = 0; index < this.#fields.length; index++) {
            const field = this.#fields[index];
            field.dispatchEvent(new Event('change'));

            valid = field.validity.valid;
        }

        if (!valid) {
            return;
        }

        const formData: FormData = new FormData(this);
        const username: string = formData.get('username')?.toString() || '';
        const password: string = formData.get('password')?.toString() || '';

        if (!username || !password) {
            return;
        }

        // @ts-ignore
        const { grecaptcha } = window;
        // @ts-ignore

        const data = {
            action: 'ajaxlogin',
            recaptchaToken: '',
            username,
            password
        };

        const submitButton: HTMLButtonElement | undefined =
            (this.querySelector('button[type="button"][name="login"]') as HTMLButtonElement) ||
            undefined;

        // @ts-ignore
        if (!window.Cypress) {
            grecaptcha.ready(() => {
                grecaptcha.execute(sitekey, { action: 'AjaxLogin' }).then((token: string) => {
                    data.recaptchaToken = token;

                    const submitButton: HTMLButtonElement | undefined =
                        (this.querySelector(
                            'button[type="button"][name="login"]'
                        ) as HTMLButtonElement) || undefined;
                    sendAjaxRequest(
                        data,
                        endpoints.ajax,
                        null,
                        this.#onSuccess.bind(this),
                        this.#onFailure.bind(this),
                        event,
                        submitButton
                    );
                });
            });
        } else {
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
    }

    #onSuccess(res: any, event: Event) {
        const response: any = res;
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        const data: GoogleAnalyticsEvent = {
            event: 'login',
            method: 'AjaxLogin'
        };

        DataLayer.push(data);

        const href: string = this.dataset.redirectUrl || '/my-account/';
        window.location.href = href;
    }

    #onFailure(res: string) {
        const response = JSON.parse(res);

        const message: string =
            response.data ||
            'This combination of email and password is not known to us. Please try again or request a new password.';

        setValidationMessage(message, this);
    }
}

window.customElements.define('login-form', AjaxLoginForm, {
    extends: 'form'
});
