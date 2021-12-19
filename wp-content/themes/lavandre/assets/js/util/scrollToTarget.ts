export default function scrollToTarget(
    target: HTMLElement,
    defaultOffset: number = 0,
    headerOffset: boolean = true
): void {
    const bodyTopPosition: number = document.body.getBoundingClientRect().top;
    const elementPosition: number = target.getBoundingClientRect().top - bodyTopPosition;
    let offset: number = defaultOffset;
    if (headerOffset) {
        const header: HTMLElement | null = document.getElementById('header');

        if (header) {
            offset += header.clientHeight;
        }
    }

    const offsetPosition: number = elementPosition - offset + 1;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
