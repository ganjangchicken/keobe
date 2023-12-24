let isloaded = false;

const Animation = {
    "bulkun" : "/img/bulkun.gif",
    "give1" : "/img/give1.gif",
    "give2" : "/img/give2.gif",
    "head_eat" : "/img/head_eat.gif",
    "head_itai" : "/img/head_itai.gif",
    "leftArm" : "/img/leftArm.gif",
    "rightArm" : "/img/rightArm.gif",
    "hit": "/img/cookie_suc.gif",
    "miss": "/img/cookie_fail.gif"
}

const imgList = [
    new Image("/img/temp/02bangbang.png"),
    new Image("/img/temp/05hungry.png"),
    new Image("/img/temp/09needmore.png"),
    new Image("/img/temp/cookie.png"),
    new Image("/img/temp/empty.png"),
    new Image("/img/temp/keobe_body01.png"),
    new Image("/img/temp/keobe_body02.png"),
    new Image("/img/temp/keobe_body03.png"),
    new Image("/img/temp/keobe_body04.png"),
    new Image("/img/temp/keobe_body05.png"),
    new Image("/img/temp/keobe_body06.png"),
    new Image("/img/temp/keobe_hihi.png"),
    new Image("/img/temp/keobe_leftArm0.png"),
    new Image("/img/temp/keobe_rightArm1.png")

]

const gifList = [
    new Image("/img/bg_canteen.png"),
    new Image("/img/bulkun.png"),
    new Image("/img/cookie_fail.png"),
    new Image("/img/cookie_suc.png"),
    new Image("/img/give1.png"),
    new Image("/img/give2.png"),
    new Image("/img/head_eat.png"),
    new Image("/img/head_itai.png"),
    new Image("/img/leftArm.png"),
    new Image("/img/rightArm.png")
]

const audioList = [
    new Audio("/audio/ready.mp3"),
    new Audio("/audio/bgm2.mp3"),
    new Audio("/audio/hit.wav"),
    new Audio("/audio/miss.wav"),
    new Audio("/audio/ok.mp3"),
    new Audio("/audio/result.mp3"),
    new Audio("/audio/supurb.mp3"),
    new Audio("/audio/tryAgain.mp3")
]

audioList[0].onload = () => {
    isloaded = true;
}