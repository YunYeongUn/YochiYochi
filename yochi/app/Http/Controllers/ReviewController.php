<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Itemreview;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    public function store(Request $request){ // 댓글 작성 Create
        $validator = Validator::make(request()->all(), [
            'item_id' => 'required',
            'comment' => 'required|max:255'
        ]);

        Itemreview::create([
            'item_id' => request() -> item_id,
            'writer' => auth() -> id(),
            'comment' => request() -> comment
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'written'
        ], 200);
        
    }

    public function destroy($review_id){ // 댓글 삭제 Delete
        $pocket = Itemreview::where('id', $review_id) -> first();
        $pocket -> delete();

        return response()->json([
            'status' => 'success',
            'message' => 'deleted'
        ], 200);
    }
}