import Component from "../common/Component";

export default class PasswordReveal extends Component {
    private element: HTMLElement;

    private passwordInput: HTMLInputElement;

    constructor(element: HTMLElement) {
        super();
        this.element = element;
        this.passwordInput = this.element.querySelector('input[type="password"]') as HTMLInputElement;
    }

    public initialize() {
        const button = this.createRevealButton();
        this.element.appendChild(button);

        button.addEventListener('click', () => {
            button.classList.toggle('opened');

            if (this.passwordInput.type === 'password') {
                this.passwordInput.type = 'text';
                return;
            }

            this.passwordInput.type = 'password';
        });
    }

    private createRevealButton(): HTMLButtonElement {
        const button: HTMLButtonElement = document.createElement('BUTTON') as HTMLButtonElement;
        button.type = 'button';
        button.className = 'password-reveal-toggle';
        button.tabIndex = -1;
        return button;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const passwordRows: HTMLElement[] = Array.from(selector.querySelectorAll('.password-row'));
        for (let index = 0; index < passwordRows.length; index++) {
            const passwordRow = passwordRows[index];
            if (passwordRow === null) {
                return;
            }
            const passwordReveal = new PasswordReveal(passwordRow);
            passwordReveal.initialize();
        }
    }
}
