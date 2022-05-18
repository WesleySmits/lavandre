/* eslint-disable camelcase */
import Cart from '../cart';
import Component from '../common/Component';
import SidePanel from '../ui/SidePanel';
import addOrUpdateCartTotals from '../util/cart';
import { sendAjaxRequest } from '../util/requests';
import LavandreButton from '../web-components/button/LavandreButton';

export default class AjaxAddToCart extends Component {
    private form: HTMLFormElement;

    private variationFields: HTMLInputElement[];

    private button: LavandreButton;

    private variationData: any[] = [];

    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private outOfStockForm: HTMLFormElement | null = document.getElementById(
        'product-back-in-stock-form'
    ) as HTMLFormElement;

    constructor(form: HTMLFormElement) {
        super();
        this.form = form;
        this.button = this.form.querySelector('button[name="add-to-cart"]') as LavandreButton;
        this.variationFields = Array.from(
            this.form.querySelectorAll('.product-detail__variations input')
        );

        this.handleChangeVariationAttribute();

        const currentSizeName = 'attribute_pa_size';
        const currentSizeValue = this.form[currentSizeName].value;

        this.handleChangeVariationAttribute(currentSizeName, currentSizeValue);
    }

    public initialize(): void {
        this.variationFields.forEach((variation) => {
            variation.addEventListener('change', () => {
                this.handleChangeVariationAttribute(variation.name, variation.value);
            });
        });

        this.button.addEventListener('click', this.handleAddToCartClick.bind(this));
    }

    private handleChangeVariationAttribute(name = '', value = ''): void {
        const currentOptions: standardObject = {};
        for (let index = 0; index < this.variationFields.length; index++) {
            const variation = this.variationFields[index];
            const { name } = variation;
            if (!this.form[name].value) {
                return;
            }

            currentOptions[name] = this.form[name].value;
        }

        const variationID: number | null = this.findMatchingVariant(currentOptions);
        // this.disableNonExistingVariants(name, value);
        this.disableOutOfStockVariants(name, value);

        const selectedVariation = this.variationData.find(
            (variation) => variation.variation_id === variationID
        );

        if (this.disabledChecker()) {
            this.selectFirstAvailableVariant();
        } else {
            setTimeout(() => {
                this.disableSubscriptionVariants();
            }, 100);
        }

        if (selectedVariation.is_in_stock === false) {
            this.disableButtonOnOutOfStock();
        } else {
            this.enableButtonOnOutOfStock();
        }

        this.disableButtonIfOutOfStock();
        if (!variationID) {
            this.setFormInvalid();
            return;
        }

        this.form.variation_id.value = variationID;
        // @ts-ignore
        if (window.jQuery) {
            window
                // @ts-ignore
                .jQuery(this.form)
                .trigger('show_variation', [this.findMatchingVariantData(currentOptions)]);
        }
    }

    private setFormInvalid(): void {
        this.form.product_id.value = '';
        this.form.variation_id.value = '';
    }

    private disabledChecker(): boolean {
        let returnValue: boolean = false;
        this.variationFields.forEach((field) => {
            if (field.disabled) {
                return;
            }

            returnValue = true;
        });

        return returnValue;
    }

    private selectFirstAvailableVariant(): void {
        const names = new Set();

        this.variationFields.forEach((field) => {
            names.add(field.name);
        });

        for (const name of names) {
            const fields: HTMLInputElement[] = Array.from(
                this.form.querySelectorAll(`[name="${name}"]`)
            );

            let selectedField = false;

            fields.forEach((field) => {
                if (field.checked) {
                    selectedField = true;
                }
            });

            if (!selectedField) {
                fields.forEach((field) => {
                    if (field.disabled || field.hasAttribute('aria-disabled')) {
                        return;
                    }

                    field.checked = true;
                });
            }
        }
    }

    private disableButtonIfOutOfStock(): void {
        let isInStock = false;
        this.variationData.forEach((variation) => {
            if (variation.is_in_stock) {
                isInStock = true;
            }
        });

        if (!isInStock) {
            this.disableButtonOnOutOfStock();
        }
    }

    private disableButtonOnOutOfStock(): void {
        this.button.isDisabled = true;
        this.button.disabled = true;
        this.button.label = this.button.dataset.outOfStock || 'Out of stock';

        this.outOfStockForm?.removeAttribute('hidden');
    }

