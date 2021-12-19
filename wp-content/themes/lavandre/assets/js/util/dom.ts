export function parseStringAsHtml(
    content: string,
    selector: string = 'template'
): HTMLElement | HTMLTemplateElement {
    const domParser: DOMParser = new DOMParser();
    const parsed: Document = domParser.parseFromString(content, 'text/html');

    return parsed.querySelector(selector) || parsed.body;
}

export function getAbsoluteHeight(el: HTMLElement): number {
    const styles = window.getComputedStyle(el);
    const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);

    return Math.ceil(el.offsetHeight + margin);
}
