<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class GoogleLoginController extends Controller
{
    public function redirect(){
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function callback(){
        try{
            $user = Socialite::driver('google')->stateless()->user();
            $google = 'google';
            // dd($user); // 데이터 확인
            $findUser = User::where('email', $google.$user->email) -> first(); // 이미 있는 이메일 검사
            if($findUser){
                Auth::login($findUser);
                return redirect() -> route('main');
            }else{ // 없으면 생성 후 로그인
                $pass = 'google_password';
                // $tel = 'google_tel';
                $newUser = User::create([
                    'name' => $user->getName(),
                    'email' => $google.$user->getEmail(),
                    // 'userId' => $user->getId(),
                    'password' => $pass.$user->getId(),
                    // 'tel' => $tel.$user->getId(),
                ]);
                Auth::login($newUser);
                return redirect() -> route('main');
            }
        } catch (\Exception $e){
            Log::error($e);
            // return redirect('/login');
        }
    }

    public function logout(){
        Auth::logout();
        return redirect() -> route('main');
    }
}