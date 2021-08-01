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
        <button type="button" data-close class="side-panel__close"></button>
    </dialog>
`, 'dialog')
});

describe('Test creation', () => {
    beforeAll(() => {
        // @ts-ignore
        delete window.location;
        // @ts-ignore
        window.location = { href: jest.fn().mockResolvedValue('test') };
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should redirect on my account panel link', () => {
    const element: HTMLElement = parseStringAsHtml(`
            <div>
                <a href="/?test=test" data-panel="my-account-panel">Text</button>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.classList.add('logged-in');
        document.body.querySelector('a')?.dispatchEvent(new Event('click'));
        // expect(window.location.href).toBe('http://localhost/?test=test');

    });

    it('should fail without a template', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div>
                <button data-panel="test">Text</button>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.querySelector('button')?.dispatchEvent(new Event('click'));
    });

    it('should fail without a dialog', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div>
                <button data-panel="test">Text</button>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.querySelector('button')?.dispatchEvent(new Event('click'));
    });

    it('should fail without a dialog', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div>
                <button data-panel="test">Text</button>

                <template data-panel-template="test"></template>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.querySelector('button')?.dispatchEvent(new Event('click'));
    });

    it('should redirect to link if template is missing', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div>
                <a href="/?test=test" data-panel="test">Text</button>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.querySelector('a')?.dispatchEvent(new Event('click'));
        // expect(window.location.href).toBe('http://localhost/?test=test');
    });

    it('should create and display a sidepanel', () => {
        const element: HTMLElement = parseStringAsHtml(`
            <div>
                <button data-panel="test">Text</button>

                <template data-panel-template="test">
                    <dialog data-panel-name="test">Text</dialog>
                </template>
            </div>
        `, 'div');

        document.body.appendChild(element);

        SidePanel.onInit();
        document.body.querySelector('button')?.dispatchEvent(new Event('click'));
    });
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

        const button = context.element.querySelector('[data-close]');
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
        instance._transitionTime = 100;
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
