<?php

declare(strict_types=1);

namespace Lavandre\User;

class UserHelper
{
    /**
     * @var UserHelper|null
     */
    private static $instance;

    private $user = null;

    function __construct() {
        $this->user = $this->getCurrentUser();
    }

    public static function getInstance(): UserHelper
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function getUserByEmail($email) {
        $user = get_user_by('email', $email);

        if (!$user) {
            return null;
        }

        return $user;
    }

    public function getCurrentUser() {
        $user = wp_get_current_user();

        if (!$user) {
            return null;
        }

        return $user;
    }

    public function getFirstName($user): string
    {
        if (!$user) {
            $user = $this->user;
        }

        return $user->first_name ?? '';
    }

    public function getLastName($user): string
    {
        if (!$user) {
            $user = $this->user;
        }

        return $user->last_name ?? '';
    }

    public function getName($user): string
    {
        if (!$user) {
            $user = $this->user;
        }

        return $user->first_name . ' ' . $user->last_name ?? '';
    }

    public function getCompanyName($user): string
    {
        if (!$user) {
            $user = $this->user;
        }

        return $user->company ?? '';
    }
}
