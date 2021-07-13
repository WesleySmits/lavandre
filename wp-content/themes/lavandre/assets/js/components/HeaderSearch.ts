import Component from "../common/Component";

export default class HeaderSearch extends Component {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        super();
        this.element = element;
    }

    public initialize(): void {
        const documentClickHandler = (event: Event) => {
            const eventTarget: HTMLElement = event.target as HTMLElement;
            if (eventTarget === null) {
                return;
            }

            const withinHeader: boolean = (eventTarget.closest('.header__search') !== null) ? true : false;
            if (withinHeader) {
                return;
            }

            this.element.classList.remove('active');
            document.body.removeEventListener('click', documentClickHandler);
        }

        this.element.addEventListener('click', (event: Event) => {
            event.stopImmediatePropagation();

            this.element.classList.add('active');

            const searchInputElement: HTMLInputElement | null = this.element.querySelector('.product-search-field');
            if (searchInputElement !== null) {
                searchInputElement.focus();
            }

            document.body.removeEventListener('click', documentClickHandler);
            document.body.addEventListener('click', documentClickHandler);
        });
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const headerSearch: HTMLElement | null = selector.querySelector('.header__search');
        if (headerSearch === null) {
            return;
        }

        const instance = new HeaderSearch(headerSearch);
        instance.initialize();
    }
}
