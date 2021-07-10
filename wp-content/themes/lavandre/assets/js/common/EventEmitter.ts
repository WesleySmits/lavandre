type EventEmitterEvent = { [key: string]: Function[] }

class EventEmitterClass {
    private events: EventEmitterEvent = {};

    /**
     * Performs listener callback function upon triggered event
     */
    on(event: string, listener: Function): Function {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }

    /**
     * Remove listener from event emitter list
     */
    removeListener(event: string, listener: Function): void | null {
        if (typeof this.events[event] !== 'object') {
            return null;
        }

        const index: number = this.events[event].indexOf(listener);
        if (index > -1) {
            this.events[event].splice(index, 1);
        }

        return undefined;
    }

    /**
     * Remove all listeners from event emitter list
     */
    removeAllListeners(event: string): void | null {
        if (typeof this.events[event] !== 'object') {
            return null;
        }
        delete this.events[event];
        return undefined;
    }

    /**
     * Emits event so that any listeners can perform their callback function
     */
    emit(event: string, ...args: any[]): void | null {
        if (typeof this.events[event] !== 'object') {
            return null;
        }

        this.events[event].forEach((listener) => listener.apply(this, args));

        return undefined;
    }

    /**
     * Call event once and then remove it from the event emitter list
     */
    once(event: string, listener: Function): void {
        const remove: Function = this.on(event, (...args: any[]) => {
            remove();
            listener.apply(this, args);
        });
    }
}

export { EventEmitterClass };
export default new EventEmitterClass();
