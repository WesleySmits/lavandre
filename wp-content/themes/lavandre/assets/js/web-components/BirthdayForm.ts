import { formatDate, formatNumberWithLeadingZero, getFullMonthName } from '../util/dateHelper';
import endpoints from '../util/endpoints';
import { sendAjaxRequest } from '../util/requests';
import LavandreSelect from './LavandreSelect';
import SignupBlock from './SignupBlock';

class BirthdayForm extends HTMLFormElement {
    #submitButton = this.querySelector('[type="submit"]') as HTMLButtonElement;

    #dayField: LavandreSelect | null = this.querySelector('#birthday-day');

    #monthField: LavandreSelect | null = this.querySelector('#birthday-month');

    protected connectedCallback(): void {
        this.addEventListener('submit', this.#onSubmit.bind(this));
        this.#submitButton.addEventListener('click', this.#onSubmit.bind(this));

        if (this.#dayField === null || this.#monthField === null) {
            return;
        }

        window.setTimeout(() => {
            this.#dayField!.optionValues = this.#getDayValues();
            this.#monthField!.optionValues = this.#getMonthValues();
        }, 1);
    }

    #getDayValues(): StandardObjectInterface {
        const returnValue: StandardObjectInterface = {};
        for (let i = 1; i <= 31; i++) {
            const num = formatNumberWithLeadingZero(i).toString();
            returnValue[num] = num;
        }

        return returnValue;
    }

    #getMonthValues(): StandardObjectInterface {
        const returnValue: StandardObjectInterface = {};
        for (let i = 1; i <= 12; i++) {
            const num = formatNumberWithLeadingZero(i).toString();
            const date = new Date(`2021-${num}-02`);
            const monthName = getFullMonthName(date);

            returnValue[i] = monthName;
        }

        return returnValue;
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('submit', this.#onSubmit.bind(this));
        this.#submitButton.removeEventListener('click', this.#onSubmit.bind(this));
    }

    #onSubmit(event: Event): boolean {
        event.preventDefault();
        const formData = new FormData(this);

        const day = formData.get('day');
        const month = formData.get('month');
        const year = '1970';

        if (!day || !month) {
            return false;
        }

        const date = new Date(`${year}-${month}-${day}`);

        const data: requestData = {
            action: 'ajaxdateofbirth',
            date: formatDate(date)
        };

        sendAjaxRequest(
            data,
            endpoints.ajax,
            null,
            this.#onSuccess.bind(this),
            this.#onFailure.bind(this),
            event,
            this.#submitButton
        );

        return false;
    }

    #onSuccess(): void {
        const block: SignupBlock | null = this.closest('[is="signup-block"]');
        if (!block) {
            return;
        }

        block.completed = true;
    }

    #onFailure(): void {
        // stuff
    }
}

customElements.define('birthday-form', BirthdayForm, { extends: 'form' });
