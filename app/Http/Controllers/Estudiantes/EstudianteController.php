<?php

namespace App\Http\Controllers\Estudiantes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstudianteController extends Controller
{
    public function index()
    {
        return Inertia::render('Estudiantes/Dashboard');
    }
}
