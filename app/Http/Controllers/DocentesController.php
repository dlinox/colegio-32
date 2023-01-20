<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\Bienk;
use App\Models\Estado;
use App\Models\Inventario;
use App\Models\Oficina;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DocentesController extends Controller
{
    //

    public function index()
    {

        return Inertia::render('Admin/Docentes/');
    }
    
    public function viewRegistroInventario()
    {
        return Inertia::render('Inventario/');
    }

}
