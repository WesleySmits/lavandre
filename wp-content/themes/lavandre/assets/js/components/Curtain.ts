import '../../css/components/_curtain.pcss';
import Component from '../common/Component';

export default class Curtain extends Component {
    private element: HTMLElement;

    private foldButton: HTMLButtonElement;

    private onlyOnMobile: boolean;

    private defaultHeight: string;

    constructor(element: HTMLElement, foldButton: HTMLButtonElement, onlyOnMobile: boolean = false) {
        super();
        this.element = element;
        this.foldButton = foldButton;
        this.onlyOnMobile = onlyOnMobile;
        this.defaultHeight = (getComputedStyle(this.element).maxHeight !== undefined && getComputedStyle(this.element).maxHeight !== 'none') ? getComputedStyle(this.element).maxHeight : '0px';
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        this.foldButton.addEventListener('click', (e) => {
            if (this.onlyOnMobile && window.innerWidth >= 768) {
                return;
            }

            e.preventDefault();

            if (!this.element.classList.contains('active')) {
                this.foldButton.classList.add('active');
                this.element.classList.add('active');
                this.element!.style.maxHeight = this.defaultHeight;

                setTimeout(() => {
                    this.element!.style.maxHeight = `${this.element!.scrollHeight}px`;
                }, 1);
            } else {
                this.foldButton.classList.remove('active');
                this.element.classList.remove('active');
                this.element!.style.maxHeight = `${this.element!.scrollHeight}px`;

                setTimeout(() => {
                    this.element!.style.maxHeight = this.defaultHeight;
                }, 1);
            }

            if (!this.foldButton.dataset.readLess || !this.foldButton.dataset.readMore) {
                return;
            }

            if (this.foldButton.innerText === this.foldButton.dataset.readMore) {
                this.foldButton.innerText = this.foldButton.dataset.readLess;
                return;
            }

            this.foldButton.innerText = this.foldButton.dataset.readMore;
        });
    }

    private isValid(): boolean {
        if (
            !this.element
            || !this.foldButton
        ) {
            return false;
        }

        return true;
    }

    public static onInit(selector: Document | HTMLElement = document) {
        const toggles: HTMLButtonElement[] = Array.from(selector.querySelectorAll('[data-curtain-toggle]'));

        for (let index = 0; index < toggles.length; index++) {
            const toggle = toggles[index];
            const content: HTMLElement = selector.querySelector(`[data-curtain-content="${toggle.dataset.curtainToggle}"]`) as HTMLElement;
            if (!content) {
                continue;
            }

            const onlyOnMobile: boolean = (content.dataset.onlyOnMobile && content.dataset.onlyOnMobile === 'true') ? true : false;
            const curtain = new Curtain(content, toggle, onlyOnMobile);
            curtain.initialize();
        }
    }
}
