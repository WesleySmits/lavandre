<?php

declare(strict_types=1);

namespace Lavandre\Mailchimp;

use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
use MailchimpMarketing\ApiClient;
use MailchimpMarketing\ApiException;

class Mailchimp
{
    /**
     * @var Mailchimp|null
     */
    private static $instance;

    private ApiClient $client;

    private string $apiKey;

    private string $server;

    function __construct() {
        $this->apiKey = $_ENV['MAILCHIMP_API_KEY'];
        $this->server = $_ENV['MAILCHIMP_SERVER'];

        $this->client = new ApiClient();
        $this->client->setConfig([
            'apiKey' => $this->apiKey,
            'server' => $this->server
        ]);
    }

    public static function getInstance(): Mailchimp
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function getSubscribedListMembers(string $list_id, string $tag) : Array
    {
        $members = [];
        $errors = [];

        try {
            $response = $this->client->lists->getListMembersInfo($list_id);
            $result = json_decode(json_encode($response), true);

            foreach ($result['members'] as $member) {
                if ($member['status'] !== 'subscribed') {
                    continue;
                }

                foreach ($member["tags"] as $tagObj) {
                    if ($tagObj["name"] !== $tag) {
                        continue;
                    }

                    $members[] = $member['email_address'];
                }
            }
        } catch (RequestException $e) {
        } catch (ApiException $e) {
            $errors[] = $e->getMessage();
        } catch (ClientException $e) {
            $errors[] = $e->getMessage();

            $errorResponse = $e->getResponse();
            $errorStatusCode = (string)$errorResponse->getStatusCode();
        }

        if ($errors) {
            return $errorStatusCode;
        }

        return $members;
    }

    public function getSubscriptionStatus(string $email, string $list_id): string|null
    {
        $subscriber_hash = md5(strtolower($email));
        $response = '';
        $errors = [];
        $errorStatusCode = 0;

        try {
            $response = $this->client->lists->getListMember($list_id, $subscriber_hash);
            return $response->status;
        } catch (ClientException $e) {
        } catch (RequestException $e) {
        } catch (ApiException $e) {
            $errors[] = $e->getMessage();
        } catch (ClientException $e) {
            $errors[] = $e->getMessage();

            $errorResponse = $e->getResponse();
            $errorStatusCode = (string)$errorResponse->getStatusCode();
        }

        if ($errors) {
            return $errorStatusCode;
        }

        return null;
    }

    public function subscribeUser(string $email, string $list_id, string $firstName = '', string $companyName = '', array $mergeFields = [], array $data = []): string
    {
        $subscriber_hash = md5(strtolower($email));
        $subscriptionStatus = $this->getSubscriptionStatus($email, $list_id);

        if ($subscriptionStatus !== null && $subscriptionStatus != '404') {
            wp_send_json_error( ['You are already subscribed.'] );
        }

        $errors = [];

        try {
            if (empty($data)) {
                $data = [
                    "email_address" => $email,
                    "status" => "subscribed",
                    "status_if_new" => "subscribed"
                ];
            }

            if ($firstName) {
                $mergeFields["FNAME"] = $firstName;
            }

            if ($companyName) {
                $mergeFields["CNAME"] = $companyName;
            }

            if ($mergeFields) {
                $data['merge_fields'] = $mergeFields;
            }

            $this->client->lists->setListMember($list_id, $subscriber_hash, $data);
        } catch (ApiException $e) {
            $error = $e->getMessage();
            var_dump($error); die;
            return MailchimpSubscriptionStatus::ALREADY_SUBSCRIBED;
        } catch (ClientException $e) {
            echo '<pre>' . var_export($e->getResponse()->getBody()->getContents()).'</pre>';
            $errors[] = $e->getMessage();
            return MailchimpSubscriptionStatus::ERROR;
        }

        if ($errors) {
            print_r($data); die;
            return false;
        }

        return MailchimpSubscriptionStatus::SUCCESS;
    }
}
