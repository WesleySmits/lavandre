import '../../css/components/_infoPopup.pcss';
import Component from '../common/Component';

export default class InfoPopup extends Component {
    private element: HTMLElement;

    private event: string;

    private content: string;

    constructor(element: HTMLElement, event: string = 'mouseover') {
        super();
        this.element = element;
        this.event = event;
        this.content = this.element.dataset.content || '';
    }

    public initialize(): void {
        if (this.isValid() === false) {
            return;
        }

        this.element.addEventListener(this.event, this.showTippy.bind(this));
    }

    private showTippy(e: Event): void {
        // @ts-ignore
        const instance = window.tippy(this.element, {
            content: this.content,
            theme: 'light',
            allowHTML: true,
            hideOnClick: true,
            showOnCreate: true,
            interactive: true,
            onHidden: (i: any) => {
                i.destroy();
            }
        });

        if (instance === undefined) {
            return;
        }

        instance.show();
        instance.hideWithInteractivity(e);
    }

    private isValid(): boolean {
        if (!this.element || !this.content) {
            return false;
        }

        return true;
    }

    public static onInit(selector: Document | HTMLElement = document) {
        const tippyElements: HTMLElement[] = Array.from(
            selector.querySelectorAll('[data-role="tippy"]')
        );

        for (let index = 0; index < tippyElements.length; index++) {
            const tippyElement = tippyElements[index];
            if (!tippyElement) {
                continue;
            }

            const infoPopup = new InfoPopup(tippyElement, 'mouseover');
            infoPopup.initialize();
        }
    }
}
