<?php

namespace App\Services\GenericApiFeegowService\Contracts;

use Illuminate\Http\JsonResponse;

interface GenericApiFeegowService
{
    /**
     * Set ID da especialidade.
     *
     * @param integer|null $specialty_id
     * @return self
     */
    public function setSpecialty(?int $specialty_id = null): self;

    /**
     * Set a verificação para retorno dos dados do profissional.
     *
     * @param bool $professional_id
     * @return self
     */
    public function setProfessional(bool $professional = false): self;

    /**
     * Set a verificação para retorno dos dados de onde conheceu a empresa.
     *
     * @param bool $source_id
     * @return self
     */
    public function setSource(bool $source = false): self;

    /**
     * Retorna os dados da api da Feegow.
     *
     * @return JsonResponse
     */
    public function handle() : JsonResponse;
}
