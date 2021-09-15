import Component from "./common/Component";
import AjaxAddToCart from "./components/AjaxAddToCart";
import AmountSelector from "./components/AmountSelector";
import ChangeVariantColor from "./components/ChangeVariantColor";
import ChangeVariantPrice from "./components/ChangeVariantPrice";
import ImageGallery from "./components/ImageGallery";
import Module from "./Module";

export default class ProductDetail extends Module {
    public components: Component[] = [
        AjaxAddToCart,
        AmountSelector,
        ImageGallery,
        ChangeVariantPrice,
        ChangeVariantColor
    ];
}

(function productDetailInit() {
    const productDetail = new ProductDetail();
    productDetail.initialize();
})();
