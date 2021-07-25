import Component from "../common/Component";

export default class LazyLoader extends Component {
    private element: HTMLElement;

    private elements: HTMLElement[];

    constructor(element: HTMLElement) {
        super();
        this.element = element;
        this.elements = this.getElements();

        if (!this.elements.length) {
            return;
        }

        this.initialize();
    }

    public initialize(): void {
        if ('IntersectionObserver' in window) {
            this.onIntersectionObserver(IntersectionObserver);
            return;
        }

        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            this.lazyload(element);
        }
    }

    private onIntersectionObserver(ObserverClass = IntersectionObserver): void {
        const options = {
            root: null,
            rootMargin: '250px 0px',
            threshold: 0
        };

        const lazyImageObserver = new ObserverClass((entries, lazyImageObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (this.element instanceof HTMLPictureElement) {
                        this.elements.forEach((lazy) => { this.lazyload(lazy); });
                    } else {
                        this.lazyload(entry.target as HTMLElement);
                    }
                    lazyImageObserver.unobserve(entry.target);
                    lazyImageObserver.disconnect();
                }
            });
        }, options);

        if (this.element instanceof HTMLPictureElement) {
            lazyImageObserver.observe(this.element);
            return;
        }

        this.elements.forEach((lazyImage) => { lazyImageObserver.observe(lazyImage); });
    }

    private lazyload(el: HTMLElement): void {
        const element = el;
        this.manageCssClasses(el);

        if (window.HTMLPictureElement && this.element instanceof HTMLPictureElement) {
            const image: HTMLImageElement | null = this.element.querySelector('img');
            if (image === null) {
                return;
            }

            this.manageCssClasses(image);
        }

        const loadingSpinner = this.element.closest('.loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.classList.remove('loading-spinner');
        }

        if (
            (element instanceof HTMLImageElement || element instanceof HTMLSourceElement)
            && element.dataset.sizes
        ) {
            element.sizes = element.dataset.sizes;
            element.removeAttribute('data-sizes');
        }

        if (
            (element instanceof HTMLImageElement || element instanceof HTMLSourceElement)
            && element.dataset.srcset
        ) {
            element.srcset = element.dataset.srcset;
            element.removeAttribute('data-srcset');
        }

        if (
            (element instanceof HTMLImageElement || element instanceof HTMLSourceElement)
            && element.dataset.src
        ) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
        }
    }

    private getElements(): HTMLElement[] {
        if (!this.element) {
            return [];
        }

        if (
            this.element instanceof HTMLImageElement
            && (this.element.dataset.src || this.element.dataset.srcset)
        ) {
            return [this.element]
        } else if (window.HTMLPictureElement && this.element instanceof HTMLPictureElement) {
            return Array.from(this.element.querySelectorAll('img[data-src], source[data-srcset]')) as HTMLElement[];
        } else {
            return Array.from(this.element.querySelectorAll('img[data-src]'));
        }
    }

    private manageCssClasses(element: HTMLElement): void {
        element.classList.add('loaded');
        element.classList.remove('loading');
    }

    public static onInit() {
        super.onInit();

        const lazyloadElements: HTMLElement[] = Array.from(document.querySelectorAll('[data-lazyload]'));
        for (let i = 0; i < lazyloadElements.length; i++) {
            const element = lazyloadElements[i];
            new LazyLoader(element);
        }
    }
}
