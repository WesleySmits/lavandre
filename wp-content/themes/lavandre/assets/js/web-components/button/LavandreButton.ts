import './style.pcss';

export default class LavandreButton extends HTMLButtonElement {
    constructor() {
        super();

        this.setAttribute('is', 'lavandre-button');
    }

    get label(): string {
        return this.innerText;
    }

    set label(value: string) {
        this.innerText = value;
    }

    get href(): string {
        return this.getAttribute('href') || '';
    }

    set href(url: string) {
        this.setAttribute('href', url);
    }

    get size(): string {
        return this.getAttribute('size') || '';
    }

    set size(url: string) {
        this.setAttribute('size', url);
    }

    get primary(): boolean {
        return this.hasAttribute('primary');
    }

    set primary(bool: boolean) {
        if (!bool) {
            return;
        }

        this.setAttribute('primary', bool.toString());
    }

    get outline(): boolean {
        return this.hasAttribute('primary');
    }

    set outline(bool: boolean) {
        if (!bool) {
            return;
        }

        this.setAttribute('outline', bool.toString());
    }

    get fullWidth(): boolean {
        return this.hasAttribute('primary');
    }

    set fullWidth(bool: boolean) {
        if (!bool) {
            return;
        }

        this.setAttribute('full-width', bool.toString());
    }

    get loading(): boolean {
        return this.hasAttribute('primary');
    }

    set loading(bool: boolean) {
        if (!bool) {
            return;
        }

        this.setAttribute('loading', bool.toString());
    }

    #isDisabled: boolean = this.hasAttribute('aria-disabled');

    get isDisabled(): boolean {
        return this.#isDisabled;
    }

    set isDisabled(value: boolean) {
        this.#isDisabled = value;
        this.toggleAttribute('aria-disabled', value);
    }

    private clickHandler = (event: Event) => {
        if (this.href === null) {
            return;
        }

        event.preventDefault();

        window.location.href = this.href;
    };

    protected connectedCallback(): void {
        if (this.href) {
            this.addEventListener('click', this.clickHandler);
        }
    }

    protected disconnectedCallback(): void {
        if (this.href) {
            this.removeEventListener('click', this.clickHandler);
        }
    }
}
