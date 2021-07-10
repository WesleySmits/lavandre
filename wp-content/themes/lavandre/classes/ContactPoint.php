<?php

declare(strict_types=1);

class ContactPoint {
    private string $phoneNumber;
    private string $emailAddress;
    private string $facebook;
    private string $instagram;
    private string $twitter;
    private string $youtube;
    private string $linkedin;
    private string $facebookMessager;
    private string $whatsapp;

    function __construct(
        string $phoneNumber,
        string $emailAddress,
        string $facebook,
        string $instagram,
        string $twitter,
        string $youtube,
        string $linkedin,
        string $facebookMessager,
        string $whatsapp
    ) {
        $this->phoneNumber = $phoneNumber;
        $this->emailAddress = $emailAddress;
        $this->facebook = $facebook;
        $this->instagram = $instagram;
        $this->twitter = $twitter;
        $this->youtube = $youtube;
        $this->linkedin = $linkedin;
        $this->facebookMessager = $facebookMessager;
        $this->whatsapp = $whatsapp;
    }


    /**
     * Get the value of phoneNumber
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    public function getInternationalPhoneNumber()
    {
        $regex = "/^0/";
        $str = $this->getPhoneNumber();
        $replaceText = "+31";
        $number = preg_replace($regex, $replaceText, $str);
        return str_replace(' ', '', $number);
    }

    /**
     * Set the value of phoneNumber
     *
     * @return  self
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * Get the value of emailAddress
     */
    public function getEmailAddress()
    {
        return $this->emailAddress;
    }

    /**
     * Set the value of emailAddress
     *
     * @return  self
     */
    public function setEmailAddress($emailAddress)
    {
        $this->emailAddress = $emailAddress;

        return $this;
    }

    /**
     * Get the value of facebookMessager
     */
    public function getFacebookMessager()
    {
        return $this->facebookMessager;
    }

    /**
     * Set the value of facebookMessager
     *
     * @return  self
     */
    public function setFacebookMessager($facebookMessager)
    {
        $this->facebookMessager = $facebookMessager;

        return $this;
    }

    /**
     * Get the value of whatsapp
     */
    public function getWhatsapp()
    {
        return $this->whatsapp;
    }

    /**
     * Set the value of whatsapp
     *
     * @return  self
     */
    public function setWhatsapp($whatsapp)
    {
        $this->whatsapp = $whatsapp;

        return $this;
    }

    /**
     * Get the value of facebook
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * Set the value of facebook
     *
     * @return  self
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * Get the value of instagram
     */
    public function getInstagram()
    {
        return $this->instagram;
    }

    /**
     * Set the value of instagram
     *
     * @return  self
     */
    public function setInstagram($instagram)
    {
        $this->instagram = $instagram;

        return $this;
    }

    /**
     * Get the value of twitter
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * Set the value of twitter
     *
     * @return  self
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get the value of youtube
     */
    public function getYoutube()
    {
        return $this->youtube;
    }

    /**
     * Set the value of youtube
     *
     * @return  self
     */
    public function setYoutube($youtube)
    {
        $this->youtube = $youtube;

        return $this;
    }

    /**
     * Get the value of linkedin
     */
    public function getLinkedin()
    {
        return $this->linkedin;
    }

    /**
     * Set the value of linkedin
     *
     * @return  self
     */
    public function setLinkedin($linkedin)
    {
        $this->linkedin = $linkedin;

        return $this;
    }
}
