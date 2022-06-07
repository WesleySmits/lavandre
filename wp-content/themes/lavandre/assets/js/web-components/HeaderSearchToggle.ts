export default class HeaderSearchToggle extends HTMLButtonElement {
    #container: HTMLElement | null = this.closest('.header__search');

    protected connectedCallback(): void {
        this.addEventListener('click', this.#clickHandler.bind(this));
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('click', this.#clickHandler.bind(this));
    }

    #clickHandler(event: Event): void {
        event.stopImmediatePropagation();

        if (this.#container === null) {
            return;
        }

        this.#container.classList.add('active');

        const searchInputElement: HTMLInputElement | null =
            this.#container.querySelector('.product-search-field') ?? null;

        if (searchInputElement !== null) {
            searchInputElement.focus();
        }

        document.body.removeEventListener('click', this.#documentClickHandler);
        document.body.addEventListener('click', this.#documentClickHandler);
    }

    #documentClickHandler = (event: Event) => {
        const eventTarget: HTMLElement = event.target as HTMLElement;
        if (this.#container === null || eventTarget === null) {
            return;
        }

        const withinHeader: boolean = eventTarget.closest('.header__search') !== null;
        if (withinHeader) {
            return;
        }

        this.#container.classList.remove('active');
        document.body.removeEventListener('click', this.#documentClickHandler);
    };
}

window.customElements.define('header-search-toggle', HeaderSearchToggle, { extends: 'button' });
