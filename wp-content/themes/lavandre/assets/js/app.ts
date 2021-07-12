import '../css/app.pcss';
import AjaxAddToCart from './components/AjaxAddToCart';
import AjaxLogin from './components/AjaxLogin';
import AjaxRegister from './components/AjaxRegister';
import AmountSelector from './components/AmountSelector';
import Curtain from './components/Curtain';
import EmailValidation from './components/EmailValidation';
import PasswordReveal from './components/PasswordReveal';
import { addOrUpdateCartTotals } from './util/cart';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import Toast from './components/Toast';
import { ToastType } from './enums/ToastType';
import { FieldValidation } from './components/FieldValidation';
import InfoPopup from './components/InfoPopup';
import CookieBar from './components/CookieBar';
import ForgotPassword from './components/ForgotPassword';
import SidePanel from './ui/SidePanel';
import './components/LazyLoader';
import EventEmitter from './common/EventEmitter';

export default class App {

    private eventEmitter: EventEmitter = EventEmitter;

    public initialize() {
        this.initializeCurtain();
        this.initializeTippy();
        this.initializeCookieBar();
        this.initializePasswordReveal();
        this.initializeEmailCheck();
        this.initializeNewsLetterForm();
        this.initializeHeaderSearch();
        this.initializeLoginForm();
        this.initializePasswordResetForm();
        this.initializeDataPanelClicks();
        this.initializeSubMenu();
        this.initializePasswordForget();

        this.setCurrentLinkClass();
        this.listenToCartCall();

        if (document.body.classList.contains('single-product')) {
            this.initializeAmountSelector();
            this.productDetailOnSaleClass();
            this.productDetailAjaxAddToCart();
        }

        if (document.body.classList.contains('woocommerce-checkout')) {
            const url: URL = new URL(window.location.href);
            if (url.searchParams.get('paynl_status') && url.searchParams.get('paynl_status') === 'CANCELED') {
                const toast: Toast = new Toast(
                    'De betaling is mislukt, probeer het a.u.b. opnieuw.',
                    ToastType.warning,
                    undefined,
                    20000
                );
                toast.initialize();
            }

            this.listenToCheckoutCall();
        }

        window.addEventListener('resize', () => {
            this.fixSidePanelHeight();
        });

        this.eventEmitter.on('template-instantiated', (element: HTMLElement) => {
            this.initializeCurtain(element);

            this.initializeLoginForm();
            this.listenToLoginCall();
            this.listenToRegisterCall();
            this.initializePasswordReveal();
            this.initializePasswordForget();
        });
    }

    private initializePasswordForget(selector = document) {
        const passwordForgetLinks: HTMLAnchorElement[] = Array.from(selector.querySelectorAll('a[data-role="password-forget"]'));
        for (let index = 0; index < passwordForgetLinks.length; index++) {
            const link = passwordForgetLinks[index];
            const forgotPassword: ForgotPassword = new ForgotPassword(link);
            forgotPassword.initialize();
        }
    }

    private initializeSubMenu(): void {
        const hoverElements: HTMLElement[] = Array.from(document.querySelectorAll('[data-sub-menu]'));
        for (let index = 0; index < hoverElements.length; index++) {
            const element = hoverElements[index];
            element.addEventListener('mouseenter', () => {
                const target: HTMLElement | null = element.querySelector('.ww-sub-menu');
                if (target === null) {
                    return;
                }
                target.classList.remove('hidden');
                target.classList.add('active');
            });

            element.addEventListener('mouseleave', () => {
                const target: HTMLElement | null = element.querySelector('.ww-sub-menu');
                if (target === null) {
                    return;
                }
                target.classList.remove('active');
                setTimeout(() => { target.classList.add('hidden') }, 400);
            });
        }
    }

    private initializeDataPanelClicks() {
        const panelLinks: HTMLElement[] = Array.from(document.querySelectorAll('[data-panel]'));

        for (let index = 0; index < panelLinks.length; index++) {
            const element = panelLinks[index];
            element.addEventListener('click', (event: Event) => {
                event.preventDefault();

                const panelID: string = element.dataset.panel || "";

                // If already logged in follow link
                if (
                    element instanceof HTMLAnchorElement
                    && (panelID === 'my-account-panel' && document.body.classList.contains('logged-in'))
                ) {
                    window.location.href = element.href;
                    return;
                }

                let panel: HTMLDialogElement | null = document.querySelector(`[data-panel-name="${panelID}"]`);
                if (panel === null) {
                    const template: HTMLTemplateElement | null = document.querySelector(`[data-panel-template="${panelID}"]`);

                    if (template === null) {
                        if (element instanceof HTMLAnchorElement) {
                            window.location.href = element.href;
                            return;
                        }

                        return;
                    }

                    const clone: HTMLTemplateElement = template.cloneNode(true) as HTMLTemplateElement;
                    const content: DocumentFragment = clone.content;

                    template.parentElement?.appendChild(content);
                    panel = document.querySelector(`[data-panel-name="${panelID}"]`);

                    this.eventEmitter.emit('template-instantiated', panel);

                    if (panel === null) {
                        return;
                    }

                    const sidePanelInstance = new SidePanel(panel);
                    sidePanelInstance.initialize();
                }

                const toggleEvent = new CustomEvent('toggle');
                panel.dispatchEvent(toggleEvent);
            });
        }
    }

