import './fillFormFromFixture';

export const adminAjaxUrl: string = '/wp-admin/admin-ajax.php';

export function getRandomEmail(): string {
    const chars: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string: string = '';

    for (let i = 0; i < 15; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }

    return `${string}@lavandre.com`;
}
