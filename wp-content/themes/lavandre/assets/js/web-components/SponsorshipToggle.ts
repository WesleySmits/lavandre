import LavandreToggle from './LavandreToggle';

export default class SponsorshipToggle extends LavandreToggle {
    #message: HTMLElement | null = null;

    #timeout: number | null = null;

    #timeoutDuration: number = 150;

    protected connectedCallback(): void {
        super.connectedCallback();

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

window.customElements.define('sponsorship-toggle', SponsorshipToggle);
