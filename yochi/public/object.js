const e_canvas = document.getElementById("e_canvas");
const e_ctx = e_canvas.getContext("2d");

/**
 * @description 랜덤으로 길이에 해당하는 스트링을 생성해주는 함수
 * @param {number} num 랜덤 스트링 길이 
 * @returns {string} 랜덤스트링
 */
const generateRandomString = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

/**
 * @description 대충 사각형 그리는 함수 - 그리고 코드구경하다가 주석을 자꾸 이상하게 달길래 말하는데 jsdocs를 쓰면 알아보기 쉽답니다?
 * @param {CanvasRenderingContext2D} ctx canvas의 2D CONTEXT
 * @param {number} x 렌더링될 x좌표
 * @param {number} y 렌더링될 y좌표
 */
function drawSquare(ctx, x, y) {
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.stroke();
}

function calcCoordInLine(src, des, x) {
    const y = (des.y - src.y / des.x - src.x) * (x - src.x) + src.y
    return { x, y }
}

function checkTouch(target, object) {
    return target.x > object.x_coor && target.x < object.x_coor + 20 && target.y > object.y_coor && target.y < object.y_coor + 20
}


/**
 * @description 캔버스상에 그리기 함수를 모아놓고 한번에 실행해 애니메이션을 만드는 함수
 * @param {CanvasRenderingContext2D} ctx canvas의 2D CONTEXT
 * @param {number} speed 사각형 내려오는거 속도
 */
function draw(ctx, speed) {

    // 객체
    const coorObj = {} // 좌표 top_left : {x_coor, y_coor} top_right : {x_coor+width, y_coor} bottom_left : {x_coor, y_coor+height} bottom_right : {x_coor+width, y_coor+height}
    // 좌표 이러니까 대충 손이 저 좌표안으로 들어오면 객체 터지게 하면되지않을까? 
    // 그니까 손이라고 판명난 좌표중에 x_coor 보다 크고 x_coor+width 보다 작은거 y_coor보다 크고 y_coor+height 보다 작은 좌표가 있으면 객체를 맞춘거잖아? ^_^
    // 이 정도면 다 짠거같음. 그리고 빨리 술이나 사주셈

    // 1초마다 객체 생성코드
    setInterval(() => {
        coorObj[generateRandomString(10)] = {
            x_coor: Math.random() * (640 - 20), // 640 : canvas width , 20 : rect width
            y_coor: 0,
        }
    }, [2000])

    const render = () => {
        ctx.clearRect(0, 0, e_canvas.width, e_canvas.height);
        // 만들어진 객체 키를 이용해 사각형을 그리는 함수
        Array.from(Object.keys(coorObj)).forEach((el) => {
            const { x_coor, y_coor } = coorObj[el];
            var tempKey = undefined

            coordArr.forEach(coord => {
                if (checkTouch(coord, coorObj[el])) {
                    tempKey = el
                }
            });


            // 사각형 파괴 => 잘은 모르겠는데 이러면 수명까이면 되는거아님?
            if (y_coor > 480 || tempKey) {
                delete coorObj[el]
                return;
            }

            // 마우스 갖다대봐 함수에다가 주석나오거든 이렇게 주석 짜놓으면 언제 어디서나 편하게 볼수있지않을까?
            // 이정도면 많이 알려준듯 그니까 술이나 사주셈
            drawSquare(ctx, x_coor, y_coor)
            //스피드에 따라 대충 속도변환
            coorObj[el].y_coor = y_coor + speed

            console.log(coorObj)
        })

        console.log(coorObj)

        window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);
}





draw(e_ctx, 1)

