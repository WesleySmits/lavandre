import { parseStringAsHtml } from "./dom";
import { setCurrentLinkClass } from "./links";

describe('Test link utils', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should set current link on homepage link', () => {
        const element = parseStringAsHtml(`
            <nav>
                <a href="/">test</a>
            </nav>
        `, 'nav');

        document.body.appendChild(element);

        setCurrentLinkClass();
        expect(document.body.querySelector('a')?.classList.contains('current-link')).toBeTruthy();
    });

    it('should not set current link on other links', () => {
        const element = parseStringAsHtml(`
            <nav>
                <a href="/test">test</a>
            </nav>
        `, 'nav');

        document.body.appendChild(element);

        setCurrentLinkClass();
        expect(document.body.querySelector('a')?.classList.contains('current-link')).toBeFalsy();
    });
});
