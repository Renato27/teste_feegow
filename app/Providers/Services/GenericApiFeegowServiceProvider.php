<?php

namespace App\Providers\Services;

use App\Services\GenericApiFeegowService\Contracts\GenericApiFeegowService as ContractsGenericApiFeegowService;
use App\Services\GenericApiFeegowService\GenericApiFeegowService;
use Illuminate\Support\ServiceProvider;

class GenericApiFeegowServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $service = new GenericApiFeegowService();

        $this->app->bind(ContractsGenericApiFeegowService::class, function($app) use($service){
            return $service;
        });
    }
}
