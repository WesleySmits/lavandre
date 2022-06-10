export default class LazyLoader extends HTMLImageElement {
    protected connectedCallback(): void {
        if ('IntersectionObserver' in window) {
            this.#onIntersectionObserver(IntersectionObserver);
            return;
        }

        this.#lazyload();
    }

    #onIntersectionObserver(ObserverClass = IntersectionObserver): void {
        const options = {
            root: null,
            rootMargin: '250px 0px',
            threshold: 0
        };

        const lazyImageObserver = new ObserverClass((entries, lazyImageObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.#lazyload();

                    lazyImageObserver.unobserve(entry.target);
                    lazyImageObserver.disconnect();
                }
            });
        }, options);

        if (this instanceof HTMLPictureElement) {
            lazyImageObserver.observe(this);
            return;
        }

        lazyImageObserver.observe(this);
    }

    #lazyload(): void {
        this.#manageCssClasses();

        const loadingSpinner = this.closest('.loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.classList.remove('loading-spinner');
        }

        if (this.dataset.sizes) {
            this.sizes = this.dataset.sizes || '';
            this.removeAttribute('data-sizes');
        }

        if (this.dataset.srcset) {
            this.srcset = this.dataset.srcset || '';
            this.removeAttribute('data-srcset');
        }

        if (this.dataset.src) {
            this.src = this.dataset.src;
            this.removeAttribute('data-src');
        }
    }

    #manageCssClasses(): void {
        this.classList.add('loaded');
        this.classList.remove('loading');
    }
}

window.customElements.define('lazy-loader', LazyLoader, { extends: 'img' });
