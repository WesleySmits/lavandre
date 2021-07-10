<?php

declare(strict_types=1);

class Company {
    private string $companyName;
    private int $foundingDate;
    private array $founders;
    private Address $address;
    private ContactPoint $contactPoint;

    function __construct(
        string $companyName,
        int $foundingDate,
        array $founders,
        Address $address,
        ContactPoint $contactPoint
    ) {
        $this->companyName = $companyName;
        $this->foundingDate = $foundingDate;
        $this->founders = $founders;
        $this->address = $address;
        $this->contactPoint = $contactPoint;
    }

    /**
     * Get the value of companyName
     */
    public function getCompanyName()
    {
        return $this->companyName;
    }

    /**
     * Set the value of companyName
     *
     * @return  self
     */
    public function setCompanyName($companyName)
    {
        $this->companyName = $companyName;

        return $this;
    }

    /**
     * Get the value of foundingDate
     */
    public function getFoundingDate()
    {
        return $this->foundingDate;
    }

    /**
     * Set the value of foundingDate
     *
     * @return  self
     */
    public function setFoundingDate($foundingDate)
    {
        $this->foundingDate = $foundingDate;

        return $this;
    }

    /**
     * Get the value of founders
     */
    public function getFounders()
    {
        return $this->founders;
    }

    /**
     * Set the value of founders
     *
     * @return  self
     */
    public function setFounders($founders)
    {
        $this->founders = $founders;

        return $this;
    }

    /**
     * Get the value of address
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set the value of address
     *
     * @return  self
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get the value of contactPoint
     */
    public function getContactPoint()
    {
        return $this->contactPoint;
    }

    /**
     * Set the value of contactPoint
     *
     * @return  self
     */
    public function setContactPoint($contactPoint)
    {
        $this->contactPoint = $contactPoint;

        return $this;
    }
}
