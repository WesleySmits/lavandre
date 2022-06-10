import '../../css/components/_cookie-bar.pcss';
import { getCookieValue, setCookieValue } from '../util/cookies';

export default class CookieBar extends HTMLTemplateElement {
    static cookieName: string = 'approved_cookies';

    #element: HTMLElement | null = null;

    #acceptButton: HTMLButtonElement | null = null;

    protected connectedCallback(): void {
        if (getCookieValue(CookieBar.cookieName)) {
            this.remove();
            return;
        }

        this.#element = this.#getElement();

        this.#acceptButton = this.#element.querySelector('[data-role="cookies-accept"]');
        this.#acceptButton?.addEventListener('click', this.#acceptCookies.bind(this));
    }

    #getElement(): HTMLElement {
        const clone: HTMLTemplateElement = this.cloneNode(true) as HTMLTemplateElement;
        const { content } = clone;
        this.parentElement!.appendChild(content);
        return document.querySelector('[data-role="cookie-bar"]') as HTMLElement;
    }

    #acceptCookies(): void {
        CookieBar.setAcceptCookie();
        this.#element?.remove();
    }

    static setAcceptCookie(): void {
        setCookieValue(CookieBar.cookieName, 'true', {
            'max-age': 31536000
        });
    }
}

window.customElements.define('cookie-bar', CookieBar, { extends: 'template' });
