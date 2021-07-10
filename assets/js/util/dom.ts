export function parseStringAsHtml(content:string, selector:string = 'template'):HTMLElement | HTMLTemplateElement {
    const domParser: DOMParser = new DOMParser();
    const parsed: Document = domParser.parseFromString(content, 'text/html');

    return parsed.querySelector(selector) || parsed.body;
}
