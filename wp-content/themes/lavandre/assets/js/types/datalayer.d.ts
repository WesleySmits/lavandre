type dataLayer = StandardObjectInterface & {
    event?: string
};

type GoogleAnalyticsEvent = dataLayer & {
    eventCategory?: string,
    eventAction?: string,
    eventLabel?: string,
    eventValue?: number,
    method?: string,
};

type GoogleAnalyticsProduct = {
    item_id: string;
    item_name: string;
    item_category?: string;
    item_variant: string;
    price: Number;
    item_brand: string;
    item_list_name?: string;
    item_list_id?: string;
    position?: number;
    quantity?: 1;
};

type GoogleAnalyticsProductDetailViewEvent = {
    event: string,
    ecommerce: {
        items: GoogleAnalyticsProduct[]
    }
}

