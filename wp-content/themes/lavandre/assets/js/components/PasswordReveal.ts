export default class PasswordReveal {
    private element: HTMLElement;

    private passwordInput: HTMLInputElement;

    constructor(element: HTMLElement) {
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
}
