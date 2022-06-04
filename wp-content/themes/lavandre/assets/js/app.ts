import '@ungap/custom-elements';
import '../css/app.pcss';
import Component from './common/Component';
import EventEmitter from './common/EventEmitter';
import CookieBar from './components/CookieBar';
import CopyCoupon from './components/CopyCoupon';
import Curtain from './components/Curtain';
import EmailValidation from './components/EmailValidation';
import FieldValidation from './components/FieldValidation';
import ForgotPasswordToggle from './components/ForgotPasswordToggle';
import HeaderSearch from './components/HeaderSearch';
import InfoPopup from './components/InfoPopup';
import LazyLoader from './components/LazyLoader';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import PasswordReveal from './components/PasswordReveal';
import RedeemPointsForCoupon from './components/RedeemPointsForCoupon';
import VideoMediaResolver from './components/VideoMediaResolver';
import Module from './Module';
import LanguagePopup from './ui/LanguagePopup';
import SidePanel from './ui/SidePanel';
import { setCurrentLinkClass } from './util/links';
import './web-components/AccordionElement';
import './web-components/AjaxLoginForm';
import './web-components/AjaxRegisterForm';
import './web-components/BirthdayForm';
import LavandreButton from './web-components/button/LavandreButton';
import './web-components/CarouselElement';
import './web-components/ForgotPassword';
import './web-components/LanguageSwitcher';
import './web-components/LavandreSelect';
import './web-components/LavandreToggle';
import './web-components/LazyBackground';
import './web-components/SignupBlock';

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
        ForgotPasswordToggle,
        FieldValidation,
        HeaderSearch,
        LazyLoader,
        VideoMediaResolver,
        RedeemPointsForCoupon,
        CopyCoupon,
        LanguagePopup
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

    footerUspSlider();
})();

function footerUspSlider(): void {
    setTimeout(() => {
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
    }, 300);
}

if (LavandreButton) {
    window.customElements.define('lavandre-button', LavandreButton, { extends: 'button' });
}
