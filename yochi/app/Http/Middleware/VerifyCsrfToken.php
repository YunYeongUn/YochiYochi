<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        // 여기 클라이언트 주소?
        //'/www.localhost:3000'
        '/api/*',
        
        /* '/JWTregister',
        '/JWTlogin',
        '/logout',
        '/api/user',
        '/api/refresh',

        '/items/store',
        'items/{id}',

        '/comments/store',
        '/comments/{board_id}/{id}/{comment_id}',

        'board/{board_id}/{id}',
        '/api/board/{board_id}/store' */
    ];
}