export default class CookieBar {
    private element: HTMLElement | null = null;

    private acceptButton: HTMLButtonElement | null = null;

    private rejectButton: HTMLButtonElement | null = null;

    static cookieName: string = 'approved_cookies';

    public initialize(): void {
        this.element = document.querySelector('[data-role="cookie-bar"]') as HTMLElement;

        if (!this.element) {
            return;
        }

        this.acceptButton = this.element.querySelector('[data-role="cookies-accept"]');
        this.rejectButton = this.element.querySelector('[data-role="cookies-reject"]');

        this.acceptButton?.addEventListener('click', this.acceptCookies.bind(this));
        this.rejectButton?.addEventListener('click', this.rejectCookies.bind(this));
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
        document.cookie = `${CookieBar.cookieName}=true;max-age=31536000`;
    }

    static setRejectCookie(): void {
        document.cookie = `${CookieBar.cookieName}=false;max-age=31536000`;
    }
}
