import { matchMediaAddEventListener } from '../polyfills/matchMedia';

class CarouselElement extends HTMLElement {
    #items: HTMLElement[] = [];

    #list: HTMLElement | null = null;

    #prevButton: HTMLButtonElement | null = null;

    #nextButton: HTMLButtonElement | null = null;

    #current: number = 0;

    #counter: number = 3;

    #interval: number = 0;

    protected connectedCallback() {
        this.#items = Array.from(this.querySelectorAll('[data-item]'));
        this.#list = this.querySelector('[data-items]');
        this.#prevButton = this.querySelector('[data-prev]') as HTMLButtonElement;
        this.#nextButton = this.querySelector('[data-next]') as HTMLButtonElement;

        if (!this.#list) {
            return;
        }

        this.#prevButton.addEventListener('click', () => {
            this.#navigate(-1);
        });

        this.#nextButton.addEventListener('click', () => {
            this.#navigate(1);
        });

        const componentCheck: MediaQueryList = window.matchMedia('(max-width: 1023px)');
        const setup = () => {
            if (componentCheck.matches === false) {
                this.deinitialize();
                return;
            }
            this.initialize();
        };

        setup();

        matchMediaAddEventListener(componentCheck, setup, false);
    }

    public deinitialize(): void {
        window.clearInterval(this.#interval);
        this.#list?.style.removeProperty('transform');
    }

    public initialize(): void {
        this.#navigate(0);

        const mq: MediaQueryList = window.matchMedia('(max-width: 479px)');
        this.#setCurrent(mq);

        matchMediaAddEventListener(
            mq,
            () => {
                this.#setCurrent(mq);
            },
            false
        );

        this.#interval = window.setInterval(() => {
            if (this.matches(':hover') || this.matches(':focus-within')) {
                return;
            }

            this.#navigate(1);
        }, 7000);
    }

    #setCurrent(mq: MediaQueryList): void {
        const itemsShown = mq.matches ? 1 : 2;
        this.#counter = this.#items.length - itemsShown;
    }

    #navigate(increment: number): void {
        if (!this.#list) {
            return;
        }

        this.#current += increment;

        if (this.#current < 0) {
            this.#current = this.#counter;
        }

        if (this.#current > this.#counter) {
            this.#current = 0;
        }

        this.#list.style.transform = `translateX(${this.#getTranslateX(this.#current)}px)`;
    }

    #getTranslateX(count: number): number {
        const monthWidth: number = this.#getItemWidth();
        return -(monthWidth * count);
    }

    #getItemWidth(): number {
        const item = this.#items[0];

        if (!item) {
            return 0;
        }

        const itemWidth: number = item.getBoundingClientRect().width;
        const gridGap: number = parseInt(
            window.getComputedStyle(this.#list as Element).columnGap,
            10
        );

        return itemWidth + gridGap;
    }
}

customElements.define('carousel-element', CarouselElement);
