<html>

<head>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet@2.2.2/dist/posenet.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core@3.11.0/dist/tf-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter@3.11.0/dist/tf-converter.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl@3.11.0/dist/tf-backend-webgl.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection@0.0.6/dist/pose-detection.min.js">
    </script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <style>
    /* 이미지에 캔버스를 겹쳐서 그리기 위함 */
    #canvas {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        /* background-color : black */
    }

    #e_canvas {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }

    video {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }

    #line {
        border: 3px solid #FFA3D4;
    }

    #text {
        font-size: 23px;
        width: 300px;
        height: 30px;
    }

    #auth {
        width: 100px;
        height: 30px;
    }
    </style>
</head>

<body>
    <video id="video" width="640" height="480" autoplay muted playsinline></video>
    <canvas id="canvas"></canvas>
    <canvas id="e_canvas" width="640" height="480"></canvas>
    <div id="canvas" style="width:300px;height:200px;"></div>
    <hr>
    <input id="text" placeholder="text" onkeypress="keydown(event.keyCode)">
    <button onclick="keydown(13)">인증</button><br>
    <b id="point"></b> / <b id="heart"></b>
</body>
<script src="posnet.js"></script>
<script src="object.js"></script>

</html>