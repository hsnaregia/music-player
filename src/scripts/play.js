import { MP } from "./autoMediaPlayer.js";
const url = 'http://gr.vaxgame.top:3000';
const pic = document.getElementById('cover');
const music = document.getElementById('music_name');
const artist = document.getElementById('artist_name');
export function play(song_list , index){
    
    
    MP();
    pic.src = `${url}/${song_list[index].cover}`;
    music.textContent= song_list[index].name; 
    artist.textContent= song_list[index].artist;
    
}