    private fixSidePanelHeight(): void {
        const sidepanels: HTMLElement[] = Array.from(document.querySelectorAll('.dialog-widget'));
        sidepanels.forEach((panel: HTMLElement) => {
            panel.style.height = `${window.innerHeight}px`;
        });
    }

    private listenToCartCall() {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            this.addEventListener('load', function() {
                if (
                    this.responseURL !== `${window.location.origin}/wp-admin/admin-ajax.php`
                ) {
                    return;
                }

                if (this.readyState !== 4) {
                    return;
                }

                const data = JSON.parse(this.responseText);
                const cart = data['cart'];

                if (!cart) {
                    return;
                }

                const cartAmount = cart['Total count'];
                if (!cartAmount) {
                    return;
                }

                addOrUpdateCartTotals(cartAmount);
            });

            const args: any = arguments;
            origOpen.apply(this, args);
        };
    }

    private listenToCheckoutCall() {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            this.addEventListener('load', function() {
                if (
                    this.responseURL !== `${window.location.origin}/?wc-ajax=checkout`
                ) {
                    return;
                }

                if (this.readyState !== 4) {
                    return;
                }

                const data: standardObject = JSON.parse(this.responseText);
                const wrapper: HTMLElement | null = document.getElementById('woocommerce-checkout-error-wrapper');

                if (!wrapper) {
                    return;
                }

                // setTimeout(() => {
                //     wrapper.innerHTML = data['messages'];
                // }, 2000)
            });

            const args: any = arguments;
            origOpen.apply(this, args);
        };
    }

    private listenToRegisterCall() {
        const registerForm: HTMLFormElement | null = document.querySelector('#ajax-register-form');

        if (registerForm === null) {
            return;
        }

        const ajaxRegister: AjaxRegister = new AjaxRegister(registerForm);
        ajaxRegister.initialize();
    }

    private listenToLoginCall() {
        const loginForm: HTMLFormElement | null = document.querySelector('#ajax-login-form');

        if (loginForm === null) {
            return;
        }

        const ajaxLogin: AjaxLogin = new AjaxLogin(loginForm);
        ajaxLogin.initialize();
    }

    private initializeLoginForm() {
        const loginForm: HTMLFormElement | null = document.getElementById('login-form') as HTMLFormElement;

        if (loginForm === null) {
            return;
        }

        const fields: HTMLInputElement[] = Array.from(loginForm.querySelectorAll('input:not([type="hidden"])'));
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            const fieldValidation: FieldValidation = new FieldValidation(field);
            fieldValidation.initialize();

        }
    }

    private initializePasswordResetForm() {
        const form: HTMLFormElement | null = document.getElementById('password-reset-form') as HTMLFormElement;

        if (form === null) {
            return;
        }

        const fields: HTMLInputElement[] = Array.from(form.querySelectorAll('input:not([type="hidden"])'));
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            const fieldValidation: FieldValidation = new FieldValidation(field);
            fieldValidation.initialize();
        }

        const submitButton: HTMLButtonElement = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        submitButton.addEventListener('click', (event: Event) => {
            event.preventDefault();

            let valid: boolean = true;

            for (let index = 0; index < fields.length; index++) {
                const field = fields[index];
                field.dispatchEvent(new Event('change'));

                valid = field.validity.valid;
            }

            if (!valid) {
                return;
            }

            form.submit();
        });
    }

    private setCurrentLinkClass() {
        const currentLinkComponents: HTMLElement[] = Array.from(document.querySelectorAll('nav'));

        for (let index = 0; index < currentLinkComponents.length; index++) {
            const navigationElement: HTMLElement = currentLinkComponents[index];
            const pathName: string = stripTrailingSlash(window.location.pathname);

            const anchors: HTMLAnchorElement[] = Array.from(navigationElement.querySelectorAll(`a[href="${pathName}"]`));
            for (let index = 0; index < anchors.length; index++) {
                anchors[index].classList.add('current-link');
            }
        }

        function stripTrailingSlash(str: string) {
            return str.endsWith('/') ?
                str.slice(0, -1) :
                str;
        }
    }

    private initializeCurtain(selector: Document | HTMLElement = document) {
        const toggles: HTMLButtonElement[] = Array.from(selector.querySelectorAll('[data-curtain-toggle]'));

        for (let index = 0; index < toggles.length; index++) {
            const toggle = toggles[index];
            if (!toggle) {
                continue;
            }

            const content: HTMLElement = selector.querySelector(`[data-curtain-content="${toggle.dataset.curtainToggle}"]`) as HTMLElement;
            if (!content) {
                continue;
            }

            const onlyOnMobile: boolean = (content.dataset.onlyOnMobile && content.dataset.onlyOnMobile === 'true') ? true : false;
            const curtain = new Curtain(content, toggle, onlyOnMobile);
            curtain.initialize();
        }
    }

    private initializeTippy() {
        const tippyElements: HTMLElement[] = Array.from(document.querySelectorAll('[data-role="tippy"]'));

        for (let index = 0; index < tippyElements.length; index++) {
            const tippyElement = tippyElements[index];
            if (!tippyElement) {
                continue;
            }

            const infoPopup = new InfoPopup(tippyElement, 'mouseover');
            infoPopup.initialize();
        }
    }

    private initializeCookieBar(): void {
        const cookieBar: CookieBar = new CookieBar();
        cookieBar.initialize();
    }

    private initializePasswordReveal(selector = document) {
        const passwordRows: HTMLElement[] = Array.from(selector.querySelectorAll('.password-row'));
        for (let index = 0; index < passwordRows.length; index++) {
            const passwordRow = passwordRows[index];
            if (passwordRow === null) {
                return;
            }
            const passwordReveal = new PasswordReveal(passwordRow);
            passwordReveal.initialize();
        }
    }

    private initializeEmailCheck() {
        const registerEmailInput: HTMLInputElement | null = document.querySelector('#reg_email');
        if (registerEmailInput === null) {
            return;
        }
        const emailValidation: EmailValidation = new EmailValidation(registerEmailInput);
        emailValidation.initialize();
    }

    private initializeNewsLetterForm(): void {
        const forms: HTMLFormElement[] = Array.from(document.querySelectorAll('#footer-newsletter-form, #homepage-newsletter-form'));

        for (let index = 0; index < forms.length; index++) {
            const form = forms[index];
            const newsletterSubscribe: NewsletterSubscribe = new NewsletterSubscribe(form);
            newsletterSubscribe.initialize();
        }
    }

    private initializeHeaderSearch() {
        const headerSearch: HTMLElement | null = document.querySelector('.header__search');
        if (headerSearch === null) {
            return;
        }

        const documentClickHandler = (event: Event) => {
            const eventTarget: HTMLElement = event.target as HTMLElement;
            if (eventTarget === null) {
                return;
            }

            const withinHeader: boolean = (eventTarget.closest('.header__search') !== null) ? true : false;
            if (withinHeader) {
                return;
            }

            headerSearch.classList.remove('active');
            document.body.removeEventListener('click', documentClickHandler);
        }

        headerSearch.addEventListener('click', (event: Event) => {
            event.stopImmediatePropagation();

            headerSearch.classList.add('active');

            const searchInputElement: HTMLInputElement | null = headerSearch.querySelector('.product-search-field');
            if (searchInputElement !== null) {
                searchInputElement.focus();
            }

            document.body.removeEventListener('click', documentClickHandler);
            document.body.addEventListener('click', documentClickHandler);
        });
    }

    private productDetailOnSaleClass() {
        setTimeout(() => {
            const thumbnails: HTMLElement | null = document.querySelector('.flex-control-nav');
            const badge: HTMLElement| null = document.querySelector('.badge.onsale');

            if (thumbnails !== null && badge !== null) {
                badge.style.setProperty('left', '18%');
            }
        }, 750);
    }

    private productDetailAjaxAddToCart(): void {
        const addToCartButton: HTMLButtonElement | null = document.querySelector('button[name="add-to-cart"]');
        if (addToCartButton === null) {
            return;
        }

        const ajaxAddToCart: AjaxAddToCart = new AjaxAddToCart(addToCartButton);
        ajaxAddToCart.initialize();
    }

    private initializeAmountSelector(): void {
        const amountSelector = new AmountSelector();
        amountSelector.initialize();
    }
}

(function appInit() {
    const app = new App();
    app.initialize();
})();
