<?php

use App\Http\Controllers\Api\AgendamentoController;
use App\Http\Controllers\Api\EspecialidadeController;
use App\Http\Controllers\Api\ProfissionalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['api']], function () {
    Route::apiResources([
        'especialidades' => EspecialidadeController::class,
        'profissionais'  => ProfissionalController::class,
        'agendamentos'   => AgendamentoController::class
        ]);

    Route::get('agendamentos', [AgendamentoController::class, 'source']);
});
