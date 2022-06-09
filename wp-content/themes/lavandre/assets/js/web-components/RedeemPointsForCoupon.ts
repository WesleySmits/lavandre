import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import LavandreButton from './button/LavandreButton';

export default class RedeemPointsForCoupon extends LavandreButton {
    protected connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('click', this.#handleClick.bind(this));
    }

    protected disconnectedCallback(): void {
        super.disconnectedCallback();
        this.removeEventListener('click', this.#handleClick.bind(this));
    }

    #handleClick(event: Event): boolean {
        event.preventDefault();

        const id = this.dataset.id;

        if (!id) {
            return false;
        }

        const data = {
            action: 'ajaxredeemcoupon',
            id: id
        };

        sendAjaxRequest(data, endpoints.ajax, null, () => {}, undefined, event, this);

        return false;
    }
}

window.customElements.define('redeem-points-for-coupon', RedeemPointsForCoupon);
