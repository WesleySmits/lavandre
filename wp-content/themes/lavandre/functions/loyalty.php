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

    private Client $client;

    public function addPoints($email, $pool_id, $points) {
        $woocommerce = $this->getClient();
        $endpoint = "points/$email/$pool_id/$points";

        return $woocommerce->put($endpoint, []);
    }

    public static function getInstance(): LavandreLoyalty
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
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