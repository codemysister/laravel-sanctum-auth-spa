<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/cuk', function (Request $request) {
    dd($request->user());
})->middleware('auth:sanctum');
