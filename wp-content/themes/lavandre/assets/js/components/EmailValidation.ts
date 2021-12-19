import Component from '../common/Component';
import { sendAjaxRequest } from '../util/requests';

export default class EmailValidation extends Component {
    private form: HTMLFormElement;

    private emailInput: HTMLInputElement;

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    constructor(element: HTMLInputElement) {
        super();
        this.emailInput = element;
        this.form = this.emailInput.closest('form') as HTMLFormElement;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners(): void {
        let blurTimeout: number | null = null;
        this.emailInput.addEventListener('blur', () => {
            if (blurTimeout) {
                window.clearTimeout(blurTimeout);
            }

            blurTimeout = window.setTimeout(() => {
                this.handleBlurEvent();
            }, 500);
        });
    }

    private handleBlurEvent() {
        const formData: FormData = new FormData(this.form);
        const { value } = this.emailInput;
        const security = formData.get('woocommerce-email-check-nonce')?.toString() || '';

        if (!value) {
            return;
        }

        const data = {
            action: 'ajaxemailcheck',
            email: value,
            security
        };

        sendAjaxRequest(
            data,
            this.ajaxEndpoint,
            null,
            this.onSuccess.bind(this),
            this.onFailure.bind(this)
        );
    }

    private onSuccess(): void {
        this.removeExistingMessages();
    }

    private onFailure(error: Error): void {
        this.setValidationMessage(error.message);
    }

    private setValidationMessage(message: string) {
        const formRow: HTMLElement | null = this.emailInput.parentElement;
        const formRowParent: HTMLElement | null | undefined = formRow?.parentElement;
        if (formRow === null || !formRowParent) {
            return;
        }

        this.removeExistingMessages(formRowParent);

        const validationElement: HTMLElement = document.createElement('div');
        validationElement.className = 'alert alert--warning inline-form-error';
        validationElement.textContent = message;

        formRowParent.insertBefore(validationElement, formRow);
    }

    private removeExistingMessages(selector?: HTMLElement) {
        const grandparent: HTMLElement | null | undefined =
            selector || this.emailInput.parentElement?.parentElement;
        if (!grandparent) {
            return;
        }

        const existingValidations: HTMLElement[] = Array.from(
            grandparent.querySelectorAll('.alert--warning')
        );
        existingValidations.forEach((v) => {
            v.remove();
        });
    }

    private isValid(): boolean {
        if (!this.emailInput || !this.form) {
            return false;
        }

        return true;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const registerEmailInput: HTMLInputElement | null = selector.querySelector('#reg_email');
        if (registerEmailInput === null) {
            return;
        }
        const emailValidation: EmailValidation = new EmailValidation(registerEmailInput);
        emailValidation.initialize();
    }
}
