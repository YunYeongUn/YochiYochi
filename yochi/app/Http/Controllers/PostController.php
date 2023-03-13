<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Comment;
use Inertia\Inertia;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Redirect;


class PostController extends Controller
{
    
    //
    public function index($board_id) // 게시판목록
    {  
        
        $posts = Post::OrderBy('created_at', 'desc')->where('board_id', $board_id)->with(
            [
                'users'=>function($query){
                    $query->select(['name','id']);
                }
            ])->get();
        
       
        $returnJson = json_encode($posts);

        return $returnJson;
    }


    public function store(Request $request, $board_id) // 작성글 저장`  
    {   
        request() -> validate([
            'post_title' => 'required',
            'post_content'  => 'required',  
            'attachment' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',                   
        ]);

        $values = request(['post_title', 'post_content']);
        $values['answer'] = 0;
        $values['board_id'] = $board_id;
        $values['writer'] = auth() -> id();

        if($request -> hasFile('attachment')){  
            
            $fileName = time().'_'.$request -> file('attachment') -> getClientOriginalName();
            $path = $request -> file('attachment') -> storeAs('/public/images', $fileName);
            $values['attachment'] = $fileName;

        }
        
        
        $post = Post::create($values);
        $id = $post->id;
        return response()->json([
            'status' => 'success',
            'message' => 'written'
        ], 200);
        
    }

    public function show($board_id, $id) // 글 상세보기 Read & 댓그 목록
    {
        $pocket = Post::where('id',$id)->with(
            [
                'users'=>function($query){
                    $query->select(['name','id']);
                }
            ])->first();

        $commentpocket = Comment::where('post_id',$id)->OrderBy('created_at','desc')->with(
            [
                'users'=>function($query){
                    $query->select(['name','id']);
                }
            ])->get(); 
        
        // return view('board.show',compact(['pocket','commentpocket']));
        $imgPath = asset('storage');
        //return Inertia::render('PostPage', \compact(['pocket', 'commentpocket','imgPath']));

        $returnJson2 = [
            $pocket,
            $commentpocket,
            $imgPath
        ];

        return $returnJson2;
    }

 /*    public function edit($board_id, $id){ // 글 수정페이지로
        $pocket = Post::where('id', $id) -> first();
        // return view('board.edit', compact('pocket'));
        return Inertia::render('EditPage', \compact('pocket'));
    } */

    public function update(Request $request, $board_id, $id){ // 글 수정
        $validation = $request -> validate([
            'post_title' => 'required',
            'post_content' => 'required'
        ]);

        $pocket = Post::where('id', $id) -> first();
        $pocket -> post_title = $validation['post_title'];
        $pocket -> post_content = $validation['post_content'];
        $pocket -> save();

        // return redirect('/post/'.$board_id.'/'.$pocket->id); 
        return response()->json([
            'status' => 'success',
            'message' => 'updated'
        ], 200);
    }

    public function destroy($board_id, $id){ // 글 삭제
        $pocket = Post::where('id', $id) -> first();
        $pocket -> delete();

        // return redirect('/post/'.$board_id);
        return response()->json([
            'status' => 'success',
            'message' => 'deleted'
        ], 200);
    }
}