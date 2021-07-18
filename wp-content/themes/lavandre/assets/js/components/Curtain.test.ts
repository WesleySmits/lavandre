import { parseStringAsHtml } from "../util/dom";
import Curtain from "./Curtain";

jest.useFakeTimers();

let element: HTMLElement;
let foldButton: HTMLButtonElement;

beforeEach(() => {
    element = document.createElement('div');
    foldButton = document.createElement('button');
});

const invalidContext = () => ({
    element: '',
    foldButton: '',
});

const validContext = () => ({
    element: element,
    foldButton: foldButton
});

const mobileValidContext = () => ({
    element: element,
    foldButton: foldButton,
    onlyOnMobile: true
});

const component = (context: any): Curtain => {
    const instance: any = new Curtain(context.element, context.foldButton, context.onlyOnMobile);
    return instance;
}

describe('Test creation', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should fail because content is missing', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div data-curtain>
                <button data-curtain-toggle="curtain">Toggle...</button>
            </div>
        `, '[data-curtain]');

        document.body.appendChild(element);

        Curtain.onInit();
    });

    it('should create instance', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div data-curtain>
                <button data-curtain-toggle="curtain">Toggle...</button>
                <p data-curtain-content="curtain">Content...</p>
            </div>
        `, '[data-curtain]');

        document.body.appendChild(element);

        Curtain.onInit();
    });
});

describe('Test initialize method', () => {
    it('should do nothing if component is not valid', () => {
        const instance: any = component(invalidContext());
        const spyOnSetEventListeners = jest.spyOn(instance, 'setEventListeners');
        instance.initialize();

        expect(spyOnSetEventListeners).toHaveBeenCalledTimes(0);
    });

    it('should set event listeners if component is valid', () => {
        const instance: any = component(validContext());
        const spyOnSetEventListeners = jest.spyOn(instance, 'setEventListeners');
        instance.initialize();

        expect(spyOnSetEventListeners).toHaveBeenCalledTimes(1);
    });

    it('should not set a click listener if onlyOnMobile is set on a larger screen', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1920 });

        const context = mobileValidContext();
        const element = context.foldButton;

        document.body.appendChild(element);

        const instance: Curtain = component(context);
        instance.initialize();

        element.dispatchEvent(new Event('click'));
        expect(element.classList.contains('active')).toBeFalsy();
    });

    it('should not set a click listener if onlyOnMobile is set on a larger screen', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 414 });

        const context = mobileValidContext();
        const element = context.foldButton;

        document.body.appendChild(element);

        const instance: Curtain = component(context);
        instance.initialize();

        element.dispatchEvent(new Event('click'));
        expect(element.classList.contains('active')).toBeTruthy();
    });

    it('should fallback to a default value of 0px', () => {
        const context = validContext();
        const instance: any = component(context);
        expect(instance.defaultHeight).toEqual('0px');
    });

    it('should not set a click listener if onlyOnMobile is set on a larger screen', () => {
        const context = validContext();
        const element = context.foldButton;

        document.body.appendChild(element);

        const instance: any = component(context);
        instance.initialize();

        element.dispatchEvent(new Event('click'));
        jest.runAllTimers();
        expect(instance.element.style.maxHeight).toEqual(`${element.scrollHeight}px`);

        element.dispatchEvent(new Event('click'));
        jest.runAllTimers();
        expect(instance.element.style.maxHeight).toEqual(`${instance.defaultHeight}`);
    });
});

describe('Test setEventListeners method', () => {
    it('should fire click event on button and set active classes', () => {
        const instance: any = component(validContext());
        instance.initialize();

        instance.foldButton.dispatchEvent(new Event('click'));

        expect(instance.element.classList.contains('active')).toBeTruthy();
        expect(instance.foldButton.classList.contains('active')).toBeTruthy();
    });

    it('should do nothing with only readLess text', () => {
        const instance: any = component(validContext());
        instance.initialize();

        instance.foldButton.dataset.readLess = 'Read less';
        instance.foldButton.dispatchEvent(new Event('click'));

        expect(instance.element.classList.contains('active')).toBeTruthy();
        expect(instance.foldButton.classList.contains('active')).toBeTruthy();
    });

    it('should set innerText of button to "Read more" if texts are set', () => {
        const instance: any = component(validContext());
        instance.initialize();

        instance.foldButton.dataset.readLess = 'Read less';
        instance.foldButton.dataset.readMore = 'Read more';
        instance.foldButton.dispatchEvent(new Event('click'));

        expect(instance.foldButton.innerText).toEqual('Read more');
    });

    it('should set innerText of button to "Read less" if texts are set', () => {
        const instance: any = component(validContext());
        instance.initialize();

        instance.foldButton.dataset.readLess = 'Read less';
        instance.foldButton.dataset.readMore = 'Read more';
        instance.foldButton.dispatchEvent(new Event('click'));
        instance.foldButton.dispatchEvent(new Event('click'));

        expect(instance.foldButton.innerText).toEqual('Read less');
    });
});
