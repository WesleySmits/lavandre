// #TODO: Remove webpack-encore dependency

const Encore = require('@symfony/webpack-encore');

Encore.setOutputPath('./public/')
    .setPublicPath('/')
    .addEntry('app', './assets/js/app.ts')
    .addEntry('home', './assets/js/home.ts')
    .addEntry('rewards', './assets/js/rewards.ts')
    .addEntry('loyalty', './assets/js/loyalty.ts')
    .addEntry('sustainability', './assets/js/Sustainability.ts')
    .addEntry('productDetail', './assets/js/productDetail.ts')
    .addEntry('cart', './assets/js/cart.ts')
    .addEntry('checkout', './assets/js/checkout.ts')
    .addStyleEntry('critical-styles', './assets/css/critical.pcss')
    .addStyleEntry('deferred-styles', './assets/css/deferred.pcss')
    .addStyleEntry('homepage-styles', './assets/css/pages/homepage.pcss')
    .addStyleEntry('about-styles', './assets/css/pages/about.pcss')
    .addStyleEntry('rewards-styles', './assets/css/pages/rewards.pcss')
    .addStyleEntry('contact-styles', './assets/css/pages/contact.pcss')
    .addStyleEntry('legal-styles', './assets/css/pages/legal.pcss')
    .addStyleEntry('checkout-styles', './assets/css/pages/checkout.pcss')
    .addStyleEntry('login-styles', './assets/css/pages/login.pcss')
    .addStyleEntry('product-styles', './assets/css/pages/product.pcss')
    .addStyleEntry('product-overview-styles', './assets/css/pages/productOverview.pcss')
    .addStyleEntry('account-styles', './assets/css/pages/account.pcss')
    .addStyleEntry('customerServiceStyles', './assets/css/pages/customer-service.pcss')
    .addStyleEntry('blogOverviewStyles', './assets/css/pages/blogOverview.pcss')
    .addStyleEntry('sustainability-styles', './assets/css/pages/sustainability.pcss')
    .addStyleEntry('landingspage-styles', './assets/css/pages/landingsPage.pcss')
    .addStyleEntry('404-styles', './assets/css/pages/404.pcss')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enablePostCssLoader()
    .enableTypeScriptLoader()
    .enableVersioning(Encore.isProduction())
    .configureTerserPlugin((options) => {
        options.parallel = true;
        options.terserOptions = {
            keep_classnames: true,
            keep_fnames: true
        };
    })
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]'
    })
    .addLoader({ test: /\.(png|jpg|jpeg|webp|gif)$/, loader: 'url-loader' });

module.exports = Encore.getWebpackConfig();
