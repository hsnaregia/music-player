import { MP } from "./autoMediaPlayer.js";
const url = 'http://gr.vaxgame.top:3000';
const pic = document.getElementById('cover');
const music = document.getElementById('music_name');
const artist = document.getElementById('artist_name');
const audio = document.getElementById('audio');
const audiosource = document.getElementById('audioSource');

const back  = document.getElementById('backward_btn');
const playing = document.getElementById('play_btn');
const forward = document.getElementById('forward_btn');
let isplaying = false ;


export function play(song_list , index){
   var count = index;
    
    MP();
     isplaying =true;
    change_look(song_list,count);
    back.addEventListener('click',function (){
        count--;
        change_look(count);
    })
    forward.addEventListener('click',function (){
        count++;
        change_look(count);
    })
    play_pause();
}

function media_play(src) {
    audiosource.src = `${url}/stream/${src}`;
    audio.load();
    console.log(audiosource.src);
    audio.play().then(() => {
        console.log("Audio is playing.");
    }).catch(error => {
        console.error("Error playing audio:", error);
    });
}

function change_look(){
    pic.src = `${url}/${song_list[count].cover}`;
    music.textContent= song_list[count].name; 
    artist.textContent= song_list[count].artist;
    media_play(song_list[count].src);
}
function play_pause(){
    playing.addEventListener('click' , function() {
        if(isplaying){
            isplaying = false;
            audio.pause();

        }
        else{
            isplaying= true;
            audio.play();
        }
    })
}
