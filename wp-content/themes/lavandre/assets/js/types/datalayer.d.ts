type dataLayer = StandardObjectInterface & {
    event: string
};

type GoogleAnalyticsEvent = dataLayer & {
    eventCategory?: string,
    eventAction?: string,
    eventLabel?: string,
    eventValue?: number
};

