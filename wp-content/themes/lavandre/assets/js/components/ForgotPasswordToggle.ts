import Component from "../common/Component";
import { ToastType } from "../enums/ToastType";
import { sendAjaxRequest } from "../util/requests";
import { FieldValidation } from "./FieldValidation";
import Toast from "./Toast";

export default class ForgotPasswordToggle extends Component {
    private passwordForgetWrapper: HTMLElement;
    private loginWrapper: HTMLElement;
    private toggle: HTMLAnchorElement;

    constructor(toggle: HTMLAnchorElement) {
        super();
        this.toggle = toggle;

        this.passwordForgetWrapper = document.getElementById('password-forget-form') as HTMLElement;
        this.loginWrapper = document.getElementById('login-register-form') as HTMLElement;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        this.toggle.addEventListener('click', (event: Event) => {
            event.preventDefault();

            this.loginWrapper.toggleAttribute('hidden');
            this.passwordForgetWrapper.toggleAttribute('hidden');
        });
    }

    private isValid(): boolean {
        if (
            !this.passwordForgetWrapper
            || !this.loginWrapper
        ) {
            return false;
        }

        return true;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const passwordForgetLinks: HTMLAnchorElement[] = Array.from(selector.querySelectorAll('[data-role="password-forget-toggle"]'));
        for (let index = 0; index < passwordForgetLinks.length; index++) {
            const link = passwordForgetLinks[index];
            const forgotPassword: ForgotPasswordToggle = new ForgotPasswordToggle(link);
            forgotPassword.initialize();
        }
    }
}
