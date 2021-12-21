import '../../css/components/_cookie-bar.pcss';
import Component from '../common/Component';
import { getCookieValue, setCookieValue } from '../util/cookies';

export default class CookieBar extends Component {
    #element: HTMLElement | null = null;

    #templateElement: HTMLTemplateElement;

    #acceptButton: HTMLButtonElement | null = null;

    static cookieName: string = 'approved_cookies';

    constructor(selector: Document | HTMLElement = document) {
        super();
        this.#templateElement = selector.querySelector(
            '#cookie-bar-template'
        )! as HTMLTemplateElement;
    }

    public initialize(): void {
        if (this.#templateElement === null) {
            return;
        }

        if (getCookieValue(CookieBar.cookieName)) {
            this.#templateElement.remove();
            return;
        }

        this.#element = this.#getElement();

        this.#acceptButton = this.#element.querySelector('[data-role="cookies-accept"]');
        this.#acceptButton?.addEventListener('click', this.#acceptCookies.bind(this));
    }

    #getElement(): HTMLElement {
        const clone: HTMLTemplateElement = this.#templateElement.cloneNode(
            true
        ) as HTMLTemplateElement;
        const { content } = clone;
        this.#templateElement.parentElement!.appendChild(content);
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

    public static onInit(selector: Document | HTMLElement = document): void {
        const cookieBar: CookieBar = new CookieBar(selector);
        cookieBar.initialize();
    }
}
