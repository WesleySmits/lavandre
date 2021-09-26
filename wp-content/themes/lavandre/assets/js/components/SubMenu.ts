import Component from "../common/Component";

export default class SubMenu extends Component {
    private element: HTMLElement;

    private header: HTMLElement = document.querySelector('.ww-site-header') as HTMLElement;

    constructor(element: HTMLElement) {
        super();
        this.element = element;
    }

    public initialize(): void {
        this.element.addEventListener('mouseenter', () => {
            const target: HTMLElement | null = this.element.querySelector('.ww-sub-menu');
            if (target === null) {
                return;
            }
            target.classList.remove('hidden');
            target.classList.add('active');
            this.header.classList.add('ww-submenu-open');
        });

        this.element.addEventListener('mouseleave', () => {
            const target: HTMLElement | null = this.element.querySelector('.ww-sub-menu');
            if (target === null) {
                return;
            }
            target.classList.remove('active');
            this.header.classList.remove('ww-submenu-open');

            setTimeout(() => { target.classList.add('hidden') }, 400);
        });
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const hoverElements: HTMLElement[] = Array.from(selector.querySelectorAll('[data-sub-menu]'));
        hoverElements.forEach((element) => {
            const subMenu = new SubMenu(element);
            subMenu.initialize();
        });
    }
}
