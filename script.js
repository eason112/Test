let audioFiles = ['sounds/sound1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3']; // 音效文件列表
let currentAudioIndex = 0; // 目前播放音效的索引
let audioElement = document.getElementById('bg-audio'); // 獲取音效元素

const modelViewer = document.querySelector('model-viewer');
    
var date = new Date();
console.log(date.getMinutes());
if(date.getHours()<9){
    modelViewer.src='assets/ball1.glb';
    modelViewer.setAttribute('ios-src', 'assets/ball1.usdz');
    modelViewer.poster='image/ball1.png';
}
else{
    modelViewer.src='assets/ball.glb';
    modelViewer.setAttribute('ios-src', 'assets/ball.usdz');
    modelViewer.poster='image/ball.png';
}
function isMobileDeviceAR() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|windows phone|blackberry|iemobile/.test(userAgent);
}

const music = document.getElementById('background-music');
const arbutton = document.getElementById('ar');
arbutton.addEventListener("click", function() {
    //changeAudio();  // 播放第一種音效
    //setInterval(changeAudio, 60 * 1000);  // 每10分鐘切換一次音效
    modelViewer.activateAR();
    //music.play();
});

function changeAudio() {
    audioElement.src = audioFiles[currentAudioIndex];
    audioElement.play();  // 播放音效

    // 更新目前音效索引，循環播放音效
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
}
