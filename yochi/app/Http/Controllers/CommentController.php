<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class CommentController extends Controller
{
    public function store(Request $request){ // 댓글 작성 Create
        $validator = Validator::make(request()->all(), [
            'post_id' => 'required',
            'comment' => 'required|max:255'
        ]);

        // 관리자 답변 -------------------- 
        $whoRU = User::where('id',auth() -> id()) -> first();

        $admincheck = $whoRU->authority;
        if($admincheck == 'admin'){
            $RUadmin = Post::where('id',request() -> post_id) -> first();
            $RUadmin -> answer = 1;
            $RUadmin -> save();
        }
        // ---------------------------

        Comment::create([
            'post_id' => request() -> post_id,
            'writer' => auth() -> id(),
            'comment' => request() -> comment
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Comment Stored'
        ], 200);
        
    }

    public function destroy($comment_id){ // 댓글 삭제 Delete
        $pocket = Comment::where('id', $comment_id) -> first();
        $pocket -> delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Comment Deleted'
        ], 200);
    }
}