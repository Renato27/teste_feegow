<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\GenericApiFeegowService\Contracts\GenericApiFeegowService;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ProfissionalController extends Controller
{
    /**
     * Lista de profissionais.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($especialista_id)
    {
        $service = app(GenericApiFeegowService::class);

        try {

            return $service->setSpecialty($especialista_id)
            ->setProfessional(true)
            ->setSource(false)
            ->handle();

        } catch (\Throwable $th) {

            throw new HttpException(400, $th->getMessage());
        }
    }
}
