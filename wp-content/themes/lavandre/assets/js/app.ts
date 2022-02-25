import '@ungap/custom-elements';
import '../css/app.pcss';
import Component from './common/Component';
import EventEmitter from './common/EventEmitter';
import AjaxLogin from './components/AjaxLogin';
import AjaxRegister from './components/AjaxRegister';
import CookieBar from './components/CookieBar';
import CopyCoupon from './components/CopyCoupon';
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
import RedeemPointsForCoupon from './components/RedeemPointsForCoupon';
import ScrollToContent from './components/ScrollToContent';
import VideoMediaResolver from './components/VideoMediaResolver';
import Module from './Module';
import LanguagePopup from './ui/LanguagePopup';
import SidePanel from './ui/SidePanel';
import { setCurrentLinkClass } from './util/links';
import './web-components/AccordionElement';
import './web-components/BirthdayForm';
import LavandreButton from './web-components/button/LavandreButton';
import './web-components/CarouselElement';
import './web-components/LanguageSwitcher';
import './web-components/LavandreSelect';
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
        ForgotPassword,
        ForgotPasswordToggle,
        AjaxLogin,
        AjaxRegister,
        FieldValidation,
        HeaderSearch,
        LazyLoader,
        ScrollToContent,
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

    lazyBackgrounds();
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

function lazyBackgrounds(): void {
    document.addEventListener('DOMContentLoaded', () => {
        const lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));

        if ('IntersectionObserver' in window) {
            const lazyBackgroundObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        lazyBackgroundObserver.unobserve(entry.target);
                    }
                });
            });

            lazyBackgrounds.forEach((lazyBackground) => {
                lazyBackgroundObserver.observe(lazyBackground);
            });
        }
    });
}

if (LavandreButton) {
    window.customElements.define('lavandre-button', LavandreButton, { extends: 'button' });
}
