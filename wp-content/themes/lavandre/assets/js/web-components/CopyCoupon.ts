import LavandreButton from './button/LavandreButton';

export default class CopyCoupon extends LavandreButton {
    protected connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('click', this.#onClick.bind(this));
    }

    protected disconnectedCallback(): void {
        super.disconnectedCallback();
        this.removeEventListener('click', this.#onClick.bind(this));
    }

    #onClick(event: Event): boolean {
        event.preventDefault();

        const code = this.dataset.code;
        const text = this.dataset.text;
        const copiedText = this.dataset.copiedText;

        if (!code || !text || !copiedText) {
            return false;
        }

        navigator.clipboard.writeText(code);

        this.innerText = copiedText;

        setTimeout(() => {
            this.innerText = text;
        }, 3000);

        return false;
    }
}

window.customElements.define('copy-coupon', CopyCoupon, { extends: 'button' });
