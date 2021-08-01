import Component from "../common/Component";
import DataLayer from "../common/DataLayer";
import { sendAjaxRequest } from "../util/requests";
import { FieldValidation } from "./FieldValidation";

export default class NewsletterSubscribe extends Component {
    private ajaxEndpoint: string = `${window.location.origin}/wp-admin/admin-ajax.php`;

    private form: HTMLFormElement;

    private emailField: HTMLInputElement | null;

    private dataLayer: typeof DataLayer = DataLayer;

    constructor(form: HTMLFormElement) {
        super();
        this.form = form;
        this.emailField = this.form.querySelector('[name="email"]');
    }

    public initialize(): void {
        if (!this.isValid()) {
            throw new Error('Newsletter subscribe component not valid');
        }

        this.setEventListeners();
    }

    private setEventListeners() {
        const validator: FieldValidation = new FieldValidation(this.emailField!);
        validator.initialize();

        this.form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const formData: FormData = new FormData(this.form);
            const firstName: string = formData.get('first-name')?.toString() || '';
            const companyName: string = formData.get('company-name')?.toString() || '';
            const email: string = formData.get('email')?.toString() || '';

            if (!email) {
                return;
            }

            const data = {
                action: 'mailchimpsubscribe',
				'email': email,
				'firstName': firstName,
				'companyName': companyName
            };

            FieldValidation.removeErrorText(this.emailField!);
            sendAjaxRequest(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
        });
    }

    private isValid(): boolean {
        if (
            !this.form
            || !this.emailField
        ) {
            return false;
        }

        return true;
    }

    private onSuccess(response: ajaxResponse, event?: Event) {
        FieldValidation.appendSuccessText(this.emailField!, response.data.toString());
        this.emailField!.value = '';

        const data: GoogleAnalyticsEvent = {
            event: 'GAEvent',
            eventCategory: 'newsletter',
            eventAction: 'subscribe',
            eventLabel: this.form.id || 'generic'
        };

        this.dataLayer.push(data);
    }

    private onFailure(error: Error) {
        FieldValidation.appendErrorText(this.emailField!, error.message);
        throw error;
    }

    public static onInit(selector: Document | HTMLElement = document): void {
        // #TODO: Switch to common selector
        const forms: HTMLFormElement[] = Array.from(selector.querySelectorAll('#footer-newsletter-form, #homepage-newsletter-form, #ajax-newsletter-form'));

        for (let index = 0; index < forms.length; index++) {
            const form = forms[index];
            const newsletterSubscribe: NewsletterSubscribe = new NewsletterSubscribe(form);
            newsletterSubscribe.initialize();
        }
    }
}
