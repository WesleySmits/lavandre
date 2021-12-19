import Component from '../common/Component';

interface iModule {
    components: Component[];
    eventEmitter: EventEmitter;
    initialize(): void;
}
