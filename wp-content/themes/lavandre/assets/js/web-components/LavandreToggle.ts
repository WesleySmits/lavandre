export default class LavandreToggle extends HTMLElement {
    #elements: HTMLElement[] = [];

    #toggles: HTMLButtonElement[] = [];

    #clickHandler(): void {
        this.#elements.forEach((element) => {
            element.toggleAttribute('hidden', !element.hidden);
        });
    }

    protected connectedCallback(): void {
        this.#elements = Array.from(this.querySelectorAll('[data-name]'));
        this.#toggles = Array.from(this.querySelectorAll('[data-toggle]'));

        this.#toggles.forEach((toggle) => {
            toggle.addEventListener('click', this.#clickHandler.bind(this), false);
        });

        this.addEventListener('toggle', this.#clickHandler.bind(this), false);
    }
}

customElements.define('lavandre-toggle', LavandreToggle);
