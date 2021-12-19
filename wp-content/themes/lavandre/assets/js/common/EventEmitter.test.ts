import EventEmitter from './EventEmitter';

beforeEach(() => {
    const eventEmitter: any = EventEmitter;
    eventEmitter.events = {};
});

describe('Test the on() method', () => {
    it('should set an array of functions if the key is not an object', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        const eventCallback: Function = () => {
            return 1;
        };
        eventEmitter.on(eventName, eventCallback);

        const returnValue: any = {};
        returnValue[eventName] = [eventCallback];

        expect(eventEmitter.events).toEqual(returnValue);
    });

    it('should set an array of functions if the key is an object', () => {
        const eventEmitter: any = EventEmitter;
        const eventName = { test: 'test' };
        const eventCallback = () => {
            return 1;
        };
        eventEmitter.on(eventName, eventCallback);

        expect(eventEmitter.events).toEqual({ '[object Object]': [eventCallback] });
    });
});

describe('Test the removeListener() method', () => {
    it('should set an array of functions if the event contains a function', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        const eventCallback: Function = () => {
            return 1;
        };
        eventEmitter.on(eventName, eventCallback);
        eventEmitter.removeListener(eventName, eventCallback);

        const returnValue: any = {};
        returnValue[eventName] = [];

        expect(eventEmitter.events).toEqual(returnValue);
    });

    it('should set an array of functions if the key is an object', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        const eventCallback: string = 'not a function';

        eventEmitter.events[eventName] = 'not a function';
        const result = eventEmitter.removeListener(eventName, eventCallback);

        expect(result).toEqual(null);
    });
});

describe('Test the removeAllListeners() method', () => {
    it('should set an array of functions if the event contains a function', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        const eventCallback: Function = () => {
            return 1;
        };
        eventEmitter.on(eventName, eventCallback);
        eventEmitter.removeAllListeners(eventName, eventCallback);
        const returnValue: any = {};
        returnValue[eventName] = [];
        expect(eventEmitter.events).toEqual({});
    });
    it('should set an array of functions if the key is an object', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        const eventCallback: string = 'not a function';
        eventEmitter.events[eventName] = 'not a function';
        const result = eventEmitter.removeAllListeners(eventName, eventCallback);
        expect(result).toEqual(null);
    });
});

describe('Test the emit() method', () => {
    it('should set an array of functions if the event contains a function', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';
        let value: number = 0;
        const eventCallback: Function = (num: number) => {
            value = num;
        };
        eventEmitter.on(eventName, eventCallback);
        eventEmitter.emit(eventName, 5);

        expect(value).toEqual(5);
    });

    it('should set an array of functions if the key is an object', () => {
        const eventEmitter: any = EventEmitter;
        const eventName: string = 'test';

        eventEmitter.events[eventName] = 'not a function';
        const result = eventEmitter.emit(eventName);

        expect(result).toEqual(null);
    });
});

describe('Test the once() method', () => {
    it('should call event once', () => {
        const eventEmitter: any = EventEmitter;
        const eventName = 'test';
        let value: number = 0;
        const eventCallback: Function = (num: number) => {
            value = num;
        };
        eventEmitter.once(eventName, eventCallback);
        eventEmitter.emit(eventName, 5);

        expect(value).toEqual(5);
        expect(eventEmitter.events[eventName].length).toEqual(0);
    });
});
