import Component from "../common/Component";
import { disableBodyScroll, enableBodyScroll } from "../util/body";
import dialogPolyfill from 'dialog-polyfill';
import { toCamelCase } from "../util/string";

export default abstract class Dialog extends Component {
    protected element: InteractableHTMLDialogElement;

    protected _isOpen: boolean = false;

    protected _transitionTime: number = 0;

    protected abstract classes: standardObject;

    protected abstract dataAttribute: string;

    constructor(element: InteractableHTMLDialogElement) {
        super();
        this.element = element;
    }

    get isOpen() {
        return this._isOpen;
    }

    set isOpen(value: boolean) {
        this._isOpen = value
    }

    get camelDataAttribute() {
        const value: string = this.dataAttribute.replace('data-', '');
        return toCamelCase(value);
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
        this.element.addEventListener('open', () => {
            this.open();
        });

        this.element.addEventListener('toggle', () => {
            this.toggle();
        });

        const closeButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll('[data-close]'));
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

        if (!target.closest(`[${this.dataAttribute}="${this.element.dataset[`${this.camelDataAttribute}`]}"]`)) {
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
        if (this.isOpen) {
            return;
        }

        disableBodyScroll();
        this.element.showModal();
        this.isOpen = true;
        this.element.classList.add(this.classes.open);

        setTimeout(() => {
            this.element.classList.remove(this.classes.closed);
        }, this.transitionTime);
    }

    protected close(): void {
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
