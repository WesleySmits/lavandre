import Component from './common/Component';
import StickyHeader from './components/StickyHeader';
import Module from './Module';

export default class RewardsModule extends Module {
    public components: Component[] = [StickyHeader];

    #message: HTMLElement | null = null;

    #timeout: number | null = null;

    #timeoutDuration: number = 150;

    public initialize() {
        super.initialize();
        this.#referAFriend();
    }

    #referAFriend() {
        this.#message = document.querySelector('.lws_woorewards_sponsorship_feedback');
        if (this.#message === null) {
            return;
        }

        const mutationObserver = new MutationObserver(this.#referAFriendCallback.bind(this));
        mutationObserver.observe(this.#message, { attributes: true });
    }

    #referAFriendCallback(mutationsList: MutationRecord[]) {
        mutationsList.forEach((mutation) => {
            if (mutation.attributeName === 'class' && this.#message) {
                if (this.#message.classList.contains('lws_woorewards_sponsorship_succeed')) {
                    if (this.#timeout !== null) {
                        window.clearTimeout(this.#timeout);
                    }

                    this.#timeout = window.setTimeout(() => {
                        this.#message!.closest('lavandre-toggle')?.dispatchEvent(
                            new Event('toggle')
                        );
                    }, this.#timeoutDuration);
                }
            }
        });
    }
}

(function rewardsInit() {
    const rewardsModule = new RewardsModule();
    rewardsModule.initialize();
})();
