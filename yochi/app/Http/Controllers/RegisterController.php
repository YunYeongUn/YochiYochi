<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class RegisterController extends Controller
{
    public function index()
    {
        return view('register');
    }

    public function store(Request $request)
    {
        $validation = $request -> validate([
            'name' => 'required|min:2|string',
            'userId' => 'required|min:6|max:12|unique:users|string',
            'password' => 'required|min:10|max:16|confirmed',
            'email' => 'required|email',
            'tel' => 'required|min:11|max:11',
        ]);

        User::create([
            'name' => $validation['name'],
            'userId' => $validation['userId'],
            'password' => Hash::make($validation['password']),
            'email' => $validation['email'],
            'tel' => $validation['tel'],
        ]);

        return redirect('/');

    }
}