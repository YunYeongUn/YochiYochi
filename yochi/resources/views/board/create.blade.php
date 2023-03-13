<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시글 작성</title>
</head>

<body>
    <h1>글 작성</h1>
    <form method="POST" action="/post/store/{{$thisboard}}" enctype="multipart/form-data">
        @csrf
        <div>
            <input type="text" name="post_title" id="post_title" placeholder="제목">
        </div>

        <div>
            <textarea name="post_content" id="post_content" placeholder="내용"></textarea>
        </div>

        <p class="mt-2">
            <label for="picture"></label>
            <input type="file" id="attachment" name="attachment">
        </p>

        <p class="mt-8">
            <input type="submit" value="작성" class="px-4 py-1 bg-green-500 hover:bg-green-700 text-lg text-white">
            <input type="button" value="취소" onclick="history.back()"
                class="px-4 py-1 ml-6 bg-red-500 hover:bg-red-700 text-lg text-white">
        </p>
    </form>
</body>

</html>