import { ToastType } from "../enums/ToastType";
import { sendAjaxRequest } from "../util/requests";
import { FieldValidation } from "./FieldValidation";
import Toast from "./Toast";

export default class ForgotPassword {
    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private form: HTMLFormElement;
    private passwordForgetAnchor: HTMLAnchorElement;

    constructor(anchor: HTMLAnchorElement) {
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
                return;
            }

            const data = {
                action: 'ajaxforgotpassword',
				'user_login': username
            };

            sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
        });
    }

    private onSuccess() {
        const toast: Toast = new Toast(
            'Wij hebben u een e-mail gestuurd met een link waarmee u uw wachtwoord kunt aanpassen.',
            ToastType.success
        );
        toast.initialize();
    }

    private onFailure() {
        const toast: Toast = new Toast(
            'Wij hebben geen account kunnen vinden met dit e-mailadres.',
            ToastType.warning
        );
        toast.initialize();
    }

    private isValid(): boolean {
        if (
            !this.passwordForgetAnchor
            || !this.form
        ) {
            return false;
        }

        return true;
    }
}
