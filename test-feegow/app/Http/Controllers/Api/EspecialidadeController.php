<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\GenericApiFeegowService\Contracts\GenericApiFeegowService;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class EspecialidadeController extends Controller
{
    /**
     * Lista de especialidades.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $service = app(GenericApiFeegowService::class);

        try {

            return $service->setSpecialty(null)
            ->setProfessional(false)
            ->setSource(false)
            ->handle();

        } catch (\Throwable $th) {

            throw new HttpException(400, $th->getMessage());
        }
    }
}
