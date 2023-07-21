<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::prefix('/v1')->group(function (){
    Route::prefix('/auth')->controller('App\Http\Controllers\Api\V1\AuthController')->group(function (){
       Route::post('register','register')->name('auth.register');
       Route::post('login','login')->name('auth.login');
    });
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->prefix('/v1')->group(function (){
    Route::prefix('/user')->controller('App\Http\Controllers\Api\V1\AuthController')->group(function (){
        Route::post('logout','logout')->name('auth.logout');
    });
    Route::prefix('/user')->controller('App\Http\Controllers\Api\V1\UserController')->group(function (){
        Route::get('all','all_user')->name('all_user');
    });
    Route::apiResource('tasks','App\Http\Controllers\Api\V1\TaskController');
    Route::prefix('/tasks')->controller('App\Http\Controllers\Api\V1\TaskController')->group(function (){
        Route::post('assign-task','task_assign')->name('task_assign');
    });
});
