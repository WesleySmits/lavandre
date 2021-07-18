import httpClientInstance from "../common/HttpClient";

export function sendAjaxRequest(data: requestData, endpoint: string, loadingElement: HTMLElement | null, onSuccess: Function, onFailure?: Function, event?: Event, button?: HTMLButtonElement) {
    const httpClient: typeof httpClientInstance = httpClientInstance;

    const options: RequestInit = {
        method: 'post',
        body: new URLSearchParams(data).toString(),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };

    if (loadingElement) addLoadingState(loadingElement);
    if (button) setButtonLoadingState(button);

    httpClient.post(endpoint, '', options).then((response: any) => new Promise(() => {
        const ajaxResponse: ajaxResponse = response as ajaxResponse;
        const data = ajaxResponse.data as unknown;

        onSuccess(ajaxResponse, event);
        if (loadingElement) removeLoadingState(loadingElement);
        if (button) removeButtonLoadingState(button);
    })).catch((error: Error) => {
        console.error(error);
        if (loadingElement) removeLoadingState(loadingElement);
        if (button) removeButtonLoadingState(button);
        if (onFailure) onFailure(error);
    });
}

export function addLoadingState(item: HTMLElement): void {
    if (!item) {
        return;
    }

    item.classList.add('custom-cart__item--loading');

    const loader: HTMLElement = document.createElement('DIV');
    loader.classList.add('ww-loader');
    item.appendChild(loader);
}

export function removeLoadingState(item: HTMLElement): void {
    if (!item) {
        return;
    }

    item.classList.remove('custom-cart__item--loading');

    const loader: HTMLElement | null = item.querySelector('.ww-loader');
    if (loader) {
        loader.parentElement!.removeChild(loader);
    }
}

export function setButtonLoadingState(button: HTMLButtonElement) {
    button.disabled = true;
    button.classList.add('cta-button--loading');
}

export function removeButtonLoadingState(button: HTMLButtonElement) {
    button.disabled = false;
    button.classList.remove('cta-button--loading');
}
