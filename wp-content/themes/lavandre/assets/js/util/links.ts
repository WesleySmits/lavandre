export function setCurrentLinkClass() {
    const pathName: string = window.location.pathname;
    const formattedPathName: string = stripTrailingSlash(pathName);
    const anchors: HTMLAnchorElement[] = Array.from(document.querySelectorAll(`nav a[href="${pathName}"], nav a[href="${formattedPathName}"]`));

    anchors.forEach((anchor) => {
        anchor.classList.add('current-link');
    });
}

export function stripTrailingSlash(str: string) {
    return str.endsWith('/') ?
        str.slice(0, -1) :
        str;
}
