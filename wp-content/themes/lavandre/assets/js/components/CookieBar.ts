import '../../css/components/_cookie-bar.pcss';
import Component from '../common/Component';
import { getCookieValue } from '../util/cookies';

export default class CookieBar extends Component {
    private element: HTMLElement | null = null;

    private templateElement: HTMLTemplateElement;

    private acceptButton: HTMLButtonElement | null = null;

    private rejectButton: HTMLButtonElement | null = null;

    static cookieName: string = 'approved_cookies';

    constructor() {
        super();
        this.templateElement = document.getElementById('cookie-bar-template')! as HTMLTemplateElement;
    }

    public initialize(): void {
        console.log('init', this.templateElement);
        if (this.templateElement === null) {
            console.log('no template');
            return;
        }

        if (getCookieValue(CookieBar.cookieName)) {
            this.templateElement.remove();
            console.log('template remove');
            return;
        }

        this.element = this.getElement();

        this.acceptButton = this.element.querySelector('[data-role="cookies-accept"]');
        this.rejectButton = this.element.querySelector('[data-role="cookies-reject"]');

        console.log(this.element, this.acceptButton, this.rejectButton);

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
        console.log('accept');
        CookieBar.setAcceptCookie();
        this.element?.remove();
    }

    private rejectCookies(): void {
        console.log('reject');
        CookieBar.setRejectCookie();
        this.element?.remove();
    }

    static setAcceptCookie(): void {
        document.cookie = `${CookieBar.cookieName}=true;max-age=31536000`;
    }

    static setRejectCookie(): void {
        document.cookie = `${CookieBar.cookieName}=false;max-age=31536000`;
    }

    public static onInit() {
        const cookieBar: CookieBar = new CookieBar();
        cookieBar.initialize();
    }
}