    private enableButtonOnOutOfStock(): void {
        this.button.isDisabled = false;
        this.button.disabled = false;
        this.button.label = this.button.dataset.inStock || 'Add to Bag';

        this.outOfStockForm?.toggleAttribute('hidden', true);
    }

    private disableOutOfStockVariants(name: string = '', value = ''): void {
        if (name === 'attribute_pa_amount') {
            return;
        }

        this.variationData.forEach((variation) => {
            const { attributes } = variation;

            if (!attributes) {
                throw new Error('no attributes');
            }

            this.variationFields.forEach((field) => {
                const match = attributes[field.name];
                if (match === field.value) {
                    return;
                }
                if (variation.is_in_stock) {
                    return;
                }
                this.#disableField(field);
            });
        });

        this.variationData.forEach((variation) => {
            const { attributes } = variation;

            if (!attributes) {
                throw new Error('no attributes');
            }

            this.variationFields.forEach((field) => {
                const match = attributes[field.name];
                if (match === field.value) {
                    if (!variation.is_in_stock) {
                        return;
                    }

                    this.#enableField(field);
                }
            });
        });
    }

    // private disableNonExistingVariants(name: string = '', value = ''): void {
    //     if (name === 'attribute_pa_amount') {
    //     }
    // }

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
            const { attributes } = variation;

            if (!attributes) {
                throw new Error('no attributes');
            }

            for (const [key, value] of Object.entries(attributes)) {
                if (currentOptions[key] !== value) {
                    return;
                }
            }

            variationID = variation.variation_id;
        });

        return variationID;
    }

    private findMatchingVariantData(
        currentOptions: standardObject
    ): StandardObjectInterface | undefined {
        let returnValue;
        if (!this.variationData.length) {
            const data = this.form.dataset.product_variations;
            if (!data) {
                return undefined;
            }

            this.variationData = JSON.parse(data);
            if (!this.variationData) {
                return undefined;
            }
        }

        this.variationData.forEach((variation) => {
            const { attributes } = variation;

            if (!attributes) {
                throw new Error('no attributes');
            }

            for (const [key, value] of Object.entries(attributes)) {
                if (currentOptions[key] !== value) {
                    return;
                }
            }

            returnValue = variation;
        });

        return returnValue;
    }

    private handleAddToCartClick(event: Event): boolean {
        event.preventDefault();

        let variation_id: number = 0;
        const productIdElement: HTMLInputElement | null =
            this.form.querySelector('[name="variation_id"]');
        const variationIdElement: HTMLInputElement | null =
            this.form.querySelector('[name="variation_id"]');
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

        const quantity: number =
            Number(
                (this.form.querySelector('input[name="quantity"]') as HTMLInputElement)?.value
            ) || 1;

        const data = {
            action: 'ajaxaddtocart',
            product_id: this.button.value,
            quantity: quantity.toString(),
            variation_id: variation_id.toString(),
            subscription: ''
        };

        const formData = new FormData(this.form);
        const nameField = this.form.querySelector('#one_time_purchase') as HTMLInputElement;
        const name = nameField?.name;
        const subscription: boolean = !nameField?.checked;
        const subscriptionTerm: string = formData.get('subscription-term')?.toString() || '';

        if (subscription) {
            data.subscription = subscriptionTerm;
        }

        sendAjaxRequest(
            data,
            this.ajaxEndpoint,
            null,
            this.onSuccess.bind(this),
            this.onFailure.bind(this),
            undefined,
            this.button
        );

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
        // stub
    }

    #disableField(field: HTMLInputElement): void {
        // field.disabled = true;
        field.toggleAttribute('aria-disabled', true);
        field.removeAttribute('checked');
    }

    #enableField(field: HTMLInputElement): void {
        field.removeAttribute('disabled');
        field.removeAttribute('aria-disabled');
    }

    private disableSubscriptionVariants(): void {
        const fields: HTMLInputElement[] = Array.from(
            this.form.querySelectorAll('.custom-radio--subscription input')
        );

        fields.forEach((field) => {
            field.disabled = true;
            field.removeAttribute('checked');
        });
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
