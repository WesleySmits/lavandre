import Component from '../common/Component';
import { sendAjaxRequest } from '../util/requests';
import { removeExistingValidationMessages, setValidationMessage } from '../util/validation';

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
        removeExistingValidationMessages(this.emailInput);
    }

    private onFailure(error: Error): void {
        setValidationMessage(error.message, this.emailInput);
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
