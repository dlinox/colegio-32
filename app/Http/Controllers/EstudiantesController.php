<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EstudiantesController extends Controller
{
    public function index()
    {

        return Inertia::render('Admin/Estudiantes/');
    }


}
