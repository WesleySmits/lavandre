import Component from './common/Component';
import StickyHeader from './components/StickyHeader';
import Module from './Module';

export default class RewardsModule extends Module {
    public components: Component[] = [StickyHeader];

    public initialize() {
        super.initialize();
    }
}

(function rewardsInit() {
    const rewardsModule = new RewardsModule();
    rewardsModule.initialize();
})();
