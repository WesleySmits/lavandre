import Component from "../common/Component";
import { toTitleCase } from "../util/string";

export default class ChangeVariantColor extends Component {
    private elements: HTMLInputElement[];

    constructor(elements: HTMLInputElement[]) {
        super();
        this.elements = elements;
    }

    public initialize(): void {
        const label: HTMLElement | null = document.querySelector('.product-detail__variation__label--color');

        if (!this.elements.length || !label) {
            return;
        }

        const text = label.textContent;

        this.elements.forEach((radio) => {
            radio.addEventListener('change', () => {
                const value = toTitleCase(radio.value);
                if (!value) {
                    return;
                }

                label.innerText = `${text}: ${value}`;
            });

            if (radio.checked) {
                radio.dispatchEvent(new Event('change'));
            }
        });
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const radioButtons: HTMLInputElement[] = Array.from(selector.querySelectorAll('[name="attribute_pa_color"]'));
        if (!radioButtons.length) {
            return;
        }

        const instance = new ChangeVariantColor(radioButtons);
        instance.initialize();
    }
}
