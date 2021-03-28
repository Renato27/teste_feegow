<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AgendamentoRequest;
use App\Models\Agendamento;
use App\Services\GenericApiFeegowService\Contracts\GenericApiFeegowService;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AgendamentoController extends Controller
{
    /**
     * Lista de fontes de como conheceu a empresa.
     *
     * @return \Illuminate\Http\Response
     */
    public function source()
    {
        $service = app(GenericApiFeegowService::class);

        try {

            return $service->setSpecialty(null)
            ->setProfessional(false)
            ->setSource(true)
            ->handle();

        } catch (\Throwable $th) {

            throw new HttpException(400, $th->getMessage());
        }
    }

    /**
     * Salva as informações do agendamento no banco de dados
     *
     * @param AgendamentoRequest $request
     * @return void
     */
    public function store(AgendamentoRequest $request)
    {
        try {
            Agendamento::create($request->all());

        } catch (\Throwable $th) {
            throw new HttpException(400, $th->getMessage());
        }
    }
}
