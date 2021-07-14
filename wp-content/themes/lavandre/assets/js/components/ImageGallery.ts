import Component from "../common/Component"

export default class ImageGallery extends Component {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        super();
        this.element = element;
    }

    public initialize(): void {
        const thumbnailAnchors: HTMLAnchorElement[] = Array.from(this.element.querySelectorAll('.product-detail__gallery__thumbnails a'));

        thumbnailAnchors.forEach((anchor) => {
            anchor.addEventListener('click', (event: Event) => {
                event.preventDefault();
                const id: string | undefined = anchor.dataset.thumbnailId;

                const image: HTMLElement | null = this.element.querySelector(`[data-image-id="${id}"]`);
                if (image === null) {
                    return;
                }

                const imageParent = image.parentElement!;
                Array.from(imageParent.querySelectorAll('li.active')).forEach((element) => {
                    element.classList.remove('active');
                });

                image.classList.add('active')
            });
        });
    }

    public static onInit(selector: Document | HTMLElement = document) {
        const element: HTMLElement | null = selector.querySelector('.product-detail__gallery');

        if (element === null) {
            return;
        }

        const instance = new ImageGallery(element);
        instance.initialize();
    }
}
