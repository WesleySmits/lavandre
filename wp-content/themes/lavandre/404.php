<?php
get_header(); ?>
    <div class="main-banner" style="display: flex; flex-flow: column nowrap; text-align: center; justify-content: center; align-content: center; min-height: 600px; background: #fac833; padding: 1rem;">
        <img src="/wp-content/themes/lavandre/public/images/404@x2.jpg" srcset="/wp-content/themes/lavandre/public/images/404.jpg 1x, /wp-content/themes/lavandre/public/images/404@x2.jpg 2x" alt="" width="600" height="254" style="display: block; margin: 1rem auto;">

        <h1 style="margin: 2rem auto; color: white; font-weight: 500; font-size: 1.25rem;">
            <?php _e('Sorry, the page you\'re looking for couldn\'t be found.', 'lavandre'); ?>
        </h1>

        <button is="lavandre-button" href="/shop" size="large" primary>
            <?php _e('Back to the shop', 'lavandre'); ?>
        </button>
    </div>
<?php get_footer(); ?>
