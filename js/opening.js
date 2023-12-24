
const StartBtn = document.querySelector(".startBtn");

StartBtn.addEventListener('mouseup', (e) => {
    let openingSong = new Audio("/audio/수행자시작.mp3");
    openingSong.addEventListener('ended', (e) => {
        isStart = true;
        StartBtn.remove();
        GameStart();
    })
    openingSong.play();
    
});

