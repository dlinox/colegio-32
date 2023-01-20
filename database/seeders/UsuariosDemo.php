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
            'nombres' => 'Marcos Admin',
            'apellidos' => 'Peres',
            'rol' => '1',
            'estado' => 1,
            'email' => 'nearlino20@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Administrador');

        User::create([
            'nombres' => 'Pepe Inve',
            'apellidos' => 'Martinez',
            'rol' => '2',
            'estado' => 1,
            'email' => 'dpumaticona@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Estudiante');

        User::create([
            'nombres' => 'Eric Gabriel Inve',
            'apellidos' => 'Chuquimia Mariaca',
            'rol' => '2',
            'estado' => 1,
            'email' => 'ariellukezz@gmail.com',
            'password' => Hash::make('demo'),
        ])->assignRole('Estudiante');

    }
}
