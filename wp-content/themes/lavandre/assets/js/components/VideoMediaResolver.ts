import Component from '../common/Component';

export default class VideoMediaResolver extends Component {
    #element: HTMLVideoElement;

    #sources: HTMLSourceElement[];

    #timeout: number | null = null;

    constructor(element: HTMLVideoElement) {
        super();
        this.#element = element;
        this.#sources = Array.from(this.#element.querySelectorAll('source'));
    }

    public initialize(): void {
        this.#handleResize();

        window.addEventListener('resize', () => {
            if (this.#timeout) {
                window.clearTimeout(this.#timeout);
            }

            this.#timeout = window.setTimeout(this.#handleResize.bind(this), 100);
        });
    }

    #handleResize(): void {
        this.#sources.forEach((source) => {
            const orientation = source.dataset.orientation || '';
            const maxWidth = Number(source.dataset.maxWidth) || 0;

            const currentOrientation = window.matchMedia('(orientation: portrait)').matches
                ? 'portrait'
                : 'landscape';
            const currentWidth = window.innerWidth;

            if (currentOrientation !== orientation) {
                return;
            }

            if (maxWidth && currentWidth >= maxWidth) {
                return;
            }

            this.#showSource(source);
        });
    }

    #showSource(source: HTMLSourceElement): void {
        const dataSrc = source.dataset.src;

        if (!dataSrc) {
            return;
        }

        this.#element.src = dataSrc;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const elements: HTMLVideoElement[] = Array.from(
            selector.querySelectorAll('video[data-resolve]')
        );

        elements.forEach((element) => {
            const instance = new VideoMediaResolver(element);
            instance.initialize();
        });
    }
}
