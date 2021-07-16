import Component from "../common/Component";
import { sendAjaxRequest } from "../util/requests";

export default class ChangeVariantPrice extends Component {
    private elements: HTMLInputElement[];

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private regularPriceElement: HTMLElement | null = null;

    private salePriceElement: HTMLElement | null = null;

    constructor(elements: any) {
        super();

        this.elements = elements;
    }

    public initialize(): void {
        if (!this.elements.length) {
            return;
        }

        this.regularPriceElement = document.querySelector('.product-detail__price ins [data-product-price]') || document.querySelector('.product-detail__price [data-product-price]');
        this.salePriceElement = document.querySelector('.product-detail__price del [data-product-price]');

        if (!this.salePriceElement || !this.regularPriceElement) {
            return;
        }

        this.elements.forEach((radio) => {
            radio.addEventListener('change', () => {
                const variation_id: string | undefined = radio.value;
                const product_id: string | undefined = radio.dataset.productId;

                if (!variation_id || !product_id) {
                    return;
                }

                const priceElement: HTMLElement | null = document.querySelector('.product-detail__price [data-product-price]');
                if (!priceElement) {
                    return;
                }

                const data = {
                    action: 'ajaxgetvariantprice',
                    product_id: product_id,
                    variation_id: variation_id
                };

                sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
            });
        });
    }

    private onSuccess(response: any): void {
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        if (!response.data || !response.data.salePrice || !response.data.regularPrice) {
            throw new Error('No data');
        }

        const regularPrice = Number(response.data.regularPrice).toFixed(2);
        const salePrice = Number(response.data.salePrice).toFixed(2);

        this.regularPriceElement!.innerText = regularPrice;
        this.salePriceElement!.innerText = salePrice;
    }

    private onFailure(): void {
        return;
    }

    public static onInit(selector: Document | HTMLElement): void {
        const radioButtons: HTMLInputElement[] = Array.from(selector.querySelectorAll('input[type="radio"][name="attribute_attribute_pa_aantal-per-omverpakking"]'));
        if (!radioButtons.length) {
            return;
        }

        const instance = new ChangeVariantPrice(radioButtons);
        instance.initialize();
    }
}
