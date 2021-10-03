import '../css/app.pcss';

import EventEmitter from './common/EventEmitter';
import AjaxLogin from './components/AjaxLogin';
import AjaxRegister from './components/AjaxRegister';
import Curtain from './components/Curtain';
import EmailValidation from './components/EmailValidation';
import PasswordReveal from './components/PasswordReveal';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import { FieldValidation } from './components/FieldValidation';
import InfoPopup from './components/InfoPopup';
import CookieBar from './components/CookieBar';
import ForgotPassword from './components/ForgotPassword';
import SidePanel from './ui/SidePanel';
import Component from './common/Component';
import HeaderSearch from './components/HeaderSearch';
import SubMenu from './components/SubMenu';
import { setCurrentLinkClass } from './util/links';
import Module from './Module';
import LazyLoader from './components/LazyLoader';
import Popup from './ui/Popup';
import NewsLetterPopup from './ui/NewsletterPopup';
import './web-components/AccordionElement';
import ScrollToContent from './components/ScrollToContent';

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
        AjaxLogin,
        AjaxRegister,
        FieldValidation,
        HeaderSearch,
        SubMenu,
        LazyLoader,
        NewsLetterPopup,
        ScrollToContent
    ];

    public initialize() {
        super.initialize();
        setCurrentLinkClass();

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
