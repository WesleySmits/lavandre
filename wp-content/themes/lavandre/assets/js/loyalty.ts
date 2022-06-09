import Module from './Module';
import './web-components/CopyCoupon';
import './web-components/RedeemPointsForCoupon';

export default class LoyaltyModule extends Module {
    public components = [];

    public initialize() {
        super.initialize();
    }
}

(function loyaltyInit() {
    const loyaltyModule = new LoyaltyModule();
    loyaltyModule.initialize();
})();
