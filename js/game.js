const Display = document.querySelector(".gmaeDisplay");
const keobe_head = document.querySelector(".head");
const keobe_body = document.querySelector(".body");
const keobe_left = document.querySelector(".leftArm");
const keobe_right = document.querySelector(".rightArm");
const bulkun = document.querySelector(".bulkun");
const cookie = document.querySelector(".cookie");
const music = new Audio("/audio/브금v2.mp3");
const MAX_HIT_COUNT = 69;
let isStart = false;
let startTime = 0;
let curTime = 0;
let timer;
let HasCookie = true;
let hitCount = 0;
let missCount = 0;

const Animation = {
    "bulkun" : "/img/bulkun.GIF",
    "give1" : "/img/give1.gif",
    "give2" : "/img/give2.gif",
    "head_eat" : "/img/head_eat.GIF",
    "head_itai" : "/img/head_itai.GIF",
    "leftArm" : "/img/leftArm.GIF",
    "rightArm" : "/img/rightArm.GIF",
    "hit": "/img/cookie_suc.gif",
    "miss": "/img/cookie_fail.gif"
}

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
            keobe_body.src = "/img/temp/케오베_몸02.PNG";
        }else if(hitCount == 30){
            keobe_body.src = "/img/temp/케오베_몸03.PNG";
        }else if(hitCount == 40){
            keobe_body.src = "/img/temp/케오베_몸04.PNG";
        }else if(hitCount == 50){
            keobe_body.src = "/img/temp/케오베_몸05.PNG";
        }else if(hitCount == 60){
            keobe_body.src = "/img/temp/케오베_몸06.PNG";
        }

    }
});

function GameStart() {
    let timer1, timer2, timer3;
    
    music.addEventListener("ended", (e) => {
        
        console.log(hitCount);
        let ment1 = document.querySelector(".ment1");
        let ment2 = document.querySelector(".ment2");
        let ment3 = document.querySelector(".ment3");

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
                cookie.src = "/img/temp/쿠키.PNG";
            }

            j = j + 1;
        }, 316);
    }, 5500 - 316 - 18);

}
//3 20 22 24 26 (* 4 이얼싼스)
//4 8 12 16 17 18 19 27 28 (-1 * 4 둘둘)