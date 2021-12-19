import Component from '../common/Component';
import { ToastType } from '../enums/ToastType';
import { sendAjaxRequest } from '../util/requests';
import FieldValidation from './FieldValidation';
import Toast from './Toast';

export default class ForgotPassword extends Component {
    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private form: HTMLFormElement;

    private passwordForgetAnchor: HTMLAnchorElement;

    constructor(anchor: HTMLAnchorElement) {
        super();
        this.passwordForgetAnchor = anchor;
        this.form = this.passwordForgetAnchor.closest('form') as HTMLFormElement;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        this.passwordForgetAnchor.addEventListener('click', (event: Event) => {
            event.preventDefault();

            const formData: FormData = new FormData(this.form);
            const username: string = formData.get('username')?.toString() || '';
            // const security: string = formData.get('forgotsecurity')?.toString() || '';

            const emailField: HTMLInputElement = this.form.username;
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
                this.ajaxEndpoint,
                null,
                this.onSuccess.bind(this),
                this.onFailure.bind(this)
            );
        });
    }

    private onSuccess(res: any) {
        const response: any = res;
        const toast: Toast = new Toast(response.data, ToastType.success);
        toast.initialize();
    }

    private onFailure(res: string) {
        const response = JSON.parse(res);
        const toast: Toast = new Toast(response.data, ToastType.warning);
        toast.initialize();
    }

    private isValid(): boolean {
        if (!this.passwordForgetAnchor || !this.form) {
            return false;
        }

        return true;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const passwordForgetLinks: HTMLAnchorElement[] = Array.from(
            selector.querySelectorAll('[data-role="password-forget"]')
        );
        for (let index = 0; index < passwordForgetLinks.length; index++) {
            const link = passwordForgetLinks[index];
            const forgotPassword: ForgotPassword = new ForgotPassword(link);
            forgotPassword.initialize();
        }
    }
}
