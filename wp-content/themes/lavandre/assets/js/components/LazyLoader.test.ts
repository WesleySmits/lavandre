import { parseStringAsHtml } from "../util/dom";
import LazyLoader from "./LazyLoader";

let instance: LazyLoader;
let context: any;

const mockSrc: string = 'https://www.image.com/';
const mockSrcSet: string = `${mockSrc} 100w`;
const mockSizes: string = '100vw';

let entries: IntersectionObserverEntry[] = [];
const observe = jest.fn();
const unobserve = jest.fn();

const invalidContext = () => ({
    element: ''
});

const validImgContext = () => ({
    element: parseStringAsHtml(`
        <img data-src="${mockSrc}" data-srcset="${mockSrcSet}" data-sizes="${mockSizes}" data-lazyload/>
`, 'img')
});

const invalidPictureContext = () => ({
    element: parseStringAsHtml(`
        <picture class="loading-spinner" data-lazyload>
            <source type="image/jpeg" data-srcset="${mockSrcSet}">
        </picture>
`, 'picture')
});

const validPictureContext = () => ({
    element: parseStringAsHtml(`
        <picture class="loading-spinner" data-lazyload>
            <source type="image/jpeg" data-srcset="${mockSrcSet}">
            <img data-src="${mockSrc}" data-srcset="${mockSrcSet}" data-sizes="${mockSizes}"/>
        </picture>
`, 'picture')
});

const validDivContext = () => ({
    element: parseStringAsHtml(`
        <div data-lazyload>
            <img data-src="${mockSrc}" data-srcset="${mockSrcSet}" data-sizes="${mockSizes}" data-lazyload/>
        </div>
`, 'div')
});

describe('Test the lazyloader class', () => {

    describe('Test that image elements are lazyloaded correctly', () => {
        beforeEach(() => {
            context = invalidContext();
            instance = new LazyLoader(context.element);
        });

        it('should do nothing if no element was passed in', () => {
            const spyOnInitialize = jest.spyOn(instance, 'initialize');
            expect(spyOnInitialize).toHaveBeenCalledTimes(0);
        });
    });

    describe('Test that image elements are lazyloaded correctly', () => {
        beforeEach(() => {
            context = validImgContext();
            document.body.appendChild(context.element);

            instance = new LazyLoader(context.element);
        });

        it('should set image attributes correctly', () => {
            const imgElement: HTMLImageElement = document.querySelector('img[data-lazyload]')! as HTMLImageElement;
            expect(imgElement.src).toEqual(mockSrc);
            expect(imgElement.srcset).toEqual(mockSrcSet);
            expect(imgElement.sizes).toEqual(mockSizes);
            expect(imgElement.classList.contains('loading')).toBeFalsy();
            expect(imgElement.classList.contains('loaded')).toBeTruthy();
        });
    });

    describe('Test that HTML container elements are lazyloaded correctly', () => {
        beforeEach(() => {
            context = validDivContext();
            document.body.appendChild(context.element);
            instance = new LazyLoader(context.element);
        });

        it('should set image attributes within HTML container correctly', () => {
            const imgElement: HTMLImageElement = document.querySelector('img[data-lazyload]')! as HTMLImageElement;
            expect(imgElement.src).toEqual(mockSrc);
            expect(imgElement.srcset).toEqual(mockSrcSet);
            expect(imgElement.sizes).toEqual(mockSizes);
            expect(imgElement.classList.contains('loading')).toBeFalsy();
            expect(imgElement.classList.contains('loaded')).toBeTruthy();
        });
    });

    describe('Test that LazyLoader initializes itself properly', () => {
        beforeEach(() => {
            context = validDivContext();
            document.body.appendChild(context.element);
            window.dispatchEvent(new Event('load'));
        });

        it('should set image attributes within HTML container correctly 2', () => {
            const imgElement: HTMLImageElement = document.querySelector('img[data-lazyload]')! as HTMLImageElement;
            expect(imgElement.src).toEqual(mockSrc);
            expect(imgElement.srcset).toEqual(mockSrcSet);
            expect(imgElement.sizes).toEqual(mockSizes);
            expect(imgElement.classList.contains('loading')).toBeFalsy();
            expect(imgElement.classList.contains('loaded')).toBeTruthy();
        });
    });

    describe('Test that picture elements are lazyloaded correctly', () => {
        beforeEach(() => {
            context = validPictureContext();
            document.body.appendChild(context.element);

            instance = new LazyLoader(context.element);
        });

        it('should set picture attributes correctly', () => {
            const pictureElement: HTMLPictureElement = document.querySelector('picture[data-lazyload]')! as HTMLPictureElement;
            const sourceElement: HTMLSourceElement = pictureElement.querySelector('source')! as HTMLSourceElement;
            const imgElement: HTMLImageElement = pictureElement.querySelector('img')! as HTMLImageElement;

            // Test picture element
            expect(pictureElement.classList.contains('loading-spinner')).toBeFalsy();

            // Test source element
            expect(sourceElement.srcset).toEqual(mockSrcSet);

            // Test image element
            expect(imgElement.src).toEqual(mockSrc);
            expect(imgElement.srcset).toEqual(mockSrcSet);
            expect(imgElement.sizes).toEqual(mockSizes);
            expect(imgElement.classList.contains('loading')).toBeFalsy();
            expect(imgElement.classList.contains('loaded')).toBeTruthy();
        });
    });

    describe('Test that picture elements are lazyloaded correctly with incorrect config', () => {
        beforeEach(() => {
            context = invalidPictureContext();
            document.body.appendChild(context.element);

            instance = new LazyLoader(context.element);
        });

        it('should failt due to the missing img tag', () => {
            const pictureElement: HTMLPictureElement = document.querySelector('picture[data-lazyload]')! as HTMLPictureElement;
            const sourceElement: HTMLSourceElement = pictureElement.querySelector('source')! as HTMLSourceElement;
            const imgElement: HTMLImageElement = pictureElement.querySelector('img')! as HTMLImageElement;

            // Test picture element
            expect(pictureElement.classList.contains('loading-spinner')).toBeTruthy();

            // Test source element
            expect(sourceElement.srcset).not.toEqual(mockSrcSet);

            // Test image element
            expect(imgElement).toBeFalsy();
        });
    });

    describe('Test that intersection observer works', () => {
        beforeEach(() => {
            // @ts-ignore
            class MockObserver {
                constructor(fn: Function) {
                    context = validImgContext();

                    const entry: IntersectionObserverEntry = {
                        isIntersecting: true,
                        target: context.element,
                        boundingClientRect: context.element.getBoundingClientRect(),
                        intersectionRatio: 0,
                        intersectionRect: context.element.getBoundingClientRect(),
                        rootBounds: null,
                        time: 0
                    }

                    entries.push(entry);
                    fn(entries, this);
                }

                observe(element: HTMLElement) { observe(element) }
                unobserve(element: HTMLElement) { unobserve(element) }
                disconnect() {}
            }

            // @ts-ignore
            window.IntersectionObserver = MockObserver;
        });

        it('should set image attributes correctly', () => {
            context = validImgContext();
            document.body.appendChild(context.element);
            instance = new LazyLoader(context.element);

            const img = validImgContext().element;
            expect(observe).toHaveBeenCalledWith(img);
        });

        it('should set picture attributes correctly', () => {
            context = validPictureContext();
            document.body.appendChild(context.element);
            instance = new LazyLoader(context.element);

            expect(observe).toHaveBeenCalled();
        });
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });
});
