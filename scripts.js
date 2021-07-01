const button=document.getElementById("button");
console.log(button);
const audio=document.getElementById(`audio`);
console.log(audio);
const playMusicLoop=()=>{audio.play();
audio.loop=true;}
button.addEventListener('click', playMusicLoop);