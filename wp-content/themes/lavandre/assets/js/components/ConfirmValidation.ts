export default class ConfirmValidation {
    field: HTMLInputElement;

    confirmField: HTMLInputElement;

    constructor(field: HTMLInputElement, confirmField: HTMLInputElement) {
        this.field = field;
        this.confirmField = confirmField;
    }

    initialize() {
        if (
            !this.field
            || !this.confirmField
        ) {
            throw new Error('Missing fields');
        }

        const events: string[] = ['change', 'input'];
        for (let index = 0; index < events.length; index++) {
            const event = events[index];
            this.confirmField.addEventListener(event, () => {
                if (this.field.value !== this.confirmField.value) {
                    const message: string = 'Value is not equal';
                    this.confirmField.setCustomValidity(message);
                    this.confirmField.reportValidity();
                } else {
                    this.confirmField.setCustomValidity('');
                    this.confirmField.reportValidity();
                }
            });
        }
    }
}
