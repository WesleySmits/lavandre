import '../css/pages/checkout.pcss';

import Component from './common/Component';
import Module from './Module';
import StickyHeader from './components/StickyHeader';

export default class HomeModule extends Module {

    public components: Component[] = [
        StickyHeader
    ];

    public initialize() {
        super.initialize();
    }
}

(function homeInit() {
    const homeModule = new HomeModule();
    homeModule.initialize();
})();
