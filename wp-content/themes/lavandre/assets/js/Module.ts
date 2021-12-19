/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import './cart';
import Component from './common/Component';
import EventEmitter from './common/EventEmitter';
import { iModule } from './types/module';

export default abstract class Module implements iModule {
    public eventEmitter: EventEmitter = EventEmitter;

    public abstract components: Component[];

    public initialize(): void {
        this.initializeComponents();

        this.eventEmitter.on('template-instantiated', (element: HTMLElement) => {
            this.initializeComponents(element);
        });
    }

    protected initializeComponents(selector: Document | HTMLElement = document) {
        this.components.forEach((component: Component) => {
            // @ts-ignore
            component.onInit(selector);
        });
    }
}
