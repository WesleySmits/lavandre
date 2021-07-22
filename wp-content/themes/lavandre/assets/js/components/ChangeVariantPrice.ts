import Component from "../common/Component";
import { sendAjaxRequest } from "../util/requests";

export default class ChangeVariantPrice extends Component {
    private elements: HTMLInputElement[];

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private regularPriceElement: HTMLElement | null = null;

    private salePriceElement: HTMLElement | null = null;

    constructor(elements: HTMLInputElement[]) {
        super();
        this.elements = elements;
    }

    public initialize(): void {
        this.regularPriceElement = document.querySelector('.product-detail__price ins [data-product-price]') || document.querySelector('.product-detail__price [data-product-price]');
        this.salePriceElement = document.querySelector('.product-detail__price del [data-product-price]');

        if (!this.salePriceElement && !this.regularPriceElement) {
            return;
        }

        const form: HTMLFormElement | null = this.elements[0].closest('form');
        if (!form) {
            return;
        }

        const product_id: string | undefined = form.dataset.product_id;

        if (!product_id) {
            return;
        }

        this.elements.forEach((radio) => {
            radio.addEventListener('change', () => {
                const variationIdElement: HTMLInputElement | null = form.querySelector('[name="variation_id"]');
                const variation_id: string | undefined = variationIdElement?.value;

                if (!variation_id || !product_id) {
                    return;
                }

                const data = {
                    action: 'ajaxgetvariantprice',
                    product_id: product_id,
                    variation_id: variation_id
                };

                sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this));
            });
        });
    }

    private onSuccess(response: any): void {
        if (!response.data || (!response.data.salePrice && !response.data.regularPrice)) {
            throw new Error('No data');
        }

        const regularPrice = Number(response.data.regularPrice).toFixed(2);
        const salePrice = Number(response.data.salePrice).toFixed(2);

        if (this.regularPriceElement && regularPrice) {
            this.regularPriceElement!.innerText = regularPrice;
        }

        if (this.salePriceElement && salePrice) {
            this.salePriceElement.innerText = salePrice;
        }
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const radioButtons: HTMLInputElement[] = Array.from(selector.querySelectorAll('.product-detail__variations input[type="radio'));
        if (!radioButtons.length) {
            return;
        }

        const instance = new ChangeVariantPrice(radioButtons);
        instance.initialize();
    }
}
