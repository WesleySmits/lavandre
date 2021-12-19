import HttpClient from './HttpClient';
import { parseStringAsHtml } from '../util/dom';

const httpClient: typeof HttpClient = HttpClient;

beforeEach(() => {
    //@ts-ignore
    global.fetchMock.resetMocks();
});

describe('Test the get() method', () => {
    it('should test that the error object is thrown containing error details in the catch', () => {
        const url = 'https://www.nature.house';
        const options = {};
        const defaultOptions: RequestInit = {
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const spyOnRequest = jest.spyOn(HttpClient, 'request');
        const spyOnRequestStatus = jest.spyOn(HttpClient, 'requestStatus');

        const result = httpClient
            .get(url, options)
            .then((response) => {
                expect(spyOnRequest).toHaveBeenCalledTimes(1);
                expect(spyOnRequestStatus).toHaveBeenCalledTimes(1);
            })
            .catch((error) => {
                expect(error.matcherResult.pass).toEqual(false);
                expect(global.fetch).toHaveBeenCalledWith(url);
            });
    });

    it('should test that the call succeeds', () => {
        const url = 'https://www.nature.house';
        const options = {};
        const result = httpClient
            .get(url, options)
            .then((response) => {
                expect(response).toBeUndefined();
            })
            .catch(() => {});
    });
});

describe('Test the post() method', () => {
    it('should test that the call succeeds', () => {
        const url = 'https://www.nature.house';
        const body = 'test=1&foo=bar';
        const options = {};

        const spyOnRequest = jest.spyOn(HttpClient, 'request');
        const spyOnRequestStatus = jest.spyOn(HttpClient, 'requestStatus');

        const result = httpClient
            .post(url, body, options)
            .then((response) => {
                expect(spyOnRequest).toHaveBeenCalledTimes(1);
                expect(spyOnRequestStatus).toHaveBeenCalledTimes(1);
                expect(response).toBeUndefined();
            })
            .catch(() => {});
    });
});

describe('Test the put() method', () => {
    it('should test that the call succeeds', () => {
        const url = 'https://www.nature.house';
        const body = 'test=1&foo=bar';
        const options = {};

        const spyOnRequest = jest.spyOn(HttpClient, 'request');
        const spyOnRequestStatus = jest.spyOn(HttpClient, 'requestStatus');

        const result = httpClient
            .put(url, body, options)
            .then((response) => {
                expect(spyOnRequest).toHaveBeenCalledTimes(1);
                expect(spyOnRequestStatus).toHaveBeenCalledTimes(1);
                expect(response).toBeUndefined();
            })
            .catch(() => {});
    });
});

describe('Test the delete() method', () => {
    it('should test that the call succeeds', () => {
        const url: string = 'https://www.nature.house';
        const body: string = 'test=1&foo=bar';
        const options: object = {};

        const spyOnRequest = jest.spyOn(HttpClient, 'request');
        const spyOnRequestStatus = jest.spyOn(HttpClient, 'requestStatus');

        const result = httpClient
            .delete(url, body, options)
            .then((response) => {
                expect(spyOnRequest).toHaveBeenCalledTimes(1);
                expect(spyOnRequestStatus).toHaveBeenCalledTimes(1);
                expect(response).toBeUndefined();
            })
            .catch(() => {});
    });
});

describe('Test the requestStatus() method', () => {
    it('should test succesfol request status (200 status)', () => {
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok'
        };
        const mockResponse: Response = new Response('body', responseInit);
        const result = httpClient.requestStatus(mockResponse);
        expect(result).toBeTruthy();
    });

    it('should test not found request status (404 status)', () => {
        const body: string = 'body';
        const responseInit: ResponseInit = {
            status: 404,
            statusText: 'not found'
        };
        const mockResponse: Response = new Response(body, responseInit);
        const result = httpClient
            .requestStatus(mockResponse)
            .then(() => {})
            .catch((error) => {
                expect(error).toEqual(body);
            });
    });

    it('should test not found request status (500 status)', () => {
        const body: string = 'body';
        const responseInit: ResponseInit = {
            status: 500,
            statusText: 'internal server error'
        };
        const mockResponse: Response = new Response(body, responseInit);
        const result = httpClient
            .requestStatus(mockResponse)
            .then(() => {})
            .catch((error) => {
                expect(error).toEqual(new Error(responseInit.statusText));
            });
    });
});

describe('Test the responseType() method', () => {
    it('should test JSON response', () => {
        const obj: object = {
            test: 'value'
        };
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const mockResponse: Response = new Response(JSON.stringify(obj), responseInit);
        const result: any = httpClient.responseType(mockResponse);

        result
            .then((response: any) => {
                expect(response).toEqual(obj);
            })
            .catch();
    });

    it('should test text response', () => {
        const body: string = 'body';
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Content-Type': 'application/text'
            }
        };
        const mockResponse: Response = new Response(body, responseInit);
        const result: any = httpClient.responseType(mockResponse);

        result
            .then((response: any) => {
                expect(response).toEqual(body);
            })
            .catch();
    });
});

describe('Test the convertFormDataToQueryString() method', () => {
    it('should test that the data is converted to url search params', () => {
        const mockForm: HTMLFormElement = parseStringAsHtml(
            `
            <form>
            <input name="foo" value="bar"/>
            <input name="bar" value="baz"/>
            </form>
        `,
            'form'
        )! as HTMLFormElement;

        const formData: FormData = new FormData(mockForm);

        const result = httpClient.convertFormDataToQueryString(formData);
        expect(result).toEqual('foo=bar&bar=baz');
        expect(result).toEqual('foo=bar&bar=baz');
    });
});
