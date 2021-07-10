import '../../css/components/_sidePanel.pcss';
import dialogPolyfill from 'dialog-polyfill';
import { disableBodyScroll, enableBodyScroll } from "../util/body";

export default class SidePanel {
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
}
