<?php

declare(strict_types=1);

namespace Lavandre\Account;

use Lavandre\Loyalty\LavandreLoyalty;

Class LavandreAccountPages
    {
        /**
         * @var LavandreAccountPages|null
         */
        private static $instance;

        public static function getInstance(): LavandreAccountPages
        {
            if (is_null(self::$instance)) {
                self::$instance = new self();
            }

            return self::$instance;
        }

        public function removeLinks($items): Array
        {
            unset($items['vat-number']);
            unset($items['payment-methods']);
            return $items;
        }

        public function renameLinks($items): Array {
            $items['edit-account'] = __('Account details', 'lavandre');
            $items['orders'] = __('My orders', 'lavandre');
            $items['edit-address'] = __('My address book', 'lavandre');
            return $items;
        }

        public function addLinks($items): Array {
            $items['rewards'] = __('My Rewards', 'lavandre');
            return $items;
        }

        public function reorderLinks($items): Array
        {
            $rewardsIndex = array_search('rewards', array_keys($items));
            moveElement($items, $rewardsIndex, 3);

            return $items;
        }

        public function createRewardsEndpoint($query_vars): Array
        {
            $query_vars['rewards'] = 'rewards';
            return $query_vars;
        }

        public function setupRewardsPage(): void
        {
            $LavandreLoyalty = LavandreLoyalty::getInstance();
            $userId = get_current_user_id();

            wc_get_template('myaccount/loyalty.php', [
                'unlockableCoupons' => $LavandreLoyalty->unlockableCoupons,
                'coupons' => $LavandreLoyalty->userCoupons,
                'userPoints' => $LavandreLoyalty->getUserPoints($userId),
                'userHistory' => $LavandreLoyalty->getUserHistory($userId)
            ]);
        }
    }

    function moveElement(&$array, $fromIndex, $toIndex) {
        $out = array_splice($array, $fromIndex, 1);
        array_splice($array, $toIndex, 0, $out);
    }