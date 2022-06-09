import '../../css/components/_accordion.pcss';
import { getAbsoluteHeight } from '../util/dom';

class CurtainElement extends HTMLDetailsElement {
    #summary = this.querySelector('summary') as HTMLElement;

    #content = this.querySelector('.curtain-content') as HTMLElement;

    #animation: Animation | null = null;

    get open(): boolean {
        return this.hasAttribute('open');
    }

    set open(value: boolean) {
        this.toggleAttribute('open', value);
    }

    #handleAnchorClick = (event: Event) => {
        event.preventDefault();

        if (this.open) {
            this.close();
            return;
        }

        this.#open();
    };

    protected connectedCallback(): void {
        const summaryAnchors: HTMLAnchorElement[] = Array.from(this.#summary.querySelectorAll('a'));

        summaryAnchors.forEach((anchor) => {
            anchor.addEventListener('click', this.#handleAnchorClick);
        });
    }

    protected disconnectedCallback(): void {
        const summaryAnchors: HTMLAnchorElement[] = Array.from(this.#summary.querySelectorAll('a'));

        summaryAnchors.forEach((anchor) => {
            anchor.removeEventListener('click', this.#handleAnchorClick);
        });
    }

    #open(): void {
        this.style.height = `${this.offsetHeight}px`;
        this.open = true;
        window.requestAnimationFrame(() => this.#expand());
    }

    #expand(): void {
        const startHeight = `${this.offsetHeight}px`;
        const endHeight = `${this.#summary.offsetHeight + getAbsoluteHeight(this.#content)}px`;

        if (this.#animation) {
            this.#animation.cancel();
        }

        this.#animation = this.animate(
            {
                height: [startHeight, endHeight]
            },
            {
                duration: 400,
                easing: 'ease-out'
            }
        );

        this.#animation.onfinish = () => this.#onAnimationFinish(true);
    }

    public close(): void {
        this.classList.add('closing');

        const startHeight = `${this.offsetHeight}px`;
        const endHeight = `${this.#summary.offsetHeight}px`;

        if (this.#animation) {
            this.#animation.cancel();
        }

        this.#animation = this.animate(
            {
                height: [startHeight, endHeight]
            },
            {
                duration: 400,
                easing: 'ease-out'
            }
        );

        this.#animation.onfinish = () => this.#onAnimationFinish(false);
        this.#animation.oncancel = () => {
            this.classList.remove('closing');
        };
    }

    #onAnimationFinish(open: boolean) {
        this.open = open;
        this.#animation = null;
        this.classList.remove('closing');

        this.style.height = '';

        this.dispatchEvent(new Event('toggle'));
    }
}
class AccordionElement extends HTMLElement {
    #curtains: HTMLDetailsElement[] = [];

    protected connectedCallback() {
        this.#curtains = Array.from(this.querySelectorAll('details'));

        this.#curtains.forEach((curtain) => {
            curtain.addEventListener('toggle', () => {
                if (!curtain.open) {
                    return;
                }

                this.#closeOtherCurtains(curtain);
            });
        });
    }

    #closeOtherCurtains(curtain: HTMLDetailsElement): void {
        const otherCurtains = this.#curtains.filter((c) => curtain !== c);
        otherCurtains.forEach((otherCurtain) => {
            const curtainElement = otherCurtain as CurtainElement;
            curtainElement.open = false;
        });
    }
}

customElements.define('accordion-element', AccordionElement);
customElements.define('curtain-element', CurtainElement, { extends: 'details' });
