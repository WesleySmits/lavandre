export default class UspSlider extends HTMLUListElement {
    protected connectedCallback(): void {
        setTimeout(() => {
            const items: HTMLElement[] = Array.from(this.querySelectorAll('.usp-slider__item'));
            let totalWidth = 0;

            items.forEach((item) => {
                totalWidth += item.clientWidth;
            });

            this.style.width = `${totalWidth}px`;
        }, 300);
    }
}

window.customElements.define('usp-slider', UspSlider, { extends: 'ul' });
