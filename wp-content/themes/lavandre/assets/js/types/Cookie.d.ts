type CookieOptions = StandardObjectInterface & {
    'path'?: string;
    'domain'?: string;
    'expires'?: string;
    'max-age'?: number;
    'secure'?: boolean;
    'samesite'?: string;
};
