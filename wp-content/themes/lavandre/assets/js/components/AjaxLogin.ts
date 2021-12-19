import Component from '../common/Component';
import DataLayer from '../common/DataLayer';
import { ToastType } from '../enums/ToastType';
import { loadRecaptcha, sitekey } from '../util/loadRecaptcha';
import { sendAjaxRequest } from '../util/requests';
import FieldValidation from './FieldValidation';
import Toast from './Toast';

export default class AjaxLogin extends Component {
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
        const fields: HTMLInputElement[] = Array.from(this.form.querySelectorAll('input'));

        // Load recaptcha
        // @ts-ignore
        if (!window.Cypress) {
            loadRecaptcha(fields);
        }

        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            const validator: FieldValidation = new FieldValidation(field);

            setTimeout(() => {
                if (field.matches(':-webkit-autofill')) {
                    field.dispatchEvent(new Event('input'));
                }
            }, 100);

            validator.initialize();
        }

        const submitButton: HTMLButtonElement | null = this.form.querySelector('[type="submit"]');
        if (submitButton === null) {
            return;
        }

        submitButton.type = 'button';

        this.form.addEventListener('submit', (event: Event) => {
            this.onSubmit(event, fields);
        });
        submitButton?.addEventListener('click', (event: Event) => {
            submitButton.setAttribute('loading', 'true');
            this.onSubmit(event, fields);
        });
    }

    private onSubmit(event: Event, fields: HTMLInputElement[]): boolean {
        event.preventDefault();

        let valid: boolean = true;

        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            field.dispatchEvent(new Event('change'));

            valid = field.validity.valid;
        }

        if (!valid) {
            return false;
        }

        const formData: FormData = new FormData(this.form);
        const username: string = formData.get('username')?.toString() || '';
        const password: string = formData.get('password')?.toString() || '';

        if (!username || !password) {
            return false;
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
            (this.form.querySelector('button[type="submit"]') as HTMLButtonElement) || undefined;

        // @ts-ignore
        if (!window.Cypress) {
            grecaptcha.ready(() => {
                grecaptcha.execute(sitekey, { action: 'AjaxLogin' }).then((token: string) => {
                    data.recaptchaToken = token;

                    const submitButton: HTMLButtonElement | undefined =
                        (this.form.querySelector('button[type="submit"]') as HTMLButtonElement) ||
                        undefined;
                    sendAjaxRequest(
                        data,
                        this.ajaxEndpoint,
                        null,
                        this.onSuccess.bind(this),
                        this.onFailure.bind(this),
                        event,
                        submitButton
                    );
                });
            });
        } else {
            sendAjaxRequest(
                data,
                this.ajaxEndpoint,
                null,
                this.onSuccess.bind(this),
                this.onFailure.bind(this),
                event,
                submitButton
            );
        }

        return false;
    }

    private isValid(): boolean {
        if (!this.form) {
            return false;
        }

        return true;
    }

    private onSuccess(res: any, event: Event): void {
        const response: any = res;
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        const href: string = this.form.dataset.redirectUrl || '/my-account/';
        if (this.form.dataset.redirect === 'true') {
            window.location.href = href;
            return;
        }

        const ctaButton: ctaButton = {
            text: 'My account',
            href
        };

        const toast: Toast = new Toast(response.data, ToastType.success, ctaButton, 20000);
        toast.initialize();

        const panel: HTMLDialogElement | null = this.form.closest('[data-panel-name]');
        if (panel) {
            panel.dispatchEvent(new CustomEvent('toggle'));
        }

        document.body.classList.add('logged-in');

        const data: GoogleAnalyticsEvent = {
            event: 'login',
            method: 'AjaxLogin'
        };

        DataLayer.push(data);
    }

    private onFailure(res: string): void {
        const response = JSON.parse(res);

        const message: string =
            response.data ||
            'This combination of email and password is not known to us. Please try again or request a new password.';

        const toast: Toast = new Toast(message, ToastType.warning);
        toast.initialize();
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const loginForms: HTMLFormElement[] = Array.from(
            selector.querySelectorAll('#ajax-login-form')
        );

        if (loginForms.length === 0) {
            return;
        }

        loginForms.forEach((form) => {
            const ajaxLogin: AjaxLogin = new AjaxLogin(form);
            ajaxLogin.initialize();
        });
    }
}
