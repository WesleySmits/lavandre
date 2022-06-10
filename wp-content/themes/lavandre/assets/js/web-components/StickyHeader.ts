export default class StickyHeader extends HTMLElement {
    #className = 'transparent';

    protected connectedCallback(): void {
        const mainBanner: HTMLElement | null = document.getElementById('main-banner');
        const options = {
            root: null,
            rootMargin: `-${this.clientHeight}px`,
            threshold: 0
        };

        if (!mainBanner) {
            return;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            this.#onChange(entries);
        }, options);
        observer.observe(mainBanner);
    }

    #onChange(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.classList.add(this.#className);
            } else {
                this.classList.remove(this.#className);
            }
        });
    }
}

window.customElements.define('sticky-header', StickyHeader, { extends: 'header' });
