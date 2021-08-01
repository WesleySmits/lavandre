import '../../css/components/_sidePanel.pcss';
import EventEmitter from '../common/EventEmitter';
import Dialog from './Dialog';

export default class SidePanel extends Dialog {
    protected dataAttribute: string = 'data-panel-name';

    protected classes: standardObject = {
        open: 'side-panel--opened',
        closed: 'side-panel--closed',
        left: 'side-panel--left',
        right: 'side-panel--right'
    }

    public static openSidePanel(panelID: string, element: HTMLElement | null = null):void {
        let panel: HTMLDialogElement | null = document.querySelector(`[data-panel-name="${panelID}"]`);
        if (panel === null) {
            const template: HTMLTemplateElement | null = document.querySelector(`[data-panel-template="${panelID}"]`);

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
            panel = document.querySelector(`[data-panel-name="${panelID}"]`);

            EventEmitter.emit('template-instantiated', panel);

            if (panel === null) {
                return;
            }

            const sidePanelInstance = new SidePanel(panel);
            sidePanelInstance.initialize();
        }

        const toggleEvent = new CustomEvent('toggle');
        panel.dispatchEvent(toggleEvent);
    }

    public static onInit() {
        super.onInit();

        const panelLinks: HTMLElement[] = Array.from(document.querySelectorAll('[data-panel]'));
        for (let index = 0; index < panelLinks.length; index++) {
            const element = panelLinks[index];

            element.removeEventListener('click', this.handleCreationEvent);
            element.addEventListener('click', this.handleCreationEvent);
        }
    }

    private static handleCreationEvent(this: HTMLElement, event: Event): void {
        event.preventDefault();
        const panelID: string = this.dataset.panel || "";

        // If already logged in follow link
        if (
            this instanceof HTMLAnchorElement
            && (panelID === 'my-account-panel' && document.body.classList.contains('logged-in'))
        ) {

            window.location.href = this.href;
            return;
        }

        SidePanel.openSidePanel(panelID, this);
    }
}
