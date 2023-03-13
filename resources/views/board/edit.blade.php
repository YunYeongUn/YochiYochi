<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시글 수정</title>
</head>

<body>
    <form action="/post/{{$pocket -> board_id}}/{{$pocket -> id}}" method="post">
        @csrf
        <p>
            <label for="title" class="text-xl">제목 : </label>
            <input type="text" id="post_title" name="post_title" value="{{$pocket -> post_title}}"
                class="outline-none border border-blue-400 w-1/2 pl-1 py-1 rounded-lg">
        </p>
        <p class="mt-4">
            <label for="content" class="text-xl">내용</label>
            <textarea id="post_content" name="post_content"
                class="outline-none border border-blue-400 w-full h-64 mt-2 rounded-lg resize-none">{{$pocket -> post_content}}</textarea>
        </p>
        <p class="mt-8">
            <input type="submit" value="수정" class="px-4 py-1 bg-green-500 hover:bg-green-700 text-lg text-white">
            <input type="button" value="취소" onclick="history.back()"
                class="px-4 py-1 ml-6 bg-red-500 hover:bg-red-700 text-lg text-white">
        </p>
    </form>
</body>

</html>