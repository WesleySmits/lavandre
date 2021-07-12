export function getCookieValue(name: string): string | null {
    const cookie: string | undefined = document.cookie
        .split('; ')
        .find((row: string) => row.startsWith(name));

    if (cookie === undefined) {
        return null;
    }

    return cookie.split('=')[1];
}

export function setCookieValue(name: string, value: string, options?: CookieOptions) {
    const cookieOptions: CookieOptions = {
        path: '/',
        ...options
    };

    let updatedCookie = `${name}=${value}`;

    // eslint-disable-next-line guard-for-in
    for (const optionKey in cookieOptions) {
        updatedCookie += `; ${optionKey}`;
        const optionValue: any = cookieOptions[optionKey];
        if (optionValue !== true) {
            updatedCookie += `=${optionValue}`;
        }
    }

    document.cookie = updatedCookie;
}
