export default class LazyBackground extends HTMLElement {
    protected connectedCallback(): void {
        this.#loadHandler();
    }

    #loadHandler(): void {
        if (!('IntersectionObserver' in window)) {
            this.classList.add('visible');
            return;
        }

        const lazyBackgroundObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgroundObserver.observe(this);
    }
}

customElements.define('lv-lazy-background', LazyBackground, { extends: 'footer' });
