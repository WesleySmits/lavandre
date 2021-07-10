import '../../css/components/_toast.pcss';
import { ToastType } from "../enums/ToastType";

export default class Toast {
    private message: string;

    private type: ToastType;

    private ctaButton?: ctaButton;

    private timeout: number;

    private element: HTMLDivElement | null = null;

    constructor(message: string, type: ToastType, cta?: ctaButton, timeout: number = 5000) {
        this.message = message;
        this.type = type;
        this.timeout = timeout;

        if (cta) {
            this.ctaButton = cta;
        }
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        const element = this.create();
        document.body.appendChild(element);
        element.classList.add('toast--visible');

        setTimeout(() => {
            this.remove();
        }, this.timeout);
    }

    private remove(): void {
        if (this.element === null) {
            return;
        }

        this.element.addEventListener('transitionend', () => {
            document.body.removeChild(this.element!);
        });

        this.element.classList.remove('toast--visible');
    }

    private create(): HTMLDivElement {
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add('toast');

        const container: HTMLDivElement = document.createElement('DIV') as HTMLDivElement;
        container.classList.add('toast__container');

        const icon: HTMLImageElement = document.createElement('IMG') as HTMLImageElement;
        icon.src = `/wp-content/themes/lavandre/public/images/icons/${this.type}.svg`;
        icon.alt = `${this.type} icon`;
        icon.classList.add('toast__icon');
        icon.width = 24;
        icon.height = 24;

        const paragraph: HTMLParagraphElement = document.createElement('P') as HTMLParagraphElement;
        const message: HTMLElement = document.createElement('STRONG');
        message.classList.add('toast__message');
        message.innerText = this.message;
        paragraph.appendChild(message);

        const closeButton: HTMLButtonElement = document.createElement('BUTTON') as HTMLButtonElement;
        closeButton.classList.add('eicon-close', 'toast__close');

        closeButton.addEventListener('click', () => { this.remove(); });

        container.appendChild(icon);
        container.appendChild(paragraph);
        container.appendChild(closeButton);

        if (this.ctaButton) {
            const button: HTMLAnchorElement = document.createElement('A') as HTMLAnchorElement;
            button.href = this.ctaButton.href;
            button.classList.add('cta-button', 'inline');
            button.innerText = this.ctaButton.text;
            container.appendChild(button);
        }

        this.element.appendChild(container);

        return this.element;
    }

    private isValid(): boolean {
        if (
            !this.message
            || !this.type
        ) {
            return false;
        }

        return true;
    }
}
