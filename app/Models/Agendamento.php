<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agendamento extends Model
{
    use HasFactory, SoftDeletes;

    protected $date = ['deleted_at'];
    protected $fillable = ['name', 'cpf', 'birthdate', 'date_time', 'specialty_id', 'professional_id', 'source_id'];
}
