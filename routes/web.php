<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\DocentesController;
use App\Http\Controllers\Estudiantes\EstudianteController as Estudiante_EstudianteController;
use App\Http\Controllers\EstudiantesController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MatriculasController;
use App\Http\Controllers\PersonasController;
use App\Http\Controllers\ReportesController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/login', [LoginController::class, 'index'])
    ->name('index');

Route::post('/login', [LoginController::class, 'UserLogin'])
    ->name('login');

Route::post('/logout', [LoginController::class, 'logout'])
    ->name('logout');

Route::middleware(['auth', 'onlyAdmin'])->name('admin.')->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])
        ->name('index');

    Route::controller(UsuarioController::class)->name('usuarios.')->prefix('usuarios')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/get-usuarios', 'getUsuarios')->name('get-usuarios');
        Route::post('/asignar-area', 'asignarArea')->name('asignar-area');
    });


    Route::controller(DocentesController::class)->name('docentes.')->prefix('docentes')->group(function () {
        Route::get('/', 'index')->name('index');
    });

    Route::controller(EstudiantesController::class)->name('estudiantes.')->prefix('estudiantes')->group(function () {
        Route::get('/', 'index')->name('index');
    });

    Route::controller(MatriculasController::class)->name('matriculas.')->prefix('matriculas')->group(function () {
        Route::get('/', 'index')->name('index');
    });
    Route::controller(CursosController::class)->name('cursos.')->prefix('cursos')->group(function () {
        Route::get('/', 'index')->name('index');
    });
    Route::controller(PersonasController::class)->name('personas.')->prefix('personas')->group(function () {
        Route::get('/', 'index')->name('index');
    });
    Route::controller(ReportesController::class)->name('reportes.')->prefix('reportes')->group(function () {
        Route::get('/', 'index')->name('index');
    });
});

Route::middleware(['auth', 'onlyInve'])->name('estudiantes.')->prefix('estudiantes')->group(function () {
    Route::get('/', [Estudiante_EstudianteController::class, 'index'])
    ->name('index');
});
