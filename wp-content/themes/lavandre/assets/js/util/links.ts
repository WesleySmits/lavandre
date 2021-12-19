export function setCurrentLinkClass() {
    const pathName: string = window.location.pathname;
    const formattedPathName: string = stripTrailingSlash(pathName);
    const fullUrl: string = window.location.href;
    const formattedUrl: string = stripTrailingSlash(fullUrl);
    const anchors: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll(`
        nav a[href="${pathName}"],
        nav a[href="${formattedPathName}"],
        nav a[href="${fullUrl}"],
        nav a[href="${formattedUrl}"]
    `)
    );

    anchors.forEach((anchor) => {
        anchor.classList.add('current-link');
    });
}

export function stripTrailingSlash(str: string) {
    return str.endsWith('/') ? str.slice(0, -1) : str;
}
