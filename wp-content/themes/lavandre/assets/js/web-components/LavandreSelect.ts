import { formatNumberWithLeadingZero } from '../util/dateHelper';

export default class LavandreSelect extends HTMLElement {
    #searchField: HTMLInputElement;

    #searchFieldLabel: HTMLLabelElement;

    #dropdownField: HTMLUListElement;

    #optionValues: StandardObjectInterface = {};

    #selectedValue = '';

    #name = this.getAttribute('name') || '';

    #placeholder = '';

    get placeholder(): string {
        return this.#placeholder;
    }

    set placeholder(value: string) {
        this.#placeholder = value;
        this.#searchField.placeholder = value;
        this.#searchFieldLabel.innerText = value;
    }

    #id = '';

    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
        this.#searchField.id = value;
        this.#searchFieldLabel.htmlFor = value;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get selectedValue(): string {
        return this.#selectedValue;
    }

    set selectedValue(value: string) {
        this.#selectedValue = value;
        this.#searchField.value = value.replace(/^0+/, '');
    }

    get optionValues(): StandardObjectInterface {
        return this.#optionValues;
    }

    set optionValues(value: StandardObjectInterface) {
        this.#optionValues = value;
        this.#update();
    }

    #outsideClickListener = (event: Event): void => {
        const target: HTMLElement | null = event.target as HTMLElement;

        if (!target.closest) {
            this.#hideDropdown();
            return;
        }

        const closest = target.closest('lavandre-select');
        if (!target || closest === null || closest !== this) {
            this.#hideDropdown();
        }
    };

    constructor(id = '', placeholder = '') {
        super();

        this.#searchField = document.createElement('INPUT') as HTMLInputElement;
        this.#searchField.classList.add('lavandre-select__input');
        this.#searchField.name = this.name;
        this.#searchField.autocapitalize = 'off';
        this.#searchField.autocomplete = 'off';
        this.#searchField.placeholder = placeholder;
        this.#searchField.id = id;
        this.appendChild(this.#searchField);

        this.#searchFieldLabel = document.createElement('LABEL') as HTMLLabelElement;
        this.#searchFieldLabel.classList.add('lavandre-select__label');
        this.#searchFieldLabel.innerText = placeholder;
        this.#searchFieldLabel.htmlFor = id;
        this.appendChild(this.#searchFieldLabel);

        this.#dropdownField = document.createElement('UL') as HTMLUListElement;
        this.#dropdownField.hidden = true;
        this.#dropdownField.classList.add('lavandre-select__dropdown');

        this.appendChild(this.#dropdownField);
    }

    protected connectedCallback(): void {
        this.#searchField.addEventListener('input', this.#filter.bind(this));
        this.#searchField.addEventListener('focus', this.#showDropdown.bind(this));
    }

    protected disconnectedCallback(): void {
        this.#searchField.removeEventListener('input', this.#filter.bind(this));
        this.#searchField.removeEventListener('focus', this.#showDropdown.bind(this));
    }

    #update(): void {
        Object.keys(this.#optionValues).forEach((key) => {
            const option = document.createElement('li');
            option.addEventListener('click', this.#selectOption.bind(this));
            option.classList.add('lavandre-select__dropdown__item');

            const value = formatNumberWithLeadingZero(this.#optionValues[key]).toString();
            option.dataset.value = value;
            option.innerText = key.replace(/^0+/, '');
            this.#dropdownField.appendChild(option);
        });

        const firstOption = this.querySelector('.lavandre-select__dropdown__item');
        if (!firstOption) {
            return;
        }

        firstOption.dispatchEvent(new Event('click'));
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

        const value = this.#searchField.value.toLowerCase();

        if (!value) {
            options.forEach((option) => {
                option.hidden = false;
            });

            return;
        }

        options.forEach((option) => {
            const text = option.innerText.toLowerCase();
            if (text.indexOf(value) !== -1) {
                option.hidden = false;
            } else {
                option.hidden = true;
            }
        });
    }

    #showDropdown(): void {
        this.#dropdownField.hidden = false;
        document.addEventListener('click', this.#outsideClickListener);
        this.classList.add('active');
    }

    #hideDropdown(): void {
        this.#dropdownField.hidden = true;
        document.removeEventListener('click', this.#outsideClickListener);
        this.classList.remove('active');
    }
}

customElements.define('lavandre-select', LavandreSelect);
