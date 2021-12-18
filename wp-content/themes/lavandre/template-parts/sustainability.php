<?php
    /* Template Name: Sustainability page */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
get_header();
?>

<main role="main">
    <section id="main-banner" class="full-video">
        <video width="1920" autoplay muted loop>
            <source src="/wp-content/themes/lavandre/assets/video/sustainability.mov" type="video/mp4">
        </video>

        <a href="#derived-from-nature" class="no-button full-video__see-more" data-scroll-to="derived-from-nature">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </section>

    <section id="derived-from-nature" class="ww-block ww-block--full-height">
        <header>
            <h2><?php _e('In our small ways, we can all play our part in doing better for our planet.', 'lavandre'); ?></h2>
            <h2><?php _e('FROM DAY ONE, WE PUT PEOPLE + PLANET FIRST', 'lavandre'); ?></h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><?php _e('Sustainability. More than just a trend, it is a lifestyle. It is a way to make this planet a better and safer place to live for future generations. But living sustainable doesn\'t mean you need to go live in the woods - every little act and decisiion we make shapes the future of tomorrow. And you can start by making your routine as sustainable as possible.', 'lavandre'); ?></p>
            </div>

            <div>
                <p><?php _e('Lavandré is committed to continually working to make her products better both for you and our planet. We achieve this through seeking and using innovative, alternative materials that are long-lasting, versatile and low-impact. Our collection is made from plant-based TENCEL&trade; Lyocell which makes it 100% environmentally friendly.', 'lavandre'); ?></p>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>
        <div class="full-width-banner-block__link full-width-banner-block__text">

            <h1><?php echo __('Production', 'lavandre'); ?></h1>
            <p><?php echo __('The production process of TENCEL™ Lyocell fibers is one of the most modern methods for producing wood-based fibers. The underlying idea is to dissolve and process the pulp in a closed loop process. Only certified pulp derived from renewable raw material wood is processed for the production of TENCEL™ Lyocell fiber. Lyocell process involves direct dissolution of cellulose pulp in water and organic solvent. The technology used in the production of TENCEL™ Lyocell fiber enables a recovery rate of over 99% of the water and solvent for reuse in a closed loop production process. The process has been awarded the European Award for the Environment for its ability to reuse and recycle the water and solvent, which results in very low emissions to the environment. Lenzing is committed to the highest environmental standards in fiber production, from wood and pulp sourcing, to manufacturing, to preserving forests. Preventing deforestation is a high priority. ', 'lavandre'); ?></p>
        </div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2><?php _e('Meaningful transparency and thoughtful design. We’re on a mission to change the world, one product at a time.', 'lavandre'); ?></h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><?php _e('Your health, safety and well-being are our top priorities. And we’re committed to providing you with high-performance products that you can feel great about using. That’s why we place such an emphasis on ingredient assessment, carefully choosing the ones we put into our products and the ones we leave out — in essence, everything you need and nothing you don’t. Each and every ingredient we choose to use in our products is evaluated for its safety and efficacy in use.', 'lavandre'); ?></p>
                <p><?php _e('Just as we take great care in the ingredient assessment, formulation and validation process, we look to manufacturing partners who share our commitment to quality. We require that our partners follow the gold standard for manufacturing for the product being made.', 'lavandre'); ?></p>
                <p><?php _e('Making every day beautiful is natural to us; we design to inspire and delight. But our packaging development doesn’t stop at aesthetics. We strive to be mindful of composition as well, focusing on environmental responsibility and eliminating materials of concern. ', 'lavandre'); ?></p>
            </div>

            <div>
                <p><?php _e('We’re thoughtful about the composition of the materials, and are ever exploring and evolving to improve our use of recycled content and recyclable materials. Some materials simply don’t meet our standard — like PVC and polystyrene — due to their environmental or human health impacts, so we won’t use them. We take a balanced, big-picture perspective. Minimising breakage during shipping helps eliminate wasted product and reduces the use of air freight for replacements. When weighing one material or design against another, we consider many impacts, ranging from safety to recyclability.', 'lavandre'); ?></p>
                <p><?php _e('We believe you have a right to know what goes into your products. To this end, we list our ingredients clearly and consistently according to established standards. While many conventional brands have made great strides in terms of transparency, very few are doing so directly on the label. We’re proud to be leading this charge.', 'lavandre'); ?></p>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>

        <div class="full-width-banner-block__link full-width-banner-block__text">
            <h1><?php echo __('Our partnership programs', 'lavandre'); ?></h1>
            <p><?php echo __('We’ve always believed small choices add up to a big difference. By supporting Lavendré, you\'re showing support for organisations that share our values and amplify our impact, making happy, healthy lives possible for more people everywhere. From day one, we\'ve partnered with Eden Reforestation Project to help plant trees in areas destroyed by deforestation.', 'lavandre'); ?></p>
        </div>
    </section>
</main>

<?php
    get_footer();
?>
