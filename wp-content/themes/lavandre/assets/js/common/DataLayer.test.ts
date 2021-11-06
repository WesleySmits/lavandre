import { DataLayer } from "./DataLayer";

describe('Test the DataLayer class', () => {
    it('should fallback to an empty array', () => {
        const instance: any = new DataLayer();
        expect(instance.dataLayer).toEqual([]);
    });

    it('should create a datalayer property on the window object', () => {
        Object.defineProperty(window, 'dataLayer', {
            value: []
        });

        new DataLayer();
        expect(window.dataLayer).toEqual([]);
    });

    it('should push a value to the datalayer array', () => {
        const instance: DataLayer = new DataLayer();

        const value = 'test';
        instance.push({ event: 'test', value: value });
        expect(window.dataLayer).toEqual([
            { ecommerce: null },
            { event: 'test', value: value }
        ]);
    });
});
