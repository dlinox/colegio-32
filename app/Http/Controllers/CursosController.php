<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CursosController extends Controller
{
    public function index()
    {

        return Inertia::render('Admin/Cursos/');
    }
}
