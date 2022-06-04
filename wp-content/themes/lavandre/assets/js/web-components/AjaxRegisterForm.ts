import DataLayer from '../common/DataLayer';
import ConfirmValidation from '../components/ConfirmValidation';
import EmailValidation from '../components/EmailValidation';
import FieldValidation from '../components/FieldValidation';
import endpoints from '../util/endpoints';
import { loadRecaptcha, sitekey } from '../util/loadRecaptcha';
import { sendAjaxRequest } from '../util/requests';
import AjaxForm from './AjaxForm';

class AjaxRegisterForm extends AjaxForm {
    #emailField: HTMLInputElement | null = this.querySelector('[type="email"]');

    #fields: HTMLInputElement[] = Array.from(this.querySelectorAll('input'));

    protected connectedCallback(): void {
        super.connectedCallback();

        if (this.#emailField !== null) {
            const emailValidation: EmailValidation = new EmailValidation(this.#emailField);
            emailValidation.initialize();
        }

        const passwordField: HTMLInputElement | null = this.querySelector('#register-password');
        const confirmPasswordField: HTMLInputElement | null =
            this.querySelector('#confirm-password');
        if (passwordField && confirmPasswordField) {
            const confirmValidation: ConfirmValidation = new ConfirmValidation(
                passwordField,
                confirmPasswordField
            );
            confirmValidation.initialize();
        }

        // Load recaptcha
        // @ts-ignore
        if (!window.Cypress) {
            loadRecaptcha(this.#fields);
        }

        for (let index = 0; index < this.#fields.length; index++) {
            const field = this.#fields[index];
            const validator: FieldValidation = new FieldValidation(field);
            validator.initialize();
        }
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
        const email: string = formData.get('email')?.toString() || '';
        const firstName: string = formData.get('first_name')?.toString() || '';
        const lastName: string = formData.get('last_name')?.toString() || '';
        const password: string = formData.get('password')?.toString() || '';

        if (!email || !password) {
            return;
        }

        // @ts-ignore
        const { grecaptcha } = window;
        const data = {
            action: 'ajaxregister',
            recaptchaToken: '',
            email,
            password,
            first_name: firstName,
            last_name: lastName
        };

        const submitButton: HTMLButtonElement | undefined =
            (this.querySelector('button[type="submit"]') as HTMLButtonElement) || undefined;

        // @ts-ignore
        if (!window.Cypress) {
            grecaptcha.ready(() => {
                grecaptcha.execute(sitekey, { action: 'AjaxRegister' }).then((token: string) => {
                    data.recaptchaToken = token;
                    sendAjaxRequest(
                        data,
                        endpoints.ajax,
                        null,
                        this.#onSuccess.bind(this),
                        undefined,
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
                undefined,
                event,
                submitButton
            );
        }
    }

    #onSuccess(res: any): void {
        const response: any = res;
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        const data: GoogleAnalyticsEvent = {
            event: 'sign-up',
            method: 'AjaxRegister'
        };

        DataLayer.push(data);

        const href: string = this.dataset.redirectUrl || '/my-account/';

        if (window.location.href === href) {
            window.location.reload();
        }

        window.location.href = href;
    }
}

window.customElements.define('register-form', AjaxRegisterForm, {
    extends: 'form'
});
