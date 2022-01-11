class SignupBlock extends HTMLLIElement {
    #template: HTMLTemplateElement | null = null;

    #overlay: HTMLElement | null = null;

    #mouseenterHandler = () => {
        if (this.#overlay) {
            this.#overlay.hidden = false;
            return;
        }

        if (!this.#template) {
            this.#getTemplate();
        }

        this.appendChild(this.#template?.content.cloneNode(true) as HTMLElement);
        this.#overlay = this.querySelector('.points-grid__overlay');
    };

    #mouseLeaveHandler = () => {
        this.#overlay?.toggleAttribute('hidden', true);
    };

    protected connectedCallback(): void {
        this.addEventListener('mouseenter', this.#mouseenterHandler);
        this.addEventListener('mouseleave', this.#mouseLeaveHandler);
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('mouseenter', this.#mouseenterHandler);
        this.removeEventListener('mouseleave', this.#mouseLeaveHandler);
    }

    #getTemplate(): void {
        this.#template = document.getElementById('points-grid-overlay') as HTMLTemplateElement;
    }
}

customElements.define('signup-block', SignupBlock, { extends: 'li' });
