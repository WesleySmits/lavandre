const bodyElement: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
let scrollPosition: number = 0;

export function disableBodyScroll(): void {
    scrollPosition = window.pageYOffset;
    bodyElement.style.overflow = 'hidden';
    bodyElement.style.position = 'fixed';
    bodyElement.style.top = `-${scrollPosition}px`;
    bodyElement.style.width = '100%';
    document.documentElement.style.scrollBehavior = 'initial';
}

export function enableBodyScroll(): void {
    bodyElement.style.removeProperty('overflow');
    bodyElement.style.removeProperty('position');
    bodyElement.style.removeProperty('top');
    bodyElement.style.removeProperty('width');
    bodyElement.style.removeProperty('top');
    window.scrollTo(0, scrollPosition);
    document.documentElement.style.removeProperty('scroll-behavior');
}
