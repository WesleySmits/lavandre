export default class FieldValidation {
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
            this.field.addEventListener(event, (e: Event) => {
                this.onChange(e.target as HTMLInputElement, e);
            });
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
        const defaultValidationMessage: string = 'Vul een geldige waarde in.';

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
        const element: HTMLSpanElement | null =
            field.parentElement?.querySelector('.validation-message') || null;
        if (!element) {
            return;
        }

        element.remove();
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        const loginForm: HTMLFormElement[] = Array.from(
            selector.querySelectorAll('[data-field-validation]')
        );

        loginForm.forEach((form: HTMLFormElement) => {
            const fields: HTMLInputElement[] = Array.from(
                form.querySelectorAll('input:not([type="hidden"])')
            );
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index];
                const fieldValidation: FieldValidation = new FieldValidation(field);
                fieldValidation.initialize();
            }

            const submitButton: HTMLButtonElement = form.querySelector(
                'button[type="submit"]'
            ) as HTMLButtonElement;
            submitButton?.addEventListener('click', (event: Event) => {
                event.preventDefault();

                let valid: boolean = true;

                for (let index = 0; index < fields.length; index++) {
                    const field = fields[index];
                    field.dispatchEvent(new Event('change'));

                    valid = field.validity.valid;
                }

                if (!valid) {
                    return;
                }

                form.submit();
            });
        });
    }
}
