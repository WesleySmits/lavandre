import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';

export default class SignupBlock extends HTMLLIElement {
    #template: HTMLTemplateElement | null = null;

    #overlay: HTMLElement | null = null;

    #href: string | null = this.dataset.href || null;

    #points: number = Number(this.dataset.points) || 0;

    #type: string = this.getAttribute('type') || '';

    #completed: boolean = this.hasAttribute('completed') || false;

    get completed(): boolean {
        return this.#completed;
    }

    set completed(value: boolean) {
        this.#completed = value;

        this.#template = null;
        this.#overlay = null;
        this.querySelector('.points-grid__overlay')?.remove();
        this.#setTemplate();

        const titles: HTMLElement[] = Array.from(
            this.querySelectorAll('.points-grid__title-content')
        );

        titles.forEach((title) => {
            title.toggleAttribute('hidden', !title.hidden);
        });
    }

    #setTemplate(): void {
        if (!this.#template) {
            this.#template = this.#getTemplate();
        }

        this.appendChild(this.#template?.content.cloneNode(true) as HTMLElement);
        this.#overlay = this.querySelector('.points-grid__overlay');
    }

    #mouseenterHandler = () => {
        if (this.#overlay) {
            this.#overlay.hidden = false;
            return;
        }

        this.#setTemplate();
    };

    #mouseLeaveHandler = () => {
        this.#overlay?.toggleAttribute('hidden', true);
    };

    #clickHandler = () => {
        if (this.completed) {
            return;
        }

        const data = {
            action: 'ajaxaddloyaltypoints',
            points: String(this.#points),
            pool: 'default',
            type: this.#type
        };

        sendAjaxRequest(data, endpoints.ajax, null, () => {
            this.completed = true;
        });

        window.open(this.#href!, '_blank');
    };

    protected connectedCallback(): void {
        this.addEventListener('mouseenter', this.#mouseenterHandler);
        this.addEventListener('mouseleave', this.#mouseLeaveHandler);

        if (this.#href) {
            this.addEventListener('click', this.#clickHandler);
        }
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('mouseenter', this.#mouseenterHandler);
        this.removeEventListener('mouseleave', this.#mouseLeaveHandler);

        if (this.#href) {
            this.removeEventListener('click', this.#clickHandler);
        }
    }

    #getTemplate(): HTMLTemplateElement {
        let template = document.getElementById('points-grid-overlay') as HTMLTemplateElement;

        if (this.#completed) {
            template = document.getElementById(
                'points-grid-overlay--completed'
            ) as HTMLTemplateElement;

            return template;
        }

        const typeTemplate = document.getElementById(
            `points-grid-overlay--${this.#type}`
        ) as HTMLTemplateElement;

        if (typeTemplate) {
            return typeTemplate;
        }

        return template;
    }
}

customElements.define('signup-block', SignupBlock, { extends: 'li' });
