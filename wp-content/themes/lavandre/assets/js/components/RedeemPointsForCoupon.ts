/* eslint-disable no-console */
import Component from '../common/Component';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';

export default class RedeemPointsForCoupon extends Component {
    #button: HTMLButtonElement;

    constructor(button: HTMLButtonElement) {
        super();
        this.#button = button;
    }

    public initialize(): void {
        if (!this.isValid()) {
            return;
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        this.#button.addEventListener('click', (event: Event) => {
            this.onSubmit(event);
        });
    }

    private onSubmit(event: Event): boolean {
        event.preventDefault();

        const id = this.#button.dataset.id;

        if (!id) {
            return false;
        }

        const data = {
            action: 'ajaxredeemcoupon',
            id: id
        };

        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.onSuccess.bind(this),
            this.onFailure.bind(this),
            event,
            this.#button
        );

        return false;
    }

    private isValid(): boolean {
        if (!this.#button) {
            return false;
        }

        return true;
    }

    private onSuccess(res: any, event: Event): void {
        const response: any = res;
    }

    private onFailure(res: string): void {
        const response = JSON.parse(res);
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const redeemButtons: HTMLButtonElement[] = Array.from(
            selector.querySelectorAll('[data-role="redeem-coupon"]')
        );

        if (redeemButtons.length === 0) {
            return;
        }

        redeemButtons.forEach((button) => {
            const redeemPointsForCoupon: RedeemPointsForCoupon = new RedeemPointsForCoupon(button);
            redeemPointsForCoupon.initialize();
        });
    }
}
