import { comeBack } from "./actions.js";

const navItemsId = ['home' , 'player' , 'artist'];
const nav_pagesId=['main' , 'artists' , 'play_sec'];
const navitems = navItemsId.map(id => document.getElementById(id));
const nav_pages = nav_pagesId.map(id => document.getElementById(id));
const play_sec = document.getElementById('play_sec');
const navBar = document.getElementById('stick_bot_nav');
const main = document.getElementById('main');
const mediaPlayer = document.getElementById('player');
const artist_sect = document.getElementById('art_sect');
export function MP (){
        main.classList.add('hide');
        main.classList.remove('show');
        play_sec.classList.add('show');
        play_sec.classList.remove('hide');
        navBar.classList.add('hide');
        navBar.classList.remove('show');
        artist_sect.classList.add('hide');
        artist_sect.classList.remove('show');

}

comeBack();