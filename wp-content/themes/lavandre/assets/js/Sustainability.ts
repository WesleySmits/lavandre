import Component from './common/Component';
import Module from './Module';
import StickyHeader from './components/StickyHeader';

export default class SustainabilityModule extends Module {
    public components: Component[] = [
        StickyHeader
    ];

    public initialize() {
        super.initialize();
    }
}

(function sustainabilityInit() {
    const sustainabilityModule = new SustainabilityModule();
    sustainabilityModule.initialize();
})();
