import { parseStringAsHtml } from "../util/dom";
import ChangeVariantPrice from "./ChangeVariantPrice";
import HttpClient from '../common/HttpClient';

let element: HTMLElement;
const flushPromises = () => new Promise(setImmediate);

describe('Test creation', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail because content is missing', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form></form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();
    });

    it('should create instance', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form data-product_id="123">
                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>
            </form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();
    });
});

describe('Test sending request', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail on lack of price elements', async () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form data-product_id="123">
                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>

                <input type="hidden" name="variation_id" value="123">
            </form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radio = radios[radios.length - 1];

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "",
                regularPrice: "20",
                salePrice: "10"
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);
        const mockPromise: Promise<Response> = Promise.resolve(mockResponse);
        HttpClient.post = jest.fn().mockResolvedValue(mockPromise
            .then((response) => Promise.resolve(response))
            .then((response) => response.json()));


        radio!.dispatchEvent(new Event('change'));

        expect(HttpClient.post).toHaveBeenCalledTimes(0);
    });

    it('should fail on lack of form element', async () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div data-product_id="123">
                <div class="product-detail__price">
                    <del><span data-product-price>21.50</span></del>
                    <ins><span data-product-price>17.50</span></ins>
                </div>

                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>

                <input type="hidden" name="variation_id" value="123">
            </div>
        `, 'div');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radio = radios[radios.length - 1];

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "",
                regularPrice: "20",
                salePrice: "10"
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);
        const mockPromise: Promise<Response> = Promise.resolve(mockResponse);
        HttpClient.post = jest.fn().mockResolvedValue(mockPromise
            .then((response) => Promise.resolve(response))
            .then((response) => response.json()));


        radio!.dispatchEvent(new Event('change'));

        expect(HttpClient.post).toHaveBeenCalledTimes(0);
    });

    it('should fail on lack of product id value', async () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form>
                <div class="product-detail__price">
                    <del><span data-product-price>21.50</span></del>
                    <ins><span data-product-price>17.50</span></ins>
                </div>

                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>

                <input type="hidden" name="variation_id" value="123">
            </form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radio = radios[radios.length - 1];

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "",
                regularPrice: "20",
                salePrice: "10"
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);
        const mockPromise: Promise<Response> = Promise.resolve(mockResponse);
        HttpClient.post = jest.fn().mockResolvedValue(mockPromise
            .then((response) => Promise.resolve(response))
            .then((response) => response.json()));


        radio!.dispatchEvent(new Event('change'));

        expect(HttpClient.post).toHaveBeenCalledTimes(0);
    });

    it('should fail on lack of variation id value', async () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form data-product_id="123">
                <div class="product-detail__price">
                    <del><span data-product-price>21.50</span></del>
                    <ins><span data-product-price>17.50</span></ins>
                </div>

                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>
            </form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radio = radios[radios.length - 1];

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "",
                regularPrice: "20",
                salePrice: "10"
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);
        const mockPromise: Promise<Response> = Promise.resolve(mockResponse);
        HttpClient.post = jest.fn().mockResolvedValue(mockPromise
            .then((response) => Promise.resolve(response))
            .then((response) => response.json()));


        radio!.dispatchEvent(new Event('change'));

        expect(HttpClient.post).toHaveBeenCalledTimes(0);
    });

    it('should throw error is call succeeds but no price was given', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form data-product_id="123">
                <div class="product-detail__price">
                    <del><span data-product-price>21.50</span></del>
                    <ins><span data-product-price>17.50</span></ins>
                </div>

                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>

                <input type="hidden" name="variation_id" value="123">
            </form>
        `, 'form');

        document.body.appendChild(element);

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "no prices",
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);

        const instance: any = new ChangeVariantPrice(radios);
        expect(() => { instance.onSuccess(mockResponse); }).toThrow('No data');
    });

    it('should change the price', async () => {
        const element: HTMLElement = parseStringAsHtml(`
            <form data-product_id="123">
                <div class="product-detail__price">
                    <del><span data-product-price>21.50</span></del>
                    <ins><span data-product-price>17.50</span></ins>
                </div>

                <div class="product-detail__variations">
                    <input id="pa_color-white" type="radio" name="attribute_pa_color" value="white" checked required>
                    <input id="pa_color-black" type="radio" name="attribute_pa_color" value="black" required>
                </div>

                <input type="hidden" name="variation_id" value="123">
            </form>
        `, 'form');

        document.body.appendChild(element);

        ChangeVariantPrice.onInit();

        const radios: HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radio = radios[radios.length - 1];

        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'ok',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const mockReturn: StandardObjectInterface = {
            data: {
                message: "",
                regularPrice: "20",
                salePrice: "10"
            },
            success: true
        };

        const bodyInit: BodyInit = JSON.stringify(mockReturn);

        // @ts-ignore
        const mockResponse: Response = new Response(bodyInit, responseInit);
        const mockPromise: Promise<Response> = Promise.resolve(mockResponse);
        HttpClient.post = jest.fn().mockResolvedValue(mockPromise
            .then((response) => Promise.resolve(response))
            .then((response) => response.json()));


        radio!.dispatchEvent(new Event('change'));

        expect(HttpClient.post).toHaveBeenCalledTimes(1);

        await flushPromises();

        const saleElement: HTMLElement | null = document.querySelector('.product-detail__price del [data-product-price]');
        expect(saleElement!.innerText).toEqual(Number(10).toFixed(2));

        const regularPriceElement: HTMLElement | null = document.querySelector('.product-detail__price ins [data-product-price]');
        expect(regularPriceElement!.innerText).toEqual(Number(20).toFixed(2));
    });
});


