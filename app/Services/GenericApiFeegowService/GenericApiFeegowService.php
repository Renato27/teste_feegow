<?php

namespace App\Services\GenericApiFeegowService;

use App\Services\GenericApiFeegowService\Abstracts\GenericApiFeegowServiceAbstract;
use Illuminate\Http\JsonResponse;

class GenericApiFeegowService extends GenericApiFeegowServiceAbstract
{
     /**
     * Retorna os dados da api da Feegow.
     *
     * @return JsonResponse
     */
    public function handle() : JsonResponse
    {
        return $this->getDataApi();
    }
}
