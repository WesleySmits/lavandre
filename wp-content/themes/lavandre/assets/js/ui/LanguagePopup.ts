import { getCookieValue, setCookieValue } from '../util/cookies';
import LanguageSwitcher from '../web-components/LanguageSwitcher';
import Popup from './Popup';

export default class LanguagePopup extends Popup {
    public static onInit(selector: Document | HTMLElement = document): void {
        if (selector !== document) {
            return;
        }

        if (getCookieValue('language-popup-seen')) {
            return;
        }

        const path = window.location.pathname;
        if (path === '/nl/' || path === '/fr/' || path === '/de/') {
            return;
        }

        const preferredLanguage = window.navigator.language ?? 'en';
        const language = preferredLanguage.substring(0, 2);
        if (language === 'en') {
            return;
        }

        setTimeout(() => {
            const popup = LanguagePopup.openPopup('language-popup', null, selector);
            setCookieValue('language-popup-seen', 'true', {
                'max-age': 31536000
            });

            if (popup === null) {
                return;
            }

            const domainDropdown: LanguageSwitcher | null = popup.querySelector('#domain-dropdown');

            const stayDomainButton: HTMLButtonElement | null =
                popup?.querySelector('#stayDomain') ?? null;

            const otherDomainButtons: HTMLButtonElement[] = Array.from(
                popup?.querySelectorAll('.otherDomains')
            );

            const submitDomainButton: HTMLButtonElement | null =
                popup?.querySelector('#submit-domain');

            stayDomainButton?.addEventListener('click', () => {
                popup?.dispatchEvent(new CustomEvent('toggle'));
            });

            otherDomainButtons.forEach((otherDomainButton: HTMLButtonElement) => {
                otherDomainButton?.addEventListener('click', () => {
                    const containers: HTMLElement[] = Array.from(
                        popup?.querySelectorAll('.language-popup__container')
                    );

                    containers.forEach((container: HTMLElement) => {
                        container.toggleAttribute('hidden');
                    });
                });
            });

            submitDomainButton?.addEventListener('click', () => {
                const value = domainDropdown?.selectedValue;

                if (!value || !domainDropdown) {
                    return;
                }

                const mapping = domainDropdown.dataset.mapping
                    ? JSON.parse(domainDropdown.dataset.mapping)
                    : {};

                const url = new URL(mapping[value]);

                if (!url) {
                    return;
                }

                window.location.href = url.href;
            });
        }, 1);
    }
}
