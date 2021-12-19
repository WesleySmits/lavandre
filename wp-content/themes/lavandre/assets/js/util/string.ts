export function toCamelCase(str: string): string {
    return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

export function toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}
