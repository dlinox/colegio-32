<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuariosDemo extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'nombres' => 'Admin',
            'paterno' => 'Peres',
            'materno' => 'Peres',
            'celular' => '911111111',
            'dni' => '11111111',
            'rol' => '1',
            'estado' => 1,
            'email' => 'admin@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Administrador');

        User::create([
            'nombres' => 'Pepe Inve',
            'paterno' => 'Martinez',
            'materno' => 'Martinez',
            'celular' => '922222222',
            'dni' => '22222222',
            'rol' => '2',
            'estado' => 1,
            'email' => 'docente1@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Docente');

        User::create([
            'nombres' => 'Eric Gabriel Inve',
            'paterno' => 'Chuquimia',
            'materno' => 'Mariaca',
            'celular' => '933333333',
            'dni' => '33333333',
            'rol' => '2',
            'estado' => 1,
            'email' => 'docente2@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Docente');
    }
}
