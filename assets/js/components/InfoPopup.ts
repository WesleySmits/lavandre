export default class InfoPopup {
    private element: HTMLElement;

    private event: string;

    private content: string;

    constructor(element: HTMLElement, event: string = 'mouseover') {
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
        let instance = window.tippy(this.element, {
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

        // this.element.addEventListener('mouseout', () => {
        //     instance.destroy();
        // });
    }

    private isValid(): boolean {
        if (
            !this.element
            || !this.content
        ) {
            return false;
        }

        return true;
    }
}
