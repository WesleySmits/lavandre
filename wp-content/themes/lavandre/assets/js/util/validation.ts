export function setValidationMessage(message: string, element: HTMLElement) {
    const formRow: HTMLElement | null = element.closest('.form-row') ?? element;
    const formRowParent: HTMLElement | null | undefined = formRow?.parentElement;
    if (formRow === null || !formRowParent) {
        return;
    }

    removeExistingValidationMessages(element, formRowParent);

    const validationElement: HTMLElement = document.createElement('div');
    validationElement.className = 'validation-message';
    validationElement.textContent = message;

    formRowParent.insertBefore(validationElement, formRow);
}

export function removeExistingValidationMessages(element: HTMLElement, selector?: HTMLElement) {
    const grandparent: HTMLElement | null | undefined =
        selector || element.parentElement?.parentElement;
    if (!grandparent) {
        return;
    }

    const existingValidations: HTMLElement[] = Array.from(
        grandparent.querySelectorAll('.validation-message')
    );
    existingValidations.forEach((v) => {
        v.remove();
    });
}
