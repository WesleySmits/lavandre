<?php

declare(strict_types=1);

class Address {
    private string $street;
    private int $houseNumber;
    private int $houseNumberAddition;
    private string $city;
    private int $postalCode;

    public function __construct(
        string $initStreet,
        int $initHouseNumber,
        int $houseNumberAddition,
        string $initCity,
        int $initZip
    ) {
        $this->setStreet($initStreet);
        $this->setHouseNumber($initHouseNumber);
        $this->setHouseNumberAddition($houseNumberAddition);
        $this->setCity($initCity);
        $this->setPostalCode($initZip);
    }

    /**
     * Get the value of street
     *
     * @return string
     */
    public function getStreet() : string {
        return $this->street;
    }

    /**
     * Set the value of street
     *
     * @return self
     */
    public function setStreet(string $newStreet) {
        if (strlen($newStreet) < 2) {
            throw new InvalidArgumentException("Street needs to be of length 2 or more.");
        }

        $this->street = $newStreet;

        return $this;
    }

    /**
     * Get the value of houseNumber
     */
    public function getHouseNumber()
    {
        return $this->houseNumber;
    }

    /**
     * Set the value of house number
     *
     * @return self
     */
    public function setHouseNumber(int $newHouseNumber) {
        if (!is_int($newHouseNumber) || $newHouseNumber <= 0) {
            throw new InvalidArgumentException('House number needs to have a value greater than 0.');
        }

        $this->houseNumber = $newHouseNumber;

        return $this;
    }

    /**
     * Get the value of houseNumberAddition
     */
    public function getHouseNumberAddition() {
        return $this->houseNumberAddition;
    }

    /**
     * Set the value of houseNumberAddition
     *
     * @return  self
     */
    public function setHouseNumberAddition($houseNumberAddition) {
        $this->houseNumberAddition = $houseNumberAddition;

        return $this;
    }

    /**
     * Get the value of city
     */
    public function getCity() {
        return $this->city;
    }

    /**
     * Set the value of city
     *
     * @return  self
     */
    public function setCity($city) {
        $this->city = $city;

        return $this;
    }

    /**
     * Get the value of postalCode
     */
    public function getPostalCode() {
        return $this->postalCode;
    }

    /**
     * Set the value of postalCode
     *
     * @return  self
     */
    public function setPostalCode($postalCode) {
        $this->postalCode = $postalCode;

        return $this;
    }
}
