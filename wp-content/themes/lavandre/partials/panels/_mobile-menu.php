<template data-panel-template="mobile-menu">
    <dialog class="side-panel side-panel--left side-panel--mobile-menu" data-panel-name="mobile-menu">
        <div class="side-panel__container">
            <header class="side-panel__header side-panel__header--no-border">
                <button type="button" data-close class="side-panel__close">
                    <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                </button>
            </header>

            <nav class="side-panel__section side-panel__navigation">
                <ul class="no-list">

                    <li>
                        <a href="/shop">
                            <span><?php _e('Shop', 'lavandre'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/sustainability">
                            <span><?php _e('Sustainability', 'lavandre'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/blog">
                            <span><?php _e('Blog', 'lavandre'); ?></span>
                        </a>
                    </li>


                    <li>
                        <a href="/my-account">
                            <span><?php _e('My account', 'lavandre'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/contact">
                            <span><?php _e('Contact', 'lavandre'); ?></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </dialog>
</template>
