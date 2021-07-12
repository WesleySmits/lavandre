import { getCookieValue, setCookieValue } from './cookies';

beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: '',
    });
});

describe('Test the getCookieValue() method', () => {
    it('should get a existing cookie by its value', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: '_searchPageFilters=adults%3D2',
        });

        expect(getCookieValue('_searchPageFilters')).toBe('adults%3D2');
    });

    it('should get null return because of nonexistent cookie by value', () => {
        expect(getCookieValue('_searchPageFilters')).toBeNull();
    });
});

describe('Test the setCookieValue() method', () => {
    it('should set a nonexistent cookie with name and value', () => {
        setCookieValue('_searchPageFilters', 'adults%3D2');

        expect(getCookieValue('_searchPageFilters')).toBe('adults%3D2');
    });

    it('should set a nonexistent cookie with name, value and options', () => {
        setCookieValue('_searchPageFilters', 'adults%3D2', { 'max-age': 31536000 });

        expect(getCookieValue('_searchPageFilters')).toBe('adults%3D2');
    });

    it('should update an existing cookie with name and value', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: '_searchPageFilters=adults%3D2',
        });

        expect(getCookieValue('_searchPageFilters')).toBe('adults%3D2');

        setCookieValue('_searchPageFilters', 'adults%3D5');

        expect(getCookieValue('_searchPageFilters')).toBe('adults%3D5');
    });
});
