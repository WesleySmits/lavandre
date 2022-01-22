export function isDateValid(date: Date): boolean {
    return !Number.isNaN(date.getTime());
}

export function formatDate(date: Date): string {
    const day: string = formatNumberWithLeadingZero(date.getDate());
    const month: string = formatNumberWithLeadingZero(date.getMonth() + 1);
    return `${date.getFullYear()}-${month}-${day}`;
}

export function formatNumberWithLeadingZero(number: number): string {
    return String(number).padStart(2, '0');
}

export function getFullMonthName(month: Date, locale = 'default'): string {
    return month.toLocaleString(locale, { month: 'long' });
}
