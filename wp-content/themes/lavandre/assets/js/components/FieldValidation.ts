export class FieldValidation {
    private field: HTMLInputElement;

    constructor(field: HTMLInputElement) {
        this.field = field;
    }

    public initialize(): void {
        if (!this.field) {
            return;
        }

        const events: string[] = ['change', 'validate'];
        for (let index = 0; index < events.length; index++) {
            const event = events[index];
            this.field.addEventListener(event, (e: Event) => { this.onChange(e.target as HTMLInputElement, e) });
        }

        this.field.addEventListener('invalid', (e) => {
            e.preventDefault();
        });
    }

    private onChange(field: HTMLInputElement, event: Event): void {
        FieldValidation.removeErrorText(this.field);

        if (this.field.validity.valid === true) {
            field.classList.remove('invalid');
            return;
        }

        const validationMessage: string = this.getValidationMessage(field.validity, field);
        FieldValidation.appendErrorText(this.field, validationMessage);
        field.classList.add('invalid');
    }

    private getValidationMessage(validity: ValidityState, field: HTMLInputElement): string {
        let defaultValidationMessage: string = 'Vul een geldige waarde in.';

        if (validity.valueMissing === true) {
            return field.dataset.valueMissing || field.title || 'Dit veld is verplicht.';
        }

        if (validity.customError === true) {
            return field.dataset.customMessage || field.title || defaultValidationMessage;
        }

        if (validity.typeMismatch === true) {
            return field.title || defaultValidationMessage;
        }

        if (validity.patternMismatch === true) {
            return field.title || defaultValidationMessage;
        }

        return defaultValidationMessage;
    }

    static appendErrorText(field: HTMLInputElement, validationMessage: string): void {
        const span: HTMLSpanElement = document.createElement('SPAN');
        span.classList.add('validation-message');
        span.innerText = validationMessage;

        field.parentElement?.appendChild(span);
    }

    static appendSuccessText(field: HTMLInputElement, validationMessage: string): void {
        const span: HTMLSpanElement = document.createElement('SPAN');
        span.classList.add('validation-message', 'validation-message--success');
        span.innerText = validationMessage;

        field.parentElement?.appendChild(span);
    }

    static removeErrorText(field: HTMLInputElement): void {
        const element: HTMLSpanElement | null = field.parentElement?.querySelector('.validation-message') || null;
        if (!element) {
            return;
        }

        element.remove();
    }
}
