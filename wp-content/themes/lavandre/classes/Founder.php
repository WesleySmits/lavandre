<?php

declare(strict_types=1);

class Founder {
    private string $name;

    function __construct(string $name) {
        $this->setName($name);
    }

    /**
     * Get the value of name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }
}
