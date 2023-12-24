
const StartBtn = document.querySelector(".startBtn");

StartBtn.addEventListener('mouseup', (e) => {

    let openingSong = new Audio("./audio/ready.mp3");
    openingSong.addEventListener('ended', (e) => {
        isStart = true;
        StartBtn.remove();
        GameStart();
    })
    openingSong.play();
});

