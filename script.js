let audioFiles = ['sounds/sound1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3']; // 音效文件列表
let currentAudioIndex = 0; // 当前播放音效的索引
let audioElement = document.getElementById('bg-audio'); // 获取音效元素

const modelViewer = document.querySelector('model-viewer');
    
var date = new Date();
console.log(date.getMinutes());
if(date.getHours()<11){
    modelViewer.src='assets/ball1.glb';
    modelViewer.poster='image/ball1.png';
}
else{
    modelViewer.src='assets/ball.glb';
    modelViewer.poster='image/ball.png';
}
function isMobileDeviceAR() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|windows phone|blackberry|iemobile/.test(userAgent);
}

const music = document.getElementById('background-music');
const arbutton = document.getElementById('ar');
arbutton.addEventListener("click", function() {
    // 尝试关闭当前页面
    //changeAudio();  // 播放第一种音效
    //setInterval(changeAudio, 60 * 1000);  // 每10分钟切换一次音效
    modelViewer.activateAR();
    //music.play();
});

function changeAudio() {
    audioElement.src = audioFiles[currentAudioIndex];
    audioElement.play();  // 播放音效

    // 更新当前音效索引，循环播放音效
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
}