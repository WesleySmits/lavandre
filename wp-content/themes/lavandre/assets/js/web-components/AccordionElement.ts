import "../../css/components/_accordion.pcss";

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

    protected connectedCallback(): void {
        this.#summary.addEventListener("click", (event: Event) => {
            event.preventDefault();

            if (this.#isClosing || this.open === false) {
                this.#open();
                return;
            }

            this.close();
        });
    }

    #open(): void {
        this.style.height = `${this.offsetHeight}px`;
        this.open = true;
        window.requestAnimationFrame(() => this.#expand());
    }

    #expand(): void {
        const startHeight = `${this.offsetHeight}px`;
        const endHeight = `${
            this.#summary.offsetHeight + this.#content.offsetHeight
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
        this.#animation.oncancel = () => (this.#isClosing = false);
    }

    #onAnimationFinish(open: boolean) {
        this.open = open;
        this.#animation = null;
        this.#isClosing = false;

        this.style.height = '';

        this.dispatchEvent(new Event('toggle'));
    }
}

customElements.define("accordion-element", AccordionElement);
customElements.define("curtain-element", CurtainElement, { extends: 'details' });
