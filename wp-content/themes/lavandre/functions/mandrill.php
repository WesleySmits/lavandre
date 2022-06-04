<?php

declare(strict_types=1);

namespace Lavandre\Mandrill;

use Error;
use Exception;
use MailchimpTransactional\ApiClient;

class Mandrill
{
    /**
     * @var Mandrill|null
     */
    private static $instance;

    private ApiClient $client;

    private string $apiKey;

    function __construct() {
        $this->apiKey = $_ENV['MANDRILL_API_KEY'];
        $this->client = new ApiClient();
        $this->client->setApiKey($this->apiKey);
    }

    public static function getInstance(): Mandrill
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function getTemplateInfo(string $template_name) : Array
    {
        $info = $this->client->templates->info(["name" => $template_name]);

        if ($info->slug != $template_name) {
            throw new Exception("Template not found");
        }

        return json_decode(json_encode($info), true);
    }

    public function sendMail($template_name, $email, $name = '', $merge_vars = [], $language = 'mailchimp'): void
    {
        try {
            $info = $this->getTemplateInfo($template_name);

            $message = array(
                'subject' => $info['subject'],
                'from_email' => $info['from_email'],
                'from_name' => $info['from_name'],
                'html' => $info['publish_code'],
                'to' => array(array('email' => $email, 'name' => $name)),
                'merge_language' => $language,
                'global_merge_vars' => $merge_vars
            );

            $this->client->messages->sendTemplate([
                "template_name" => $template_name,
                "template_content" => [["name"=>'','content'=>'']],
                "message" => $message,
            ]);

            die;
        } catch (Error $e) {
            var_dump('something went wrong', $e); die;
        }
    }

    public function sendMails($template_name, $recipients, $merge_vars = [], $language = 'mailchimp'): void
    {
        try {
            $info = $this->getTemplateInfo($template_name);

            $message = array(
                'subject' => $info['subject'],
                'from_email' => $info['from_email'],
                'from_name' => $info['from_name'],
                'html' => $info['publish_code'],
                'to' => $recipients,
                'merge_language' => $language,
                'global_merge_vars' => $merge_vars
            );

            $result = $this->client->messages->sendTemplate([
                "template_name" => $template_name,
                "template_content" => [["name"=>'','content'=>'']],
                "message" => $message,
            ]);

            var_dump($result);
            die;
        } catch (Error $e) {
            var_dump('something went wrong', $e); die;
        }
    }
}
