<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolSeeder extends Seeder
{
    public function run()
    {
        Role::create(['name' => 'Administrador']);
        Role::create(['name' => 'Docente']);
    }
}