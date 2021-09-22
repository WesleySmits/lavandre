import Component from "../common/Component";

export default class StickyHeader extends Component {
    private header: HTMLElement;

    private className = "transparent";

    constructor(header: HTMLElement) {
        super();
        this.header = header;
    }

    public initialize(): void {
        const mainBanner: HTMLElement | null = document.getElementById('main-banner');
        const options = {
            root: null,
            rootMargin: `-${this.getHeaderHeight()}px`,
            threshold: 0
        };

        if (!mainBanner) {
            return;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            this.onChange(entries, observer);
        }, options);
        observer.observe(mainBanner);
    }

    private onChange(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.addClass();
            } else {
                this.removeClass();
            }
        });

    }

    private getHeaderHeight(): number {
        return this.header.clientHeight;
    }

    private addClass(): void {
        this.header.classList.add(this.className);
    }

    private removeClass(): void {
        this.header.classList.remove(this.className);
    }

    public static onInit() {
        const header: HTMLElement | null = document.querySelector(
            ".ww-site-header"
        );
        if (!header) {
            return;
        }

        const stickyHeader = new StickyHeader(header);
        stickyHeader.initialize();
    }
}
