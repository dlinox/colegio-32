<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MatriculasController extends Controller
{
    public function index()
    {

        return Inertia::render('Admin/Matriculas/');
    }
}
