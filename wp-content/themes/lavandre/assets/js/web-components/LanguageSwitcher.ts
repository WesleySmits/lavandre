import LavandreSelect from './LavandreSelect';

export default class LanguageSwitcher extends LavandreSelect {
    constructor() {
        super();

        this.classList.add('language-switcher');

        const json = this.dataset.json;
        if (!json) {
            return;
        }

        this.id = 'domain-dropdown-field';
        this.icon = document.getElementById('cart')?.outerHTML ?? '';
        this.optionValues = JSON.parse(json) || [];
    }

    protected connectedCallback(): void {
        super.connectedCallback();

        if (this.hasAttribute('data-change')) {
            this.addEventListener('change', this.#onChange.bind(this));
        }
    }

    protected disconnectedCallback(): void {
        super.disconnectedCallback();
        this.removeEventListener('change', this.#onChange.bind(this));
    }

    protected update(): void {
        super.update();

        const path = window.location.pathname.substring(0, 4);
        let value;

        switch (path) {
            case '/nl/':
                value = this.#getValue('Nederlands');
                break;
            case '/de/':
                value = this.#getValue('Deutschland');
                break;
            case '/fr/':
                value = this.#getValue('France');
                break;
            default:
                value = this.#getValue('International');
                break;
        }

        this.selectedValue = value ?? 'International';
    }

    #getValue(value: string): string {
        const mapping = this.dataset.mapping ? JSON.parse(this.dataset.mapping) : {};
        return mapping[value] ? value : '';
    }

    #onChange(): void {
        const value = this.selectedValue;

        if (!value) {
            return;
        }

        const mapping = this.dataset.mapping ? JSON.parse(this.dataset.mapping) : {};

        const url = new URL(mapping[value]);

        if (!url) {
            return;
        }

        window.location.href = url.href;
    }
}

customElements.define('language-switcher', LanguageSwitcher);
