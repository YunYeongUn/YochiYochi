<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Itemreview;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Models\Category;


class ItemController extends Controller
{
    public function index() // 상품목록
    {  
        
        $items = Item::OrderBy('created_at', 'desc')->get();
        
       
        $returnJson = json_encode($items);
       

        return $returnJson;
    }

    public function store(Request $request) // 상품 저장`  
    {   
        request() -> validate([
            'item_title' => 'required',
            'item_content'  => 'required', 
            'category' => 'required',
            'price' => 'required',
            'attachment' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',                   
        ]);

        $values = request(['item_title', 'item_content', 'price', 'category']);

        if($request -> hasFile('attachment')){  
            
            $fileName = time().'_'.$request -> file('attachment') -> getClientOriginalName();
            $path = $request -> file('attachment') -> storeAs('/public/images', $fileName);
            $values['attachment'] = $fileName;

        }
        
        
        $item = Item::create($values);
      

        return response()->json([
            'status' => 'success',
            'message' => 'Item Uploaded'
        ], 200);
    }

    public function show($id) // 상품 상세보기 Read & 댓그 목록
    {
        $pocket = Item::where('id',$id)->first();
        
        $imgPath = asset('storage');
        
        $returnJson2 = [
            $pocket,
            $imgPath
        ];

        return $returnJson2;
    }

    public function update(Request $request, $id){ // 상품 수정
        $validation = $request -> validate([
            'item_title' => 'required',
            'item_content' => 'required',
            'category' => 'required',
            'price' => 'required',
        ]);

        $pocket = Item::where('id', $id) -> first();
        $pocket -> item_title = $validation['item_title'];
        $pocket -> item_content = $validation['item_content'];
        $pocket -> category = $validation['category'];
        $pocket -> price = $validation['price'];
        $pocket -> save();

        return response()->json([
            'status' => 'success',
            'message' => 'Item Updated'
        ], 200);
    }

    public function destroy($id){ // 상품 삭제
        $pocket = Item::where('id', $id) -> first();
        $pocket -> delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Item Deleted'
        ], 200);
    }

}