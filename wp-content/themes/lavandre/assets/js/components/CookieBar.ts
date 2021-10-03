import '../../css/components/_cookie-bar.pcss';
import Component from '../common/Component';
import { getCookieValue, setCookieValue } from '../util/cookies';

export default class CookieBar extends Component {
    private element: HTMLElement | null = null;

    private templateElement: HTMLTemplateElement;

    private acceptButton: HTMLButtonElement | null = null;

    private rejectButton: HTMLButtonElement | null = null;

    static cookieName: string = 'approved_cookies';

    constructor(selector: Document | HTMLElement = document) {
        super();
        this.templateElement = selector.querySelector('#cookie-bar-template')! as HTMLTemplateElement;
    }

    public initialize(): void {
        if (this.templateElement === null) {
            return;
        }

        if (getCookieValue(CookieBar.cookieName)) {
            this.templateElement.remove();
            return;
        }

        this.element = this.getElement();

        this.acceptButton = this.element.querySelector('[data-role="cookies-accept"]');
        this.rejectButton = this.element.querySelector('[data-role="cookies-reject"]');

        this.acceptButton?.addEventListener('click', this.acceptCookies.bind(this));
        this.rejectButton?.addEventListener('click', this.rejectCookies.bind(this));
    }

    private getElement(): HTMLElement {
        const clone: HTMLTemplateElement = this.templateElement.cloneNode(true) as HTMLTemplateElement;
        const content: DocumentFragment = clone.content;
        this.templateElement.parentElement!.appendChild(content);
        return document.querySelector('[data-role="cookie-bar"]') as HTMLElement;
    }

    private acceptCookies(): void {
        CookieBar.setAcceptCookie();
        this.element?.remove();
    }

    private rejectCookies(): void {
        CookieBar.setRejectCookie();
        this.element?.remove();
    }

    static setAcceptCookie(): void {
        setCookieValue(CookieBar.cookieName, 'true', {
            "max-age": 31536000
        });
    }

    static setRejectCookie(): void {
        setCookieValue(CookieBar.cookieName, 'false', {
            "max-age": 31536000
        });
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const cookieBar: CookieBar = new CookieBar(selector);
        cookieBar.initialize();
    }
}
