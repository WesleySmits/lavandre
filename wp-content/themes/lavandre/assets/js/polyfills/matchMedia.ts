export function matchMediaAddEventListener(
    mq: MediaQueryList,
    callback: EventListener,
    eventBubbling = false
): void {
    try {
        mq.addEventListener('change', callback, eventBubbling);
    } catch (e) {
        mq.addListener(() => callback);
    }
}

export function matchMediaRemoveEventListener(mq: MediaQueryList, callback: EventListener): void {
    try {
        mq.removeEventListener('change', callback);
    } catch (e) {
        mq.removeListener(() => callback);
    }
}
