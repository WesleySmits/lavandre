export default class PasswordReveal extends HTMLParagraphElement {
    #passwordInput = this.querySelector('input[type="password"]') as HTMLInputElement;

    #button: HTMLButtonElement | null = null;

    protected connectedCallback(): void {
        this.#button = PasswordReveal.#createRevealButton();
        this.appendChild(this.#button);

        this.#button.addEventListener('click', this.#clickHandler.bind(this));
    }

    protected disconnectedCallback(): void {
        this.#button?.removeEventListener('click', this.#clickHandler.bind(this));
    }

    #clickHandler(): void {
        this.#button?.classList.toggle('opened');

        if (this.#passwordInput.type === 'password') {
            this.#passwordInput.type = 'text';
            return;
        }

        this.#passwordInput.type = 'password';
    }

    static #createRevealButton(): HTMLButtonElement {
        const button: HTMLButtonElement = document.createElement('BUTTON') as HTMLButtonElement;
        button.type = 'button';
        button.className = 'password-reveal-toggle';
        button.tabIndex = -1;
        return button;
    }
}

window.customElements.define('password-reveal', PasswordReveal, { extends: 'p' });
