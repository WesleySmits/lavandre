import { parseStringAsHtml } from "../util/dom";
import SidePanel from "./SidePanel";

jest.useFakeTimers();

let instance: SidePanel;
let context: any;

const invalidContext = () => ({
    element: ''
});

const validContext = () => ({
    element: parseStringAsHtml(`
    <dialog>
        <button type="button" class="side-panel__close"></button>
    </dialog>
`, 'dialog')
});

describe('Test the SidePanel class', () => {
    beforeEach(() => {
        context = validContext();
        document.body.appendChild(context.element);

        instance = new SidePanel(context.element);
        instance.initialize();
    });

    afterEach(() => {
        document.body.removeChild(context.element);
    });

    it('should toggle on toggle event', () => {
        expect(context.element.open).toEqual(false);

        context.element.dispatchEvent(new Event('toggle'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(true);

        context.element.dispatchEvent(new Event('toggle'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(false);
    });

    it('should close properly on close button click', () => {
        expect(context.element.open).toEqual(false);

        context.element.dispatchEvent(new Event('toggle'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(true);

        const button = context.element.querySelector('.side-panel__close');
        button.dispatchEvent(new Event('click'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(false);
    });
});

describe('Test the SidePanel class', () => {
    it('should close properly when clicking outside of element', () => {
        const context: any = validContext();
        document.body.appendChild(context.element);
        const instance: any = new SidePanel(context.element);
        instance.initialize();
        document.body.addEventListener('click', instance.outsideClick.bind(instance));

        expect(context.element.open).toEqual(false);

        context.element.dispatchEvent(new Event('toggle'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(true);

        document.body.dispatchEvent(new Event('click'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(false);
    });

    it('should close properly when clicking on the element', () => {
        const context: any = validContext();
        document.body.appendChild(context.element);
        const instance: any = new SidePanel(context.element);
        instance.initialize();

        expect(context.element.open).toEqual(false);

        context.element.dispatchEvent(new Event('toggle'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(true);

        context.element.dispatchEvent(new Event('click'));
        jest.runAllTimers();
        expect(context.element.open).toEqual(false);
    });
});
