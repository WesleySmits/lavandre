<?php

declare(strict_types=1);

namespace Lavandre\Loyalty;

use Automattic\WooCommerce\Client;

Class LavandreLoyalty
{
    /**
     * @var LavandreLoyalty|null
     */
    private static $instance;

    public $pool;

    public $unlockables;

    public $unlockableCoupons;

    public $userCoupons;

    private Client $client;

    function __construct() {
        $this->getPool();
        $this->getUnlockables();
        $this->getUnlockableCoupons();
        $this->getUserCoupons();
    }

    public function addPoints($email, $pool_id, $points, $reason) {
        $woocommerce = $this->getClient();
        $endpoint = "points/$email/$pool_id/$points";

        if ($reason) {
            $endpoint = $endpoint . "/" . rawurlencode($reason);
        }

        return $woocommerce->put($endpoint, []);
    }

    public static function getInstance(): LavandreLoyalty
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function getPool() {
        if (isset($this->pool)) {
            return $this->pool;
        }

        $this->pool = \LWS\WOOREWARDS\Collections\Pools::instanciate()->load(array('name'=>'default', 'deep'=>true))->last();
        return $this->pool;
    }

    public function getUnlockables() {
        if (isset($this->unlockables)) {
            return $this->unlockables;
        }

        $this->unlockables = $this->pool->getUnlockables();
        return $this->unlockables;
    }

    public function getUnlockableCoupons() {
        if (isset($this->unlockableCoupons)) {
            return $this->unlockableCoupons;
        }

        $this->unlockableCoupons = $this->unlockables->filterByType('lws_woorewards_unlockables_coupon')->asArray();
        return $this->unlockableCoupons;
    }

    public function getUserCoupons() {
        if (isset($this->userCoupons)) {
            return $this->userCoupons;
        }

        $this->userCoupons = \LWS\WOOREWARDS\PRO\Conveniences::instance()->getCoupons(get_current_user_id());
        return $this->userCoupons;
    }

    public function getUserPoints($userId): int
    {
        return $this->pool->getPoints($userId);
    }

    public function getUserHistory($userId)
    {
        $stack = $this->pool->getStack($userId);
        $history = $stack->getHistory(false, true, 0, false);

        return $history;
    }

    private function getClient(): Client
    {
        if (isset($this->client)) {
            return $this->client;
        }

        return new Client(
            $_ENV['WOOCOMMERCE_API_URL'],
            $_ENV['WOOCOMMERCE_API_KEY'],
            $_ENV['WOOCOMMERCE_API_SECRET'],
            [
                'version' => 'woorewards/v1',
                'verify_ssl' => false
            ]
        );
    }
}