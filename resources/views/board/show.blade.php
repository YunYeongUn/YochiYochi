<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>상세보기</title>
</head>

<body>
    <h1>글 상세페이지</h1>
    <div>
        {{ $pocket->post_title }}
    </div>
    <div>
        <?php 
            $checkImage = $pocket->attachment;
            $checkPath = asset('storage');
         ?>
        <br>

        @if($checkImage != null)
        <img src="{{$checkPath.'/'.'images/'.$pocket->attachment}}" alt="1" style="width: 50%; height: 50%"><br>
        @endif

        {{ $pocket->post_content }}
    </div>

    <div class="mt-8">
        <a href="/post/{{$pocket -> board_id}}/{{ $pocket->id }}/edit">
            <button class="px-4 py-1 text-white text-lg bg-blue-500 hover:bg-blue-700">수정</button>
        </a>
        <form action="/post/{{$pocket -> board_id}}/{{$pocket -> id}}" method="post" class="inline-block">
            @csrf
            @method('DELETE')
            <button class="px-4 py-1 text-white text-lg bg-red-500 hover:bg-red-700">삭제</button>
        </form>
        <a href="/post/{{$pocket -> board_id}}">
            <button class="px-4 py-1 text-white text-lg bg-blue-500 hover:bg-blue-700">목록</button>
        </a>
    </div>

    @auth()
    <div class="w-4/5 mx-auto mt-6 text-right">
        <form method="post" action="{{route('comment.add')}}">
            @csrf
            <input type="hidden" name="post_id" value="{{$pocket->id}}">
            <textarea name="comment" class="border border-blue-300 resize-none w-full h-32"></textarea>
            <input type="submit" value="작성" class="mt-4 px-4 py-1 bg-gray-500 hover:bg-gray-700 text-gray-200">
        </form>
    </div>
    @endauth

    <div class="w-5/6 mx-auto mt-8 border-t border-gray-500">
        @foreach($commentpocket as $item)
        <div class="mt-4 w-full border-b border-gray-500">
            <p class="font-bold mb-2 ml-2">{{$item->users->name}}</p>
            <div class="mb-2">
                {{$item->comment}}
                <form action="/comments/{{$pocket -> board_id}}/{{$pocket -> id}}/{{$item -> id}}" method="post"
                    class="inline-block">
                    @csrf
                    @method('DELETE')
                    <button class="px-4 py-1 text-white text-lg bg-red-500 hover:bg-red-700">삭제</button>
                </form>
            </div>
        </div>
        @endforeach
    </div>

</body>

</html>