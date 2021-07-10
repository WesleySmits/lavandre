module.exports = (ctx) => ({
    ident: 'postcss',
    sourceMap: true,
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-at-rules-variables': {},
        'postcss-each': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 0,
            autoprefixer: { grid: false }
        },
        'postcss-calc': {},
        'cssnano': true
    }
});
