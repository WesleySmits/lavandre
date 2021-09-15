export function toCamelCase(str: string): string {
    return str.replace(/\W+(.)/g, function(match, chr) {
          return chr.toUpperCase();
    });
}

export function toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
