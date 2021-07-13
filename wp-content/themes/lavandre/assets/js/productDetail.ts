import Component from "./common/Component";
import AjaxAddToCart from "./components/AjaxAddToCart";
import AmountSelector from "./components/AmountSelector";
import Module from "./Module";

export default class ProductDetail extends Module {
    public components: Component[] = [
        AjaxAddToCart,
        AmountSelector
    ];
}

(function productDetailInit() {
    const productDetail = new ProductDetail();
    productDetail.initialize();
})();
