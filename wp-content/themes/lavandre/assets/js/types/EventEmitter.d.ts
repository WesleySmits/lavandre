type EventEmitter = {
    on(event: string, listener: Function): Function;
    removeListener(event: string, listener: Function): void;
    emit(event: string, ...args: any): void;
    once(event: string, listener: Function): void;
}
