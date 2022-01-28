/* eslint-disable no-console */
import Component from '../common/Component';

export default class CopyCoupon extends Component {
    #button: HTMLButtonElement;

    constructor(button: HTMLButtonElement) {
        super();
        this.#button = button;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        this.#button.addEventListener('click', (event: Event) => {
            this.onClick(event);
        });
    }

    private onClick(event: Event): boolean {
        event.preventDefault();

        const code = this.#button.dataset.code;
        const text = this.#button.dataset.text;
        const copiedText = this.#button.dataset.copiedText;

        console.log(text, copiedText);

        if (!code || !text || !copiedText) {
            return false;
        }

        navigator.clipboard.writeText(code);

        this.#button.innerText = copiedText;

        setTimeout(() => {
            this.#button.innerText = text;
        }, 3000);

        return false;
    }

    private isValid(): boolean {
        if (!this.#button) {
            return false;
        }

        return true;
    }

    private onSuccess(res: any, event: Event): void {
        const response: any = res;
        console.log('success', response);
    }

    private onFailure(res: string): void {
        const response = JSON.parse(res);
        console.log('failure', response);
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const copyButtons: HTMLButtonElement[] = Array.from(
            selector.querySelectorAll('[data-role="copy-coupon"]')
        );

        if (copyButtons.length === 0) {
            return;
        }

        copyButtons.forEach((button) => {
            const copyCoupon: CopyCoupon = new CopyCoupon(button);
            copyCoupon.initialize();
        });
    }
}
