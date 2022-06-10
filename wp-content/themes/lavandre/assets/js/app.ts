import '@ungap/custom-elements';
import '../css/app.pcss';
import Component from './common/Component';
import Curtain from './components/Curtain';
import FieldValidation from './components/FieldValidation';
import ForgotPasswordToggle from './components/ForgotPasswordToggle';
import Module from './Module';
import LanguagePopup from './ui/LanguagePopup';
import SidePanel from './ui/SidePanel';
import { setCurrentLinkClass } from './util/links';
import './web-components/AccordionElement';
import './web-components/AjaxLoginForm';
import './web-components/AjaxRegisterForm';
import LavandreButton from './web-components/button/LavandreButton';
import './web-components/CarouselElement';
import './web-components/CookieBar';
import './web-components/EmailValidation';
import './web-components/ForgotPassword';
import './web-components/HeaderSearchToggle';
import './web-components/LanguageSwitcher';
import './web-components/LavandreSelect';
import './web-components/LazyBackground';
import './web-components/LazyLoader';
import './web-components/NewsletterSubscribe';
import './web-components/PasswordReveal';
import './web-components/UspSlider';
import './web-components/VideoMediaResolver';

export default class App extends Module {
    public components: Component[] = [
        SidePanel,
        Curtain,
        ForgotPasswordToggle,
        FieldValidation,
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
})();

if (LavandreButton) {
    window.customElements.define('lavandre-button', LavandreButton, { extends: 'button' });
}
