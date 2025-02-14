let audioFiles = ['sounds/sound1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3']; // 音效文件列表
let currentAudioIndex = 0; // 目前播放音效的索引
let audioElement = document.getElementById('bg-audio'); // 獲取音效元素

const modelViewer = document.querySelector('model-viewer');



var date = new Date();
console.log(date.getMinutes());
if(date.getHours()>18){
    modelViewer.src='assets/night_ball.glb?sounds/sound1.mp3';
    modelViewer.setAttribute('ios-src', 'assets/night_ball.usdz');
    modelViewer.poster='image/night_ball.png';
}
else{
    modelViewer.src='assets/soon_ball.glb?sounds/sound1.mp3';
    modelViewer.setAttribute('ios-src', 'assets/soon_ball.usdz');
    modelViewer.poster='image/soon_ball.png';
}
function isMobileDeviceAR() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|windows phone|blackberry|iemobile/.test(userAgent);
}

const music = document.getElementById('bg-audio');
const arbutton = document.getElementById('ar');



arbutton.addEventListener("click", function() {
    //changeAudio();  // 播放第一種音效
    //setInterval(changeAudio, 60 * 1000);  // 每10分鐘切換一次音效
    //music.play();
    modelViewer.activateAR();

    
});



function changeAudio() {
    audioElement.src = audioFiles[currentAudioIndex];
    audioElement.play();  // 播放音效

    // 更新目前音效索引，循環播放音效
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
}


//const changeBTN = document.getElementById('change');
/*changeBTN.addEventListener("click", function() {
  const material1 = modelViewer.model.materials[0];
  const material2 = modelViewer.model.materials[1];
  console.log(modelViewer.model.materials)
  material1.alphaMode='Blend';
  material2.alphaMode='Blend';
  material1.depthWrite = false;  
  material2.depthWrite = false;
  material1.pbrMetallicRoughness.setBaseColorFactor([0,0,0,0.5]);
  material2.pbrMetallicRoughness.setBaseColorFactor([0,0,0,0.1]);
});*/