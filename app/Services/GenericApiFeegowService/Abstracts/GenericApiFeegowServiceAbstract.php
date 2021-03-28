<?php

namespace App\Services\GenericApiFeegowService\Abstracts;

use App\Services\GenericApiFeegowService\Base\GenericApiFeegowServiceBase;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

abstract class GenericApiFeegowServiceAbstract extends GenericApiFeegowServiceBase
{

    /**
     * Verifica de qual url da api será retornado os dados e os retorna.
     *
     * @return JsonResponse
     */
    protected function getDataApi() : JsonResponse
    {
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38';
        $host = 'https://api.feegow.com/v1/api';

        if($this->professional && !is_null($this->specialty_id)){

            return $this->getListaProfissonais($token, $host);
        }

        if($this->source){

            return $this->getListaComoConheceu($token, $host);
        }

        return $this->getListaEspecialidades($token, $host);

    }

    /**
     * Retorna a lista de especialidades.
     *
     * @param string $token
     * @param string $host
     * @return JsonResponse
     */
    private function getListaEspecialidades(string $token, string $host) : JsonResponse
    {
        $apiData = Http::withOptions(['verify' => base_path('/resources/assets/cacert.pem')])
        ->withHeaders([
            'x-access-token'    => $token
        ])->get($host . '/specialties/list');

        return response()->json($apiData['content']);
    }

    /**
     * Retorna a lista de profissionais.
     *
     * @param string $token
     * @param string $host
     * @return JsonResponse
     */
    private function getListaProfissonais(string $token, string $host) : JsonResponse
    {

        $apiData = Http::withOptions(['verify' => base_path('/resources/assets/cacert.pem')])
        ->withHeaders([
            'x-access-token'    => $token
        ])->get($host . '/professional/list/?especialidade_id=' . $this->specialty_id);

        return response()->json($apiData['content']);
    }

    /**
     * Retorna a lista de opções de como conheceu a empresa.
     *
     * @param string $token
     * @param string $host
     * @return JsonResponse
     */
    private function getListaComoConheceu(string $token, string $host) : JsonResponse
    {
        $apiData = Http::withOptions(['verify' => base_path('/resources/assets/cacert.pem')])
        ->withHeaders([
            'x-access-token'    => $token
        ])->get($host . '/patient/list-sources');

        return response()->json($apiData['content']);
    }
}
