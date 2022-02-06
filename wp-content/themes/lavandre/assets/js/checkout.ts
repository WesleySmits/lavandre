import '@ungap/custom-elements';
import '../css/pages/checkout.pcss';
import Component from './common/Component';
import EventEmitter from './common/EventEmitter';
import Module from './Module';
import { setValidationMessage } from './util/validation';

export default class CheckoutModule extends Module {
    public eventEmitter: EventEmitter = EventEmitter;

    public components: Component[] = [];

    public initialize() {
        super.initialize();

        this.checkPayNLStatus();
    }

    private checkPayNLStatus(): void {
        const url: URL = new URL(window.location.href);
        if (
            url.searchParams.get('paynl_status') &&
            url.searchParams.get('paynl_status') === 'CANCELED'
        ) {
            const paymentElement = document.getElementById('checkout-errors');
            if (!paymentElement) {
                return;
            }
            setValidationMessage('Payment failed, please try again.', paymentElement);
        }
    }
}

(function checkoutInit() {
    const checkoutModule = new CheckoutModule();
    checkoutModule.initialize();
})();
