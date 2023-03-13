<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        return view('login');
    }

    public function login(Request $request){
        $validation = $request -> validate([
            'userId' => 'required',
            'password' => 'required',
        ]);

        $remember = $request -> input('remember'); // 로그인 유지 쿠키에 생김

        if(Auth::attempt($validation, $remember)){
            return redirect()->route('main');

        } else{
            return redirect()->back();
            
        }
    }

    public function logout(){
        Auth::logout();

        return redirect()->route('main');
    }
}