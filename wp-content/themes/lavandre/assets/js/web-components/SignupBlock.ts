import { matchMediaAddEventListener, matchMediaRemoveEventListener } from '../polyfills/matchMedia';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';

export default class SignupBlock extends HTMLLIElement {
    #template: HTMLTemplateElement | null = null;

    #overlay: HTMLElement | null = null;

    #href: string | null = this.dataset.href || null;

    #points: number = Number(this.dataset.points) || 0;

    #type: string = this.getAttribute('type') || '';

    #completed: boolean = this.hasAttribute('completed') || false;

    #mediaQuery: string = getComputedStyle(document.documentElement).getPropertyValue(
        '--tablet-landscape'
    );

    #mq: MediaQueryList = matchMedia(this.#mediaQuery);

    #isMobile: boolean = false;

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

    #checkIsMobile(): boolean {
        this.#isMobile = !this.#mq.matches;
        return this.#isMobile;
    }

    #setTemplate(): void {
        if (!this.#template) {
            this.#template = this.#getTemplate();
        }

        this.appendChild(this.#template?.content.cloneNode(true) as HTMLElement);
        this.#overlay = this.querySelector('.points-grid__overlay');
        const closeOverlayButton: HTMLButtonElement | null = this.querySelector('[data-close]');
        if (!closeOverlayButton) {
            return;
        }

        closeOverlayButton.addEventListener('click', this.#mouseLeaveHandler.bind(this), false);
    }

    #mouseenterHandler = () => {
        if (this.#overlay) {
            this.#overlay.hidden = false;
            return;
        }

        this.#setTemplate();
    };

    #mouseLeaveHandler = (event: Event) => {
        if (event) {
            event.stopPropagation();
        }

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
        this.#checkIsMobile();

        if (this.#isMobile) {
            this.removeEventListener('mouseenter', this.#mouseenterHandler);
            this.removeEventListener('mouseleave', this.#mouseLeaveHandler);
            this.addEventListener('click', this.#mouseenterHandler);
        } else {
            this.addEventListener('mouseenter', this.#mouseenterHandler);
            this.addEventListener('mouseleave', this.#mouseLeaveHandler);
            this.removeEventListener('click', this.#mouseenterHandler);
        }
        matchMediaAddEventListener(this.#mq, this.#checkIsMobile);

        if (this.#href) {
            const button: HTMLButtonElement | null = this.querySelector(
                'button[is="lavandre-button"]'
            );

            if (!button) {
                return;
            }

            button.addEventListener('click', this.#clickHandler);
        }
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('mouseenter', this.#mouseenterHandler);
        this.removeEventListener('mouseleave', this.#mouseLeaveHandler);
        this.removeEventListener('click', this.#mouseenterHandler);

        matchMediaRemoveEventListener(this.#mq, this.#checkIsMobile);

        if (this.#href) {
            this.removeEventListener('click', this.#clickHandler);
        }
    }

    #getTemplate(): HTMLTemplateElement {
        const template = document.getElementById('points-grid-overlay') as HTMLTemplateElement;

        if (!document.body.classList.contains('logged-in')) {
            return template;
        }

        if (this.#completed) {
            return (
                (document.getElementById(
                    `points-grid-overlay--completed--${this.#type}`
                ) as HTMLTemplateElement) ||
                (document.getElementById('points-grid-overlay--completed') as HTMLTemplateElement)
            );
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
