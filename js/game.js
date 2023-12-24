const Display = document.querySelector(".gmaeDisplay");
const keobe_head = document.querySelector(".head");
const keobe_body = document.querySelector(".body");
const keobe_left = document.querySelector(".leftArm");
const keobe_right = document.querySelector(".rightArm");
const bulkun = document.querySelector(".bulkun");
let startTime = 0;
let curTime = 0;
let timer;
let HasCookie = true;
let pattern = 1;

const Animation = {
    "bulkun" : "/img/bulkun.GIF",
    "give1" : "/img/give1.gif",
    "give2" : "/img/give2.gif",
    "head_eat" : "/img/head_eat.GIF",
    "head_itai" : "/img/head_itai.GIF",
    "leftArm" : "/img/leftArm.GIF",
    "rightArm" : "/img/rightArm.GIF"
}

Display.addEventListener('mousedown', (e) => {
    keobe_left.src = Animation["leftArm"];
    keobe_right.src = Animation["rightArm"];
    let hitSound = new Audio("/audio/hit.wav");
    hitSound.play();

    curTime = new Date().getTime();
    let hitTime = (curTime - startTime) % 316;
    console.log(hitTime);

    if((hitTime < 25 || hitTime > 290) && HasCookie) {
        Animation["head_eat"];
    }else if(1) {
        Animation["head_itai"];
    }

});

function GameStart() {
    let music = new Audio("/audio/브금v2.mp3");
    music.addEventListener("ended", (e) => {
        clearInterval(timer1);
        clearInterval(timer2);
    })
    startTime = new Date().getTime();
    music.play();
    let i = 0, j = 0;
    setTimeout((e) => {
        timer1 = setInterval((e) => {
            

            i = i + 1;
        }, 316);
    }, 5500);

    setTimeout((e) => {
        timer2 = setInterval((e) => {
            
            if(j % 2 == 0){
                bulkun.src = Animation["give1"];
                
            }else {
                bulkun.src = Animation["give2"];
                
            }

            j = j + 1;
        }, 316);
    }, 5500 - 316 - 20);
    

}