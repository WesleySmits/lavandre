import Curtain from "./Curtain";

let element: HTMLElement;
let foldButton: HTMLButtonElement;

beforeEach(() => {
    element = document.createElement('div');
    foldButton = document.createElement('button');
});

const invalidContext = () => ({
    element: '',
    foldButton: ''
});

const validContext = () => ({
    element: element,
    foldButton: foldButton
});

const component = (context: any): Curtain => {
    const instance: any = new Curtain(context.element, context.foldButton);
    return instance;
}

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
