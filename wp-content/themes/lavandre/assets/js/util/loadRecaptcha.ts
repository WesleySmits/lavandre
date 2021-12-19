let loaded = false;
export const sitekey = '6Ldv2RkcAAAAABCCL1JR5DlmEET4Ny_2CmkVa8Nv';

export function loadRecaptcha(elements: HTMLElement[]): void {
    loopThroughElements(elements, true, () => {
        insertRecaptchaScript(elements);
    });
}

function insertRecaptchaScript(elements: HTMLElement[]) {
    if (!loaded) {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
        head.appendChild(script);
        loaded = true;
    }

    loopThroughElements(elements, false, () => {
        insertRecaptchaScript(elements);
    });
}

function loopThroughElements(elements: HTMLElement[], addEvent: boolean, callback: EventListener) {
    for (let i = 0; i < elements.length; i++) {
        ['focus', 'click', 'touchend', 'blur', 'input', 'change', 'propertychange'].forEach(
            (evt) => {
                if (addEvent) {
                    elements[i].addEventListener(evt, callback);
                } else {
                    elements[i].removeEventListener(evt, callback);
                }
            }
        );
    }
}
