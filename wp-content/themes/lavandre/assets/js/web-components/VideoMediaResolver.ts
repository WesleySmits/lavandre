import { matchMediaAddEventListener } from '../polyfills/matchMedia';

export default class VideoMediaResolver extends HTMLVideoElement {
    #sources: HTMLSourceElement[] = Array.from(this.querySelectorAll('source'));

    protected connectedCallback(): void {
        this.#handleResize();

        const mq: MediaQueryList = window.matchMedia('(max-width: 767px)');
        const mq2: MediaQueryList = window.matchMedia('(orientation: portrait)');

        matchMediaAddEventListener(
            mq,
            () => {
                this.#handleResize();
            },
            false
        );

        matchMediaAddEventListener(
            mq2,
            () => {
                this.#handleResize();
            },
            false
        );
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

        this.src = dataSrc;
    }
}

window.customElements.define('video-media-resolver', VideoMediaResolver, { extends: 'video' });
