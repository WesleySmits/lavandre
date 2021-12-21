import '@lavandre/button/dist/src/lavandre-button';
import '@ungap/custom-elements';
import '../css/app.pcss';
import Component from './common/Component';
import EventEmitter from './common/EventEmitter';
import AjaxLogin from './components/AjaxLogin';
import AjaxRegister from './components/AjaxRegister';
import CookieBar from './components/CookieBar';
import Curtain from './components/Curtain';
import EmailValidation from './components/EmailValidation';
import FieldValidation from './components/FieldValidation';
import ForgotPassword from './components/ForgotPassword';
import ForgotPasswordToggle from './components/ForgotPasswordToggle';
import HeaderSearch from './components/HeaderSearch';
import InfoPopup from './components/InfoPopup';
import LazyLoader from './components/LazyLoader';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import PasswordReveal from './components/PasswordReveal';
import ScrollToContent from './components/ScrollToContent';
import Module from './Module';
import SidePanel from './ui/SidePanel';
import { setCurrentLinkClass } from './util/links';
import './web-components/AccordionElement';

export default class App extends Module {
    public eventEmitter: EventEmitter = EventEmitter;

    public components: Component[] = [
        CookieBar,
        SidePanel,
        Curtain,
        InfoPopup,
        PasswordReveal,
        EmailValidation,
        NewsletterSubscribe,
        ForgotPassword,
        ForgotPasswordToggle,
        AjaxLogin,
        AjaxRegister,
        FieldValidation,
        HeaderSearch,
        LazyLoader,
        ScrollToContent
    ];

    public initialize() {
        super.initialize();
        setCurrentLinkClass();

        const wpFormsSubmitButtons = Array.from(
            document.querySelectorAll('[name="wpforms[submit]"]')
        );
        wpFormsSubmitButtons.forEach((button) => {
            button.removeAttribute('class');
            button.setAttribute('is', 'lavandre-button');
            button.setAttribute('size', 'large');
            button.setAttribute('full-width', 'large');
            button.setAttribute('outline', 'true');
        });
    }
}

(function appInit() {
    const app = new App();
    app.initialize();

    const list: HTMLElement | null = document.querySelector('.usp-slider');
    if (!list) {
        return;
    }

    const items: HTMLElement[] = Array.from(list.querySelectorAll('.usp-slider__item'));
    let totalWidth = 0;

    items.forEach((item) => {
        totalWidth += item.clientWidth;
    });

    list.style.width = `${totalWidth}px`;
})();
