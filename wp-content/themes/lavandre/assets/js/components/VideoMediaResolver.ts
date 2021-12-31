import Component from '../common/Component';
import { matchMediaAddEventListener } from '../polyfills/matchMedia';

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

        const mq: MediaQueryList = window.matchMedia('(max-width: 767px)');
        const mq2: MediaQueryList = window.matchMedia('(orientation: portrait)');

        matchMediaAddEventListener(
            mq,
            (event) => {
                this.#handleResize();
            },
            false
        );

        matchMediaAddEventListener(
            mq2,
            (event) => {
                this.#handleResize();
            },
            false
        );
    }

    #handleResize(): void {
        // eslint-disable-next-line no-console
        console.log('handle resize');
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
