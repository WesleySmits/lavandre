import { getCookieValue, setCookieValue } from "../util/cookies";
import Popup from "./Popup"

export default class NewsLetterPopup extends Popup {
    public static onInit(selector: Document | HTMLElement = document): void {
        if (getCookieValue('newsletter-popup-seen')) {
            return;
        }

        setTimeout(() => {
            NewsLetterPopup.openPopup('newsletter-popup');
            setCookieValue('newsletter-popup-seen', 'true', {
                "max-age": 31536000
            });
        }, 3000);
    }
}
