import fetchMock, { MockResponseInitFunction } from 'jest-fetch-mock';
import HttpClient from '../common/HttpClient';
import { parseStringAsHtml } from './dom';
import {
    addLoadingState,
    removeButtonLoadingState,
    removeLoadingState,
    sendAjaxRequest,
    setButtonLoadingState
} from './requests';

describe('Test sendAjaxRequest', () => {
    it('should fail request', () => {
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok'
        };

        const loadingElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        const httpClient: typeof HttpClient = HttpClient;

        // @ts-ignore
        const mockResponse: Response = new Response({ success: false, data: {} }, responseInit);

        const mockPost = jest.fn(httpClient.post);
        mockPost.mockResolvedValue(mockResponse);

        // @ts-ignore
        fetchMock.mockResponse(() => {
            return Promise.reject(mockResponse);
        });

        const data = {
            action: 'action'
        };

        sendAjaxRequest(
            data,
            '/',
            loadingElement,
            () => {},
            () => {},
            undefined,
            buttonElement
        );
    });

    it('should succeed in request', () => {
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok'
        };
        const loadingElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        const httpClient: typeof HttpClient = HttpClient;

        // @ts-ignore
        const mockResponse: Response = new Response('body', responseInit);

        const mockPost = jest.fn(httpClient.post);
        mockPost.mockResolvedValue(mockResponse);

        // @ts-ignore
        fetchMock.mockResponse(() => {
            return Promise.resolve(mockResponse);
        });

        const data = {
            action: 'action'
        };

        sendAjaxRequest(
            data,
            '/',
            loadingElement,
            () => {},
            () => {},
            undefined,
            buttonElement
        );
    });
});

describe('Test loading state', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail to set and remove loading state', () => {
        const element: HTMLButtonElement = parseStringAsHtml(
            `
            <button></button>
        `,
            'button'
        ) as HTMLButtonElement;

        document.body.appendChild(element);

        setButtonLoadingState(element);
        expect(element.hasAttribute('loading')).toBeTruthy();
        expect(element.disabled).toBeTruthy();

        removeButtonLoadingState(element);
        expect(element.hasAttribute('loading')).toBeFalsy();
        expect(element.disabled).toBeFalsy();
    });
});

describe('Test loading state', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail to set and remove loading state', () => {
        const element = parseStringAsHtml(
            `
            <div></div>
        `,
            'div'
        );

        document.body.appendChild(element);

        // @ts-ignore
        addLoadingState();

        // @ts-ignore
        removeLoadingState();
    });

    it('should set loading state', () => {
        const element = parseStringAsHtml(
            `
            <div></div>
        `,
            'div'
        );

        document.body.appendChild(element);

        addLoadingState(element);
        expect(element.classList.contains('custom-cart__item--loading')).toBeTruthy();
    });
    it('should remove loading state', () => {
        const element = parseStringAsHtml(
            `
            <div></div>
        `,
            'div'
        );

        document.body.appendChild(element);

        addLoadingState(element);
        expect(element.classList.contains('custom-cart__item--loading')).toBeTruthy();

        removeLoadingState(element);
        expect(element.classList.contains('custom-cart__item--loading')).toBeFalsy();
    });
});
