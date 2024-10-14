import { MP } from "./autoMediaPlayer.js";
const url = 'http://gr.vaxgame.top:3000';
const pic = document.getElementById('cover');
const music = document.getElementById('music_name');
const artist = document.getElementById('artist_name');
const audio = document.getElementById('audio');
const audiosource = document.getElementById('audioSource');

const back  = document.querySelectorAll('.backward_btn');
const playing = document.querySelectorAll('.play_btn');
const forward = document.querySelectorAll('.forward_btn');

let isplaying = false ;

const image = document.getElementById('song_img');
const name = document.getElementById('song_name');

const mini =  document.getElementById('small_player');
const nav = document.getElementById('stick_bot_nav');

let intervalId; 
export function play(song_list , index ,end){
   var count = index;
    
    MP();
    isplaying =true;
    
    play_pause();
    
    change_look(song_list,count);
    back.forEach((element) => {
        element.addEventListener('click',function (){
            count--;
            if(count< 0)
                count=song_list.length-1;
            change_look(song_list , count);
            
        })
    })
    forward.forEach((element) => {
        element.addEventListener('click',function (){
            count++;
            if(count>song_list.length-1)
                count = 0;
            change_look(song_list , count);
           
        })
    })
    audio.addEventListener('ended', function () {
        count++;
        if (count >= song_list.length) count = 0; 
        change_look(song_list, count); 
    });
    
    mini_player();
}
// ///////////////
function music_timer(src) {
    const totalTime= document.getElementById('total-Time');
    const progressSlider = document.getElementById('progress');
    audio.addEventListener('loadedmetadata', function() {
        console.log( `Duration: ${audio.duration} seconds`);
        const totalSeconds = audio.duration;
        const minutes = Math.floor(totalSeconds / 60); 
        const seconds = Math.floor(totalSeconds % 60);
        totalTime.textContent = `${minutes}:${seconds}`;
        timer(Math.floor(totalSeconds));
    });
    
}

function timer(total){
    let currentTime = document.getElementById('current-Time');
    let b=0 , c=0 , d=0;
    let counter;
    intervalId = setInterval(() => {
       if(isplaying){ d++;
        if(d==10){
            d=0;
            c++;
            if(c==6&d==0){
                c=0;
                b++;
            }
        }
        currentTime.textContent = `0${b}:${c}${d}`;  
        
    }else{
            intervalId = clearInterval;
            
        }
        
    },1000);
}
////////////////////////
function media_play(src) {
    
    audiosource.src = `${url}/stream/${src}`;
    audio.load();
    console.log(audiosource.src);
    music_timer(src);
    audio.play().then(() => {
        console.log("Audio is playing.");
    }).catch(error => {
        console.error("Error playing audio:", error);
    });
}

function change_look(song_list , count){
    console.log(count);
    pic.src = `${url}/${song_list[count].cover}`;
    music.textContent= song_list[count].name; 
    artist.textContent= song_list[count].artist;
    image.src =`${url}/${song_list[count].cover}` ;
    name.textContent =song_list[count].name;


    media_play(song_list[count].src);
    
}
export function play_pause(){
    playing.forEach((element) => {
        element.addEventListener('click' , function() {
            if(isplaying){
                isplaying = false;
                audio.pause();
    
            }
            else{
                isplaying= true;
                audio.play();
            }
        })
    })
}

function mini_player(){
    if(isplaying){
        nav.classList.contains('show');
        mini.classList.add('show');
        mini.classList.remove('hide');
    }
    else if(!isplaying || !nav.classList.contains('show')){
        mini.classList.add('hide');
        mini.classList.remove('show');
    }
}

