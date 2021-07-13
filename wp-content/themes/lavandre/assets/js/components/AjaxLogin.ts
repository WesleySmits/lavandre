import Component from '../common/Component';
import { ToastType } from '../enums/ToastType';
import { sendAjaxRequest } from '../util/requests';
import { FieldValidation } from './FieldValidation';
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
            const username: string = formData.get('username')?.toString() || '';
            const password: string = formData.get('password')?.toString() || '';

            if (!username || !password) {
                return;
            }

            const data = {
                action: 'ajaxlogin',
				'username': username,
				'password': password,
            };

            const submitButton: HTMLButtonElement | undefined = this.form.querySelector('button[type="submit"]') as HTMLButtonElement || undefined;
            sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);

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
            text: 'Mijn account',
            href: '/mijn-account/'
        }
        const toast: Toast = new Toast(
            'Welkom terug!',
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
    }

    private onFailure(): void {
        // #TODO: Translate this string
        const toast: Toast = new Toast(
            'Deze combinatie van e-mail en wachtwoord is niet bekend bij ons. Probeer het nogmaals of vraag een nieuw wachtwoord aan.',
            ToastType.warning
        );
        toast.initialize();
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const loginForm: HTMLFormElement | null = selector.querySelector('#ajax-login-form');

        if (loginForm === null) {
            return;
        }

        const ajaxLogin: AjaxLogin = new AjaxLogin(loginForm);
        ajaxLogin.initialize();
    }
}
