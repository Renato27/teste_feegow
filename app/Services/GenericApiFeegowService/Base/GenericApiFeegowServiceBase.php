<?php

namespace App\Services\GenericApiFeegowService\Base;

use App\Services\GenericApiFeegowService\Contracts\GenericApiFeegowService;

abstract class GenericApiFeegowServiceBase implements GenericApiFeegowService
{
    /**
     * ID da especialidade.
     *
     * @var integer|null
     */
    protected ?int $specialty_id;

    /**
     * Verificação para retorno dos dados do profissional.
     *
     * @var bool
     */
    protected bool $professional;

    /**
     * Verificação para retorno dos dados de onde conheceu a empresa.
     *
     * @var bool
     */
    protected bool $source;

     /**
     * Set ID da especialidade.
     *
     * @param integer|null $specialty_id
     * @return self
     */
    public function setSpecialty(?int $specialty_id = null): self
    {
        $this->specialty_id = $specialty_id;

        return $this;
    }

    /**
     * Set a verificação para retorno dos dados do profissional.
     *
     * @param bool $professional
     * @return self
     */
    public function setProfessional(bool $professional = false): self
    {
        $this->professional = $professional;

        return $this;
    }

    /**
     * Set a verificação para retorno dos dados de onde conheceu a empresa.
     *
     * @param bool $source
     * @return self
     */
    public function setSource(bool $source = false): self
    {
        $this->source = $source;

        return $this;
    }
}
