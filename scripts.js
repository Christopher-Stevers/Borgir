const button=document.getElementById("button");
console.log(button);
const audio=document.getElementById(`audio`);
console.log(audio);
const playMusicLoop=()=>{audio.play();
audio.loop=true;
button.removeEventListener("click", playMusicLoop);
button.addEventListener("click",function(){audio.pause();

    button.addEventListener('click', playMusicLoop);
})
}
button.addEventListener('click', playMusicLoop);