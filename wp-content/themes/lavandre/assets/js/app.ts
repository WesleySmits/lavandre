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
        Popup
    ];

    public initialize() {
        super.initialize();
        setCurrentLinkClass();
    }
}

(function appInit() {
    const app = new App();
    app.initialize();
})();
