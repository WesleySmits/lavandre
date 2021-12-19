import Component from '../common/Component';
import scrollToTarget from '../util/scrollToTarget';

export default class ScrollToContent extends Component {
    #element: HTMLButtonElement;

    #target: HTMLElement;

    constructor(element: HTMLButtonElement, target: HTMLElement) {
        super();
        this.#element = element;
        this.#target = target;
    }

    public initialize() {
        this.#element.addEventListener('click', (event: Event) => {
            event.preventDefault();

            const headerOffset = !this.#element.dataset.headerOffset;

            scrollToTarget(this.#target, 0, headerOffset);
        });
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const elements: HTMLButtonElement[] = Array.from(
            selector.querySelectorAll('[data-scroll-to]')
        );

        elements.forEach((element) => {
            const targetId = element.dataset.scrollTo || '';
            const target = document.getElementById(targetId);

            if (!target) {
                return;
            }

            const instance = new ScrollToContent(element, target);
            instance.initialize();
        });
    }
}
