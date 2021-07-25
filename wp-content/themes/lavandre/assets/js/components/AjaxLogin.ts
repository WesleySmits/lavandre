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
            text: 'My account',
            href: '/my-account/'
        }

        console.log(response);

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
    }

    private onFailure(res: string): void {
        const response = JSON.parse(res);
        console.log(response.data);

        const message: string = response.data || 'This combination of email and password is not known to us. Please try again or request a new password.';

        const toast: Toast = new Toast(
            message,
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
