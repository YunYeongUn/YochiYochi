<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판</title>

    @guest()
    <a href="" class="text-xl">게시판</a>
    <a href="{{route('auth.login.index')}}" class="text-xl">로그인</a>
    <a href="{{route('auth.register.index')}}" class="text-xl">회원가입</a>
    @endguest

    @auth()
    <span class="text-xl text-blue-500">{{auth() -> user() -> name}}</span>
    <form action="/auth/logout" method="post" class="inline-block">
        @csrf
        <a href="{{route('auth.logout')}}"><button class="text-xl">로그아웃</button></a>
    </form>
    @endauth
</head>

<body>
    <div class="h-screen px-64 mt-5">
        @auth()
        <div class="float-right">
            <a href="/post/create/{{$thisboard}}">
                <button
                    class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border border-gray-900">Post登録</button>
            </a>
        </div>
        @endauth
        <div class="border-b-4 border-gray-800 mt-12 mb-5">
            <h1 class="text-3xl font-bold">Board</h1>
        </div>
        <ul class="p-3">
            @foreach($posts as $post)
            <a href="/post/{{$post->board_id}}/{{$post->id}}">
                <li class="border-4 border-gray-500 px-2 py-2 mt-4">제목 : {{ $post-> post_title }}<br> <small
                        class="float-right">작성자: {{ $post -> users -> name}}</small><br>
                    내용 : {{ $post -> post_content }} </li>
            </a>
            @endforeach
        </ul>

    </div>
</body>

</html>