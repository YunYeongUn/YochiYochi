<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\NaverLoginController;
use App\Http\Controllers\LineLoginController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\JWTAuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// 모션
/* Route::get('/motion',function(){
    return Inertia::render('PosePage');
});

Route::get('/pose',function(){ // 모션인식
    return view('posenet');
});
 */


Route::middleware('auth')->group(function () { // 프로필
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Route::get('board/{board_id}',[PostController::class,'index'])->name('board.index'); // 게시판 목록 라우팅
//Route::get('board/{board_id}/{id}',[PostController::class,'show'])->name('board.show'); // 글 상세보기 ( Read )

Route::middleware('auth') -> prefix('board') -> group(function (){
    //Route::get('/{board_id}',[PostController::class,'index'])->name('board.index'); // 게시판 목록 라우팅
    //Route::post('/{board_id}/store',[PostController::class,'store'])->name('board.store'); // 작성글 DB에 추가 ( Create )
    //Route::get('/{board_id}/create',[PostController::class,'create'])->name('board.create'); // 작성페이지로 이동
    //Route::get('/{board_id}/{id}',[PostController::class,'show'])->name('board.show'); // 글 상세보기 ( Read )
    //Route::get('/{board_id}/{id}/edit',[PostController::class,'edit'])->name('board.edit'); // 수정페이지로 이동
    //Route::post('/{board_id}/{id}',[PostController::class,'update'])->name('board.update'); // 글 수정 ( Update )
    //Route::delete('/{board_id}/{id}', [PostController::class, 'destroy'])->name('board.destroy'); // 글 삭제 ( Delete )
});

Route::get('/login/google', [GoogleLoginController::class, 'redirect'])->name('google.login'); //구글로그인
Route::get('/google/callback', [GoogleLoginController::class, 'callback']);
//Route::get('/logout', [GoogleLoginController::class, 'logout']);

Route::get('/login/naver', [NaverLoginController::class, 'redirect'])->name('naver.login'); //네이버
Route::get('/naver/callback', [NaverLoginController::class, 'callback']);

Route::get('/login/line', [LineLoginController::class, 'redirect'])->name('line.login'); //라인
Route::get('/line/callback', [LineLoginController::class, 'callback']);

//Route::post('/comments/store', [CommentController::class,'store'])->name('comment.add'); // 댓글 저장 Create
//Route::delete('/comments/{board_id}/{id}/{comment_id}', [CommentController::class, 'destroy'])->name('comment.destroy'); // 댓글 삭제



//Route::get('items',[ItemController::class,'index'])->name('item.index'); // 상품 목록 라우팅
//Route::post('/items/store',[ItemController::class,'store'])->name('item.store'); // 상품 추가 (Create)
//Route::get('items/{id}',[ItemController::class,'show'])->name('item.show'); // 상품 상세보기 ( Read )
//Route::post('items/{id}',[ItemController::class,'update'])->name('item.update'); // 상품 수정 ( Update )
//Route::delete('items/{id}',[ItemController::class,'destroy']); // 상품 삭제 (Delete)






Route::middleware(['cors'])->group(function(){ // cors, 되는지모름
    Route::get('/csrf_token', function(){
        return csrf_token();
    });
    //Route::post('/boardTest','Controller@board.index');
});







require __DIR__.'/auth.php';