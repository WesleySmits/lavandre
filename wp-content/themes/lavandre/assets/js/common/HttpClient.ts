class HttpClient {
    /**
     * Performs a GET request to the specified URL
     */
    get(url: string, options?: RequestInit): Promise<Response> {
        return this.request(url, options);
    }

    /**
     * Performs a POST request to the specified URL
     */
    post(url: string, data?: BodyInit, options?: RequestInit): Promise<Response> {
        const defaultOptions: RequestInit = {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        return this.request(url, requestOptions);
    }

    /**
     * Performs a PUT request to the specified URL
     */
    put(url: string, data?: BodyInit, options?: RequestInit): Promise<Response> {
        const defaultOptions: RequestInit = {
            method: 'put',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        return this.request(url, requestOptions);
    }

    /**
     * Performs a DELETE request to the specified URL
     */
    delete(url: string, data?: BodyInit, options?: RequestInit): Promise<Response> {
        const defaultOptions: RequestInit = {
            method: 'delete',
            body: data
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        return this.request(url, requestOptions);
    }

    /**
     * Internal method which invokes the fetch API and returns a promise.
     */
    request(url: string, options?: RequestInit): Promise<Response> {
        const defaultOptions: RequestInit = {
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        return fetch(url, requestOptions).then(this.requestStatus).then(this.responseType);
    }

    /**
     * Checks the response statusCode and returns the correct value
     */
    requestStatus(response: Response): Promise<Response> {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        if (response.status >= 400 && response.status < 500) {
            return response.text().then((text) => Promise.reject(text));
        }

        return Promise.reject(new Error(response.statusText));
    }

    /**
     * Converts Promise response to contentType based on header
     */
    responseType(response: Response): Promise<string> | Promise<any> {
        const contentType: string | null = response.headers.get('content-type');

        if (contentType !== null && contentType.indexOf('application/json') !== -1) {
            return response.json();
        }

        return response.text();
    }

    /**
     * Converts a FormData object into a URLSearchParams string
     */
    convertFormDataToQueryString(data: FormData): string {
        return new URLSearchParams(data as any).toString();
    }
}

const httpClientInstance: HttpClient = new HttpClient();
export default httpClientInstance;
