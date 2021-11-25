import "../../css/components/_accordion.pcss";
import { getAbsoluteHeight } from "../util/dom";

class AccordionElement extends HTMLElement {
    #curtains: HTMLDetailsElement[] = [];

    protected connectedCallback() {
        this.#curtains = Array.from(this.querySelectorAll("details"));

        this.#curtains.forEach((curtain) => {
            curtain.addEventListener("toggle", () => {
                if (!curtain.open) {
                    return;
                }

                this.#closeOtherCurtains(curtain);
            });
        });
    }

    #closeOtherCurtains(curtain: HTMLDetailsElement): void {
        const otherCurtains = this.#curtains.filter((c) => curtain !== c);
        otherCurtains.forEach((curtain) => {
            const curtainElement = curtain as CurtainElement;
            curtainElement.open = false;
        });
    }
}

class CurtainElement extends HTMLDetailsElement {
    #summary = this.querySelector("summary") as HTMLElement;

    #content = this.querySelector(".curtain-content") as HTMLElement;

    #isClosing = false;

    #animation: Animation | null = null;

    get open(): boolean {
        return this.hasAttribute('open');
    }

    set open(value: boolean) {
        this.toggleAttribute('open', value);
    }

    #handleClick = (event: Event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();

        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
        }

        if (!this.#content) {
            this.dispatchEvent(new Event('close'));
            return;
        }

        if (this.#isClosing || this.open === false) {
            this.#open();
            return;
        }

        this.close();
    };

    protected connectedCallback(): void {
        this.#summary.addEventListener("click", this.#handleClick, {
            capture: true,
            passive: false
        });
    }

    protected disconnectedCallback(): void {
        this.#summary.removeEventListener("click", this.#handleClick);
    }

    #open(): void {
        this.style.height = `${this.offsetHeight}px`;
        this.open = true;
        window.requestAnimationFrame(() => this.#expand());
    }

    #expand(): void {
        const startHeight = `${this.offsetHeight}px`;
        const endHeight = `${
            this.#summary.offsetHeight + getAbsoluteHeight(this.#content)
            }px`;

        if (this.#animation) {
            this.#animation.cancel();
        }

        this.#animation = this.animate(
            {
                height: [startHeight, endHeight],
            },
            {
                duration: 400,
                easing: "ease-out",
            }
        );

        this.#animation.onfinish = () => this.#onAnimationFinish(true);
    }

    public close(): void {
        this.#isClosing = true;
        this.classList.add('closing');

        const startHeight = `${this.offsetHeight}px`;
        const endHeight = `${this.#summary.offsetHeight}px`;

        if (this.#animation) {
            this.#animation.cancel();
        }

        this.#animation = this.animate(
            {
                height: [startHeight, endHeight],
            },
            {
                duration: 400,
                easing: "ease-out",
            }
        );

        this.#animation.onfinish = () => this.#onAnimationFinish(false);
        this.#animation.oncancel = () => { this.#isClosing = false; this.classList.remove('closing'); };
    }

    #onAnimationFinish(open: boolean) {
        this.open = open;
        this.#animation = null;
        this.#isClosing = false;
        this.classList.remove('closing');

        this.style.height = '';

        this.dispatchEvent(new Event('toggle'));
    }
}

customElements.define("accordion-element", AccordionElement);
customElements.define("curtain-element", CurtainElement, { extends: 'details' });
