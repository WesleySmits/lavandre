export default class AjaxForm extends HTMLFormElement {
    protected connectedCallback(): void {
        this.addEventListener('submit', this.submitHandler);
    }

    protected disconnectedCallback(): void {
        this.removeEventListener('submit', this.submitHandler);
    }

    protected submitHandler(event: Event): void {}
}
