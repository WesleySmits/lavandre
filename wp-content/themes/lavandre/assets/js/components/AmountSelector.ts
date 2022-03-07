import '../../css/components/_quantity.pcss';
import Component from '../common/Component';
import EventEmitter from '../common/EventEmitter';

export default class AmountSelector extends Component {
    private buttons: HTMLButtonElement[] = [];

    private eventEmitter: EventEmitter = EventEmitter;

    constructor(selector: Document | HTMLElement = document) {
        super();

        this.buttons = Array.from(selector.querySelectorAll('.plus-amount, .minus-amount'));
    }

    public initialize(): void {
        const eventListener: EventListener = (event: Event) => {
            const input: HTMLInputElement = event.target as HTMLInputElement;
            if (!input) {
                return;
            }

            if (input.max && +input.value > +input.max) {
                input.value = input.max;
            }

            if (input.min && +input.value < +input.min) {
                input.value = input.min;
            }

            this.eventEmitter.emit('amount-changed', event.target);
        };

        const inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('input.qty'));
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            input.removeEventListener('change', eventListener);
            input.addEventListener('change', eventListener);
        }

        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];

            button.removeEventListener('click', this.handleClick.bind(this));
            button.addEventListener('click', this.handleClick.bind(this));
        }
    }

    private handleClick: EventListener = (event: Event) => {
        const target: HTMLElement = event.target as HTMLElement;
        if (!target || !target.parentElement) {
            return;
        }

        const button = target.closest('button');
        if (!button || !button.parentElement) {
            return;
        }

        const input = button.parentElement.querySelector('.qty');
        if (!input || !(input instanceof HTMLInputElement)) {
            return;
        }

        this.changeAmount(button, input);
    };

    private changeAmount(target: HTMLElement, input: HTMLInputElement): void {
        let value = Number(input.value);
        const step = Number(input.getAttribute('step'));

        if (target.classList.contains('plus-amount')) {
            value += step;
        } else {
            value -= step;
        }

        input.value = value.toString();
        input.dispatchEvent(new Event('change'));
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const amountSelector = new AmountSelector(selector);
        amountSelector.initialize();
    }
}
