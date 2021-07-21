import '../../css/components/_sidePanel.pcss';
import dialogPolyfill from 'dialog-polyfill';
import { disableBodyScroll, enableBodyScroll } from "../util/body";
import EventEmitter from '../common/EventEmitter';
import Component from '../common/Component';

export default class SidePanel extends Component {
    private element: HTMLDialogElement;

    private _isOpen: boolean = false;

    private _transitionTime: number = 0;

    private classes: standardObject = {
        open: 'side-panel--opened',
        closed: 'side-panel--closed',
        left: 'side-panel--left',
        right: 'side-panel--right'
    }

    constructor(element: HTMLDialogElement) {
        super();
        this.element = element;
    }

    get isOpen() {
        return this._isOpen;
    }

    set isOpen(value: boolean) {
        this._isOpen = value
    }

    get transitionTime() {
        if (this._transitionTime) {
            return this._transitionTime;
        }

        this._transitionTime = this.getTransitionTime();
        return this._transitionTime;
    }

    public initialize(): void {
        this.polyfillDialog();
        this.setEventListeners();
    }

    private setEventListeners() {
        this.element.addEventListener('toggle', () => {
            this.toggle();
        });

        const closeButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll(".side-panel__close"));
        closeButtons.forEach((button: HTMLButtonElement) => {
            button.addEventListener('click', () => {
                this.close();
            })
        });

        this.element.addEventListener('click', (e: MouseEvent) => {
            this.outsideClick(e);
        });
    }

    private outsideClick(event: MouseEvent): void {
        const target: HTMLElement = event.target as HTMLElement;
        if (target === this.element) {
            const rect = target.getBoundingClientRect();
            const clickedInDialog = (
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width
            );

            if (!clickedInDialog) {
                this.close();
            }

            return;
        }

        if (!target.closest(`[data-panel-name="${this.element.dataset.panelName}"]`)) {
            this.close();
        }
    }

    private toggle(): void {
        if (this.isOpen) {
            this.close();
            return;
        }

        this.open();
    }

    private open(): void {
        disableBodyScroll();
        this.element.showModal();
        this.isOpen = true;
        this.element.classList.add(this.classes.open);

        setTimeout(() => {
            this.element.classList.remove(this.classes.closed);
        }, this.transitionTime);
    }

    private close(): void {
        enableBodyScroll();

        this.element.classList.remove(this.classes.open);

        setTimeout(() => {
            this.element.classList.add(this.classes.closed);
            this.element.close();
            this.isOpen = false;
        }, this.transitionTime);
    }

    private getTransitionTime(): number {
        const styles = getComputedStyle(this.element)
        let transitionDuration: string = styles.transitionDuration ?? '';
        let duration: number = (transitionDuration.indexOf("ms") > -1) ? parseFloat(transitionDuration) : parseFloat(transitionDuration) * 1000;
        return duration || 400;
    }

    private polyfillDialog() {
        dialogPolyfill.registerDialog(this.element);
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
