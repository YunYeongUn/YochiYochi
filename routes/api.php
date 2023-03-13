<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTAuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register', [JWTAuthController::class,'register'])->name('api.jwt.register'); // JWT 회원가입

Route::post('/login', [JWTAuthController::class,'login'])->name('api.jwt.login'); // JWT 로그인 (최초토큰발행)

Route::get('board/{board_id}',[PostController::class,'index'])->name('board.index'); // 게시판 목록 라우팅

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('unauthorized', function() { // 인증실패에러
    return response()->json([
        'status' => 'error',
        'message' => 'Unauthorized'
    ], 401);
})->name('api.jwt.unauthorized');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('user', [JWTAuthController::class,'user'])->name('api.jwt.user'); // 유저 정보 가져오기
    Route::get('refresh', [JWTAuthController::class,'refresh'])->name('api.jwt.refresh'); // 토큰재발행
    Route::get('logout', [JWTAuthController::class,'logout'])->name('api.jwt.logout'); // 로그아웃

    
    //Route::get('board/{board_id}',[PostController::class,'index'])->name('board.index'); // 게시판 목록 라우팅
    Route::post('board/{board_id}/store',[PostController::class,'store'])->name('board.store'); // 작성글 DB에 추가 ( Create )
    Route::get('board/{board_id}/{id}',[PostController::class,'show'])->name('board.show'); // 글 상세보기 ( Read )
    Route::post('board/{board_id}/{id}',[PostController::class,'update'])->name('board.update'); // 글 수정 ( Update )
    Route::delete('board/{board_id}/{id}', [PostController::class, 'destroy'])->name('board.destroy'); // 글 삭제 ( Delete )

    Route::get('items',[ItemController::class,'index'])->name('item.index'); // 상품 목록 라우팅
    Route::post('items/store',[ItemController::class,'store'])->name('item.store'); // 상품 추가 (Create)
    Route::get('items/{id}',[ItemController::class,'show'])->name('item.show'); // 상품 상세보기 ( Read )
    Route::post('items/{id}',[ItemController::class,'update'])->name('item.update'); // 상품 수정 ( Update )
    Route::delete('items/{id}',[ItemController::class,'destroy']); // 상품 삭제 (Delete)

    Route::post('/comments/store', [CommentController::class,'store'])->name('comment.add'); // 댓글 저장 Create
    Route::delete('/comments/{comment_id}', [CommentController::class, 'destroy'])->name('comment.destroy'); // 댓글 삭제

    Route::post('/reviews/store', [ReviewController::class,'store'])->name('review.add'); // 상품 리뷰 저장 Create
    Route::delete('/reviews/{comment_id}', [ReviewController::class, 'destroy'])->name('review.destroy'); // 상품 리뷰 삭제
    
});