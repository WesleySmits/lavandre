interface InteractableHTMLDialogElement extends HTMLDialogElement {
    open: boolean;
    returnValue: string;
    close(returnValue?: string): void;
    show(): void;
    showModal(): void;
}
