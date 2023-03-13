<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인페이지</title>

    <a href="/post/1" class="text-xl">게시판1</a>
    <a href="/post/2" class="text-xl">게시판2</a>

    @guest()

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

</body>

</html>