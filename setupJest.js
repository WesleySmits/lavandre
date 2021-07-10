require('jest-fetch-mock').enableMocks();

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: (prop) => {
            return '';
        }
    })
});
