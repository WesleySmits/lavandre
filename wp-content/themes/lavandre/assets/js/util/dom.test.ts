import { parseStringAsHtml } from './dom';

describe('Test the parseStringAsHtml method', () => {
    it('it should return HTML based on a string', () => {
        const stringResponse: string = '<p>Estamos ubicados en el</p>';
        expect(typeof parseStringAsHtml(stringResponse)).toEqual('object');
    });
});
