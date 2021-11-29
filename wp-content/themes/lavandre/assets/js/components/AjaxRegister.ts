import Component from '../common/Component';
import DataLayer from '../common/DataLayer';
import { ToastType } from '../enums/ToastType';
import { loadRecaptcha, sitekey } from '../util/loadRecaptcha';
import { sendAjaxRequest } from '../util/requests';
import ConfirmValidation from './ConfirmValidation';
import EmailValidation from './EmailValidation';
import { FieldValidation } from './FieldValidation';
import Toast from './Toast';

export default class AjaxRegister extends Component {
    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        super();
        this.form = form;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {

        const emailField: HTMLInputElement | null = this.form.querySelector('input[type="email"]');
        if (emailField !== null) {
            const emailValidation: EmailValidation = new EmailValidation(emailField);
            emailValidation.initialize();
        }

        const passwordField: HTMLInputElement | null = this.form.querySelector('#register-password');
        const confirmPasswordField: HTMLInputElement | null = this.form.querySelector('#confirm-password');
        if (passwordField && confirmPasswordField) {
            const confirmValidation: ConfirmValidation = new ConfirmValidation(passwordField, confirmPasswordField);
            confirmValidation.initialize();
        }

        const fields: HTMLInputElement[] = Array.from(this.form.querySelectorAll('input'));

        // Load recaptcha
        // @ts-ignore
        if (!window.Cypress) {
            loadRecaptcha(fields);
        }

        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            const validator: FieldValidation = new FieldValidation(field);
            validator.initialize();
        }

        this.form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            let valid: boolean = true;

            for (let index = 0; index < fields.length; index++) {
                const field = fields[index];
                field.dispatchEvent(new Event('change'));

                valid = field.validity.valid;
            }

            if (!valid) {
                return;
            }

            const formData: FormData = new FormData(this.form);
            const email: string = formData.get('email')?.toString() || '';
            const firstName: string = formData.get('first_name')?.toString() || '';
            const lastName: string = formData.get('last_name')?.toString() || '';
            const password: string = formData.get('password')?.toString() || '';

            if (!email || !password) {
                return;
            }

            // @ts-ignore
            const grecaptcha = window.grecaptcha;
            const data = {
                'action': 'ajaxregister',
                'recaptchaToken': '',
                'email': email,
                'password': password,
                'first_name': firstName,
                'last_name': lastName
            };

            const submitButton: HTMLButtonElement | undefined = this.form.querySelector('button[type="submit"]') as HTMLButtonElement || undefined;

            //@ts-ignore
            if (!window.Cypress) {
                grecaptcha.ready(() => {
                    grecaptcha.execute(sitekey, { action: 'AjaxRegister' }).then((token: string) => {
                        data.recaptchaToken = token;
                        sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
                    });
                });
            } else {
                sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
            }

            return false;
        });
    }

    private isValid(): boolean {
        if (
            !this.form
        ) {
            return false;
        }

        return true;
    }

    private onSuccess(res: any, event: Event): void {
        const response: any = res;
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        const ctaButton: ctaButton = {
            text: 'My account',
            href: '/my-account/'
        }
        const toast: Toast = new Toast(
            response.data,
            ToastType.success,
            ctaButton,
            20000
        );

        toast.initialize();

        const panel: HTMLDialogElement | null = this.form.closest('[data-panel-name]');
        if (panel) {
            panel.dispatchEvent(new CustomEvent('toggle'));
        }

        document.body.classList.add('logged-in');

        const data: GoogleAnalyticsEvent = {
            event: 'sign-up',
            method: 'AjaxRegister'
        };

        DataLayer.push(data);
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const registerForm: HTMLFormElement | null = selector.querySelector('#ajax-register-form');

        if (registerForm === null) {
            return;
        }

        const ajaxRegister: AjaxRegister = new AjaxRegister(registerForm);
        ajaxRegister.initialize();
    }
}
