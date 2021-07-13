import '../css/app.pcss';

import './components/LazyLoader';
import EventEmitter from './common/EventEmitter';
import AjaxLogin from './components/AjaxLogin';
import AjaxRegister from './components/AjaxRegister';
import Curtain from './components/Curtain';
import EmailValidation from './components/EmailValidation';
import PasswordReveal from './components/PasswordReveal';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import Toast from './components/Toast';
import { ToastType } from './enums/ToastType';
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
        SubMenu
    ];

    public initialize() {
        super.initialize();
        setCurrentLinkClass();

        // #TODO: Move to checkout module
        if (document.body.classList.contains('woocommerce-checkout')) {
            const url: URL = new URL(window.location.href);
            if (url.searchParams.get('paynl_status') && url.searchParams.get('paynl_status') === 'CANCELED') {
                // #TODO: Translate string
                const toast: Toast = new Toast(
                    'De betaling is mislukt, probeer het a.u.b. opnieuw.',
                    ToastType.warning,
                    undefined,
                    20000
                );
                toast.initialize();
            }
        }
    }
}

(function appInit() {
    const app = new App();
    app.initialize();
})();
