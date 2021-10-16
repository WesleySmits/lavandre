import '../../css/components/_popup.pcss';
import EventEmitter from "../common/EventEmitter";
import Dialog from "./Dialog";

export default class Popup extends Dialog {
    protected dataAttribute: string = 'data-popup-name';

    protected classes: standardObject = {
        open: 'popup--opened',
        closed: 'popup--closed'
    }

    protected static openPopup(popupID: string, element: HTMLElement | null = null, selector: Document | HTMLElement = document): void {
        let popup: InteractableHTMLDialogElement | null = selector.querySelector(`[data-popup-name="${popupID}"]`);
        if (popup === null) {
            const template: HTMLTemplateElement | null = document.querySelector(`[data-popup-template="${popupID}"]`);

            if (template === null) {
                if (element && element instanceof HTMLAnchorElement) {
                    window.location.href = element.href;
                    return;
                }

                return;
            }

            const clone: HTMLTemplateElement = template.cloneNode(true) as HTMLTemplateElement;
            const content: DocumentFragment = clone.content;

            template.parentElement?.appendChild(content);
            popup = document.querySelector(`[data-popup-name="${popupID}"]`);

            EventEmitter.emit('template-instantiated', popup);

            if (popup === null) {
                return;
            }

            const popupInstance = new Popup(popup);
            popupInstance.initialize();
        }

        if (!popup.open) {
            const openEvent = new CustomEvent('open');
            popup.dispatchEvent(openEvent);
        }
    }

    public static onInit(): void {
        super.onInit();

        const popupLinks: HTMLElement[] = Array.from(document.querySelectorAll('[data-popup]'));
        for (let index = 0; index < popupLinks.length; index++) {
            const element = popupLinks[index];

            element.removeEventListener('click', this.handleCreationEvent);
            element.addEventListener('click', this.handleCreationEvent);
        }
    }

    private static handleCreationEvent(this: HTMLElement, event: Event): void {
        event.preventDefault();
        const popupID: string = this.dataset.popup || "";

        Popup.openPopup(popupID, this);
    }
}
