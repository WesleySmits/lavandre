import Component from "../common/Component";
import SidePanel from "../ui/SidePanel";
import { addOrUpdateCartTotals } from "../util/cart";
import { sendAjaxRequest } from "../util/requests";
import Cart from '../cart';

export default class AjaxAddToCart extends Component {
    private form: HTMLFormElement;
    private variationFields: HTMLInputElement[];
    private button: HTMLButtonElement;
    private variationData: any[] = [];

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    constructor(form: HTMLFormElement) {
        super();
        this.form = form;
        this.button = this.form.querySelector(`button[name="add-to-cart"]`) as HTMLButtonElement;
        this.variationFields = Array.from(this.form.querySelectorAll('.product-detail__variations input'));

        this.handleChangeVariationAttribute();
    }

    public initialize(): void {
        this.variationFields.forEach((variation) => {
            variation.addEventListener('change', this.handleChangeVariationAttribute.bind(this))
        });

        this.button.addEventListener('click', this.handleAddToCartClick.bind(this));
    }

    private handleChangeVariationAttribute(): void {
        const currentOptions: standardObject = {};
        for (let index = 0; index < this.variationFields.length; index++) {
            const variation = this.variationFields[index];
            const name: string = variation.name;
            if (!this.form[name].value) {
                return;
            }

            currentOptions[name] = this.form[name].value;
        }

        const variationID: number | null = this.findMatchingVariant(currentOptions);
        if (!variationID) {
            return;
        }

        this.form['variation_id'].value = variationID;
    }

    private findMatchingVariant(currentOptions: standardObject): number | null {
        let variationID: number | null = null;
        if (!this.variationData.length) {
            const data = this.form.dataset.product_variations;
            if (!data) {
                return null;
            }

            this.variationData = JSON.parse(data);
            if (!this.variationData) {
                return null;
            }
        }

        this.variationData.forEach((variation) => {
            const attributes: standardObject = variation.attributes;

            if (!attributes) {
                throw new Error('no attributes');
            }

            for (const [key, value] of Object.entries(attributes)) {
                if (currentOptions[key] !== value) {
                    return;
                }
            }

            variationID = variation['variation_id'];
        });

        return variationID;
    }

    private handleAddToCartClick(event: Event): boolean {
        event.preventDefault();

        let variation_id: number = 0;
        const variationIdElement: HTMLInputElement | null = this.form.querySelector('[name="variation_id"]');
        if (variationIdElement) {
            variation_id = Number(variationIdElement.value);
        }

        let formIsValid = true;
        const fields: HTMLInputElement[] = Array.from(this.form.querySelectorAll('input'));
        fields.forEach((field) => {
            field.dispatchEvent(new Event('validate'));
            if (!field.validity.valid) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            throw new Error('Product add form is not valid');
        }

        const quantity: number = Number((this.form.querySelector('input[name="quantity"]') as HTMLInputElement)?.value) || 1;

        const data = {
            action: 'ajaxaddtocart',
            product_id: this.button.value,
            quantity: quantity.toString(),
            variation_id: variation_id.toString()
        };

        sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), undefined, this.button);

        return false;
    }

    private onSuccess(response: any): void {
        if (response.success === false) {
            throw new Error('something is wrong');
        }

        SidePanel.openSidePanel('cart-panel');
        Cart.updateCart();

        if (response.data.cartAmount) {
            addOrUpdateCartTotals(response.data.cartAmount);
        }
    }

    private onFailure() {
        const form: HTMLFormElement | null = this.button.closest('form');
        if (form === null) {
            return;
        }

        form.submit();
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const addToCartForm: HTMLFormElement | null = selector.querySelector('form.cart');
        if (addToCartForm === null) {
            return;
        }

        const ajaxAddToCart: AjaxAddToCart = new AjaxAddToCart(addToCartForm);
        ajaxAddToCart.initialize();
    }
}
