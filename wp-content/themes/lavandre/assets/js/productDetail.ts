import Component from './common/Component';
import DataLayer from './common/DataLayer';
import AjaxAddToCart from './components/AjaxAddToCart';
import AmountSelector from './components/AmountSelector';
import ChangeVariantColor from './components/ChangeVariantColor';
import ChangeVariantPrice from './components/ChangeVariantPrice';
import ImageGallery from './components/ImageGallery';
import Module from './Module';
import './web-components/ProductBackInStockForm';

export default class ProductDetail extends Module {
    public components: Component[] = [
        AjaxAddToCart,
        AmountSelector,
        ImageGallery,
        ChangeVariantPrice,
        ChangeVariantColor
    ];

    public initialize(): void {
        super.initialize();

        const data: GoogleAnalyticsProductDetailViewEvent = {
            event: 'view_item',
            ecommerce: {
                items: []
            }
        };

        const form: HTMLFormElement | null = document.querySelector('form[data-product_id]');
        const variationField: HTMLInputElement | null = document.querySelector(
            'input[name="variation_id"]'
        );

        const productData: GoogleAnalyticsProduct = {
            item_id: form?.dataset.product_id || '',
            item_name: document.querySelector('.product-detail__title')?.textContent || '',
            item_variant: variationField?.value || '',
            price:
                Number(
                    document.querySelector('[data-product-price]')?.textContent?.replace(',', '.')
                ) || 0,
            item_brand: 'Lavandré'
        };

        data.ecommerce.items.push(productData);

        DataLayer.push(data);
    }
}

(function productDetailInit() {
    const productDetail = new ProductDetail();
    productDetail.initialize();
})();
