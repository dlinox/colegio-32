<?php

namespace App\Http\Controllers;

use App\Models\Grupo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UsuarioController extends Controller
{
    protected $response;
    public function index()
    {

        return Inertia::render('Admin/Usuarios/', [
            'roles' =>  Role::all(),
        ]);
    }

    public function getUsuarios(Request $request)
    {

        $query_where = [];
        if ($request->rol) array_push($query_where, ['users.rol', '=', $request->rol]);
    
        $res = User::select(
            'users.*'
        )
          
            ->where($query_where)
            ->where(function ($query) use ($request) {
                return $query
                    ->orWhere('users.nombres', 'LIKE', '%' . $request->term . '%')
                    ->orWhere('users.apellidos', 'LIKE', '%' . $request->term . '%')
                    ->orWhere('users.email', 'LIKE', '%' . $request->term . '%');
            })
            ->groupBy('users.id')
            ->paginate(3);


        $res->getCollection()->transform(function ($item) {
            return
                [
                    'id' => $item->id,
                    'nombres' => $item->nombres,
                    'apellidos' => $item->apellidos,
                    'email' => $item->email,
                    'rol' => $item->rol,
                    'rol_name'  => $item->getRoleNames()[0],
                ];
        });

        $this->response['estado'] = true;
        $this->response['datos'] = $res;
        $this->response['mensaje'] =   $request->area;
        return response()->json($this->response, 200);
    }
}
