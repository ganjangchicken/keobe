const Display = document.querySelector(".gmaeDisplay");
const keobe_head = document.querySelector(".head");
const keobe_body = document.querySelector(".body");
const keobe_left = document.querySelector(".leftArm");
const keobe_right = document.querySelector(".rightArm");
const bulkun = document.querySelector(".bulkun");
const cookie = document.querySelector(".cookie");
const music = new Audio("/audio/bgm2.mp3");
const MAX_HIT_COUNT = 69;
let isStart = false;
let startTime = 0;
let curTime = 0;
let timer;
let HasCookie = true;
let hitCount = 0;
let missCount = 0;

Display.addEventListener('mousedown', (e) => {

    if(isStart){

        keobe_left.src = Animation["leftArm"];
        keobe_right.src = Animation["rightArm"];
        let hitSound = new Audio("/audio/hit.wav");
        hitSound.play();

        let hitTime1 = parseInt(music.currentTime * 1000000 - 5800000) % 634920;
        let hitTime2 = parseInt(music.currentTime * 1000000 - 5800000) % 317460;
        
        console.log(`ht1: ${hitTime1 / 1000000} curtime : ${music.currentTime  * 1000000}, j: ${timer}`);
        // 1.111111 >> 1111111
        // 0.05     >> 0050000
        if((hitTime2 < 180000 || hitTime2 > 242460) && 
            (timer == 13 || timer == 29 || timer == 45 ||
            timer == 61 || timer == 65 || timer == 69 ||
            timer == 105 || timer == 109)) {
            keobe_head.src = Animation["head_eat"];
            cookie.src = Animation["hit"];
            hitCount = hitCount + 1;
        }
        else if((hitTime2 < 75000 || hitTime2 > 242460) && timer % 2 == 1) {
            keobe_head.src = Animation["head_eat"];
            cookie.src = Animation["hit"];
            hitCount = hitCount + 1;
        }
        else if((hitTime2 < 75000 || hitTime2 > 242460) &&
                (timer == 10 || timer == 70 || timer == 78 || timer ==86 || timer == 94)) {
            keobe_head.src = Animation["head_eat"];
            cookie.src = Animation["hit"];
            hitCount = hitCount + 1;
        }
        else if(true) {
            keobe_head.src = Animation["head_itai"];
            cookie.src = Animation["miss"];
            missCount = missCount + 1;
        }

        if(hitCount == 15) {
            keobe_body.src = "/img/temp/keobe_body02.png";
        }else if(hitCount == 30){
            keobe_body.src = "/img/temp/keobe_body03.png";
        }else if(hitCount == 40){
            keobe_body.src = "/img/temp/keobe_body04.png";
        }else if(hitCount == 50){
            keobe_body.src = "/img/temp/keobe_body05.png";
        }else if(hitCount == 60){
            keobe_body.src = "/img/temp/keobe_body06.png";
        }

    }
});

function GameStart() {
    let timer1, timer2, timer3;
    
    music.addEventListener("ended", (e) => {
        
        document.querySelector(".evaluation").style.zIndex = 10;
        document.querySelector(".evaluation").style.opacity = 1;
        isStart = false;
        let ment1 = document.querySelector(".ment1");
        let ment2 = document.querySelector(".ment2");
        let ment3 = document.querySelector(".ment3");
        let ment4 = document.querySelector(".ment4");
        let result = document.querySelector(".result");

        setTimeout((e) => {
            new Audio("/audio/result.mp3").play();

            ment1.innerText = `맛있게 먹은 개수: ${hitCount}개`;
            ment2.innerText = `틀린 개수: ${missCount}`;
        },1000);
        setTimeout((e) => {
            ment3.innerText = `결과: ${hitCount} / 69`;
        },2000);
        setTimeout((e) => {
            if(hitCount < 35) {
                ment4.innerText = `좀 더 열심히!`;
                result.src = "/img/temp/05hungry.png";
                new Audio("/audio/tryAgain.mp3").play();
            }else if( hitCount < 55) {
                ment4.innerText = `어쨋든 합격!`;
                result.src = "/img/temp/09needmore.png";
                new Audio("/audio/ok.mp3").play();
            }else {
                ment4.innerText = `참 잘했어요!`;
                result.src = "/img/temp/02bangbang.png";
                new Audio("/audio/supurb.mp3").play();
            }
        },3000);
        

    })
    startTime = new Date().getTime();
    music.play();
    let i = 0, j = 0, k = 0;

    setTimeout((e) => {
        timer3 = setInterval((e) => {
            
            if(j >= 111){
                clearInterval(timer3);
            }

            timer = j;

            if(j % 2 == 0){
                bulkun.src = Animation["give1"];
                
            }else {
                bulkun.src = Animation["give2"];
                cookie.src = "/img/temp/cookie.png";
            }

            j = j + 1;
        }, 316);
    }, 5500 - 316 - 18);

}
//3 20 22 24 26 (* 4 이얼싼스)
//4 8 12 16 17 18 19 27 28 (-1 * 4 둘둘)