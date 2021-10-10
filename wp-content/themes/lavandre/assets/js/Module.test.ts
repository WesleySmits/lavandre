import App from './app';
import EventEmitter from './common/EventEmitter';
jest.mock('@lavandre/button/dist/src/lavandre-button');

describe('Test app module', () => {
    it('should load components', () => {
        const app = new App();
        app.initialize();
    });

    it('should load components', () => {
        const app: any = new App();
        const spy = jest.spyOn(app, 'initializeComponents');
        expect(spy).toHaveBeenCalledTimes(0);

        app.initialize();
        expect(spy).toHaveBeenCalledTimes(1);

        EventEmitter.emit('template-instantiated');
        expect(spy).toHaveBeenCalledTimes(2);
    });
});
