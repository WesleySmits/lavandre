const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./public/')
    .setPublicPath('/')
    .addEntry('app', './assets/js/app.ts')
    .addStyleEntry('homepage-styles', './assets/css/pages/homepage.pcss')
    .addStyleEntry('checkout-styles', './assets/css/pages/checkout.pcss')
    .addStyleEntry('login-styles', './assets/css/pages/login.pcss')
    .addStyleEntry('product-styles', './assets/css/pages/product.pcss')
    .addStyleEntry('product-overview-styles', './assets/css/pages/productOverview.pcss')
    .addStyleEntry('account-styles', './assets/css/pages/account.pcss')
    .addStyleEntry('elementor-popup-styles', './assets/css/pages/popups.pcss')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enablePostCssLoader()
    .enableTypeScriptLoader()
    .configureTerserPlugin((options) => {
        options.cache = true;
        options.parallel = true;
        options.terserOptions = {
            "keep_classnames": true,
            "keep_fnames": true
        }
    })
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]'
    })
;

module.exports = Encore.getWebpackConfig();
