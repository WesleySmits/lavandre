import { formatNumberWithLeadingZero } from '../util/dateHelper';

/* eslint-disable no-console */
export default class LavandreSelect extends HTMLElement {
    #searchField: HTMLInputElement;

    #dropdownField: HTMLUListElement;

    #optionValues: StandardObjectInterface = {};

    #selectedValue = '';

    get selectedValue(): string {
        return this.#selectedValue;
    }

    set selectedValue(value: string) {
        this.#selectedValue = value;
        this.#searchField.value = value;
    }

    get optionValues(): StandardObjectInterface {
        return this.#optionValues;
    }

    set optionValues(value: StandardObjectInterface) {
        this.#optionValues = value;
        this.#update();
    }

    constructor() {
        super();

        this.#searchField = document.createElement('INPUT') as HTMLInputElement;
        this.#searchField.classList.add('lavandre-select__input');
        this.#searchField.autocapitalize = 'off';
        this.#searchField.autocomplete = 'off';
        this.appendChild(this.#searchField);

        this.#dropdownField = document.createElement('UL') as HTMLUListElement;
        this.#dropdownField.hidden = true;
        this.#dropdownField.classList.add('lavandre-select__dropdown');
        this.appendChild(this.#dropdownField);
    }

    protected connectedCallback(): void {
        this.#searchField.addEventListener('input', this.#filter.bind(this));
        this.#searchField.addEventListener('focus', this.#showDropdown.bind(this));
        // this.#searchField.addEventListener('blur', this.#hideDropdown.bind(this));
    }

    protected disconnectedCallback(): void {
        this.#searchField.removeEventListener('input', this.#filter.bind(this));
        this.#searchField.removeEventListener('focus', this.#showDropdown.bind(this));
        // this.#searchField.removeEventListener('blur', this.#hideDropdown.bind(this));
    }

    #update(): void {
        for (const [key, value] of Object.entries(this.#optionValues)) {
            console.log(`${key}: ${value}`);
        }

        Object.keys(this.#optionValues).forEach((key) => {
            const option = document.createElement('li');
            option.addEventListener('click', this.#selectOption.bind(this));
            option.classList.add('lavandre-select__dropdown__item');

            const value = formatNumberWithLeadingZero(this.#optionValues[key]).toString();
            option.dataset.value = value;
            option.innerText = value;
            this.#dropdownField.appendChild(option);
        });
    }

    #selectOption(event: Event): void {
        const target = event.target as HTMLElement;
        const value = target.dataset.value;

        if (value === undefined) {
            return;
        }

        this.selectedValue = value;
        this.#hideDropdown();
    }

    #filter(): void {
        const options: HTMLLIElement[] = Array.from(
            this.querySelectorAll('.lavandre-select__dropdown__item')
        );
        const value = this.#searchField.value;

        if (!value) {
            options.forEach((option) => {
                option.hidden = false;
            });

            return;
        }

        console.log(options, value);

        options.forEach((option) => {
            const text = option.innerText;
            if (text.indexOf(value) !== -1) {
                option.hidden = false;
            } else {
                option.hidden = true;
            }
        });
    }

    #showDropdown(): void {
        this.#dropdownField.hidden = false;
    }

    #hideDropdown(): void {
        this.#dropdownField.hidden = true;
    }
}

customElements.define('lavandre-select', LavandreSelect);
