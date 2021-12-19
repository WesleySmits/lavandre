import '../css/pages/checkout.pcss';

import EventEmitter from './common/EventEmitter';
import Toast from './components/Toast';
import { ToastType } from './enums/ToastType';
import Component from './common/Component';
import Module from './Module';
import '@ungap/custom-elements';
import '@lavandre/button/dist/src/lavandre-button';

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
            const toast: Toast = new Toast(
                'Payment failed, please try again.',
                ToastType.warning,
                undefined,
                20000
            );
            toast.initialize();
        }
    }
}

(function checkoutInit() {
    const checkoutModule = new CheckoutModule();
    checkoutModule.initialize();
})();
