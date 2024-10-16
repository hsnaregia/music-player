import { play } from "./play.js";
import { artist_fetch } from "../services/config.js";
const slideIds = ["slider1", "slider2", "slider3"];
let currentIndex = 0;
const ram = document.getElementById('ram_box');
const cold = document.getElementById('cold_box');
const mohsen = document.getElementById('mohsen_box')
const smallplayer = document.getElementById('small_player');
const artist = document.getElementById('art_sect');
const artist_sec = document.getElementById('artists')
const exit_page = document.getElementById('exit2');




export function artists_page_open(){
  ram.addEventListener('click' , function (){
    nav.classList.remove('show');
    nav.classList.add('hide');

    artist.classList.add('show');
    artist.classList.remove('hide');
    artist_sec.classList.add('hide');
    artist_sec.classList.remove('show');
    artist_fetch('ramstin');


  })

  cold.addEventListener('click',function (){
    nav.classList.remove('show');
    nav.classList.add('hide');

    artist.classList.add('show');
    artist.classList.remove('hide');
    artist_sec.classList.add('hide');
    artist_sec.classList.remove('show');
    artist_fetch('coldplay');


  })
  mohsen.addEventListener('click' , function (){
    nav.classList.remove('show');
    nav.classList.add('hide');

    artist.classList.add('show');
    artist.classList.remove('hide');
    artist_sec.classList.add('hide');
    artist_sec.classList.remove('show');
    artist_fetch('mohsenlorestani');



  })

  exit_page.addEventListener('click' , function(){
    var artist_bkg = document.getElementById('artist_page_pic');
    var Info = document.getElementById('artist_info');
    
    artist.classList.add('hide');
    artist.classList.remove('show');
    artist_sec.classList.add('show');
    artist_sec.classList.remove('hide');
    nav.classList.add('show');
    nav.classList.remove('hide');
    artist_bkg.style.backgroundImage= "url()";
    Info.textContent = '';
  })
}

///////////
function showSlide(index) {
  slideIds.forEach((id, i) => {
    const slide = document.getElementById(id);
    if (i === index) {
      slide.classList.remove("hide");
      slide.classList.add("show", "animate-slide-in-right");
      slide.classList.remove("slide-out-left");
    } else {
      slide.classList.remove("slide-in-right", "show");
      slide.classList.add("hide");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideIds.length;
  showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
showSlide(currentIndex); // Show the first 

export { slideIds, currentIndex, showSlide, nextSlide };


const nav = document.getElementById('stick_bot_nav');
const navItemsId = ['home' , 'player' , 'artist'];
const nav_pagesId=['main' , 'artists' , 'play_sec'];
const navitems = navItemsId.map(id => document.getElementById(id));
const nav_pages = nav_pagesId.map(id => document.getElementById(id));
export function click(){
  navitems.forEach(Element => {
    if(Element){
      Element.addEventListener('click' ,function(){
        clear_look();
        this.classList.add('activate');
        if (this.id == 'home') {
          nav_pages[0].classList.remove('hide');
          nav_pages[0].classList.add('show');
          nav.classList.remove('hide');
          nav.classList.add('show');
        } else if (this.id == 'player') {
          nav_pages[2].classList.remove('hide');
          nav_pages[2].classList.add('show');
          nav.classList.remove('show');
          nav.classList.add('hide');
        } else if (this.id == 'artist') {
          nav_pages[1].classList.remove('hide');
          nav_pages[1].classList.add('show');
          nav.classList.remove('hide');
          nav.classList.add('show');
        }
      })
    }
  })
}

export function comeBack() {
  const back = document.getElementById('close_player'); 
    back.addEventListener('click', function () {
      nav_pages[2].classList.remove('show');
      nav_pages[2].classList.add('hide');

      nav_pages[0].classList.remove('hide');
      nav_pages[0].classList.add('show');

      nav.classList.add('show');
      nav.classList.remove('hide');

      navitems[0].classList.add('activate');
      navitems[1].classList.remove('activate');

      
    });
}

function clear_look(){
  for(let index = 0 ; index<navitems.length ; index++){
    if(navitems[index].classList.contains('activate')){
      navitems[index].classList.remove('activate');
    }
  }
  for(let index=0 ; index<nav_pages.length; index++){
    if(nav_pages[index].classList.contains('show'))
     { nav_pages[index].classList.remove('show')
      nav_pages[index].classList.add('hide')
    }
    }
}

const left_move = document.getElementById('left-angle');
const right_move = document.getElementById('right-angle');
const rec_sec = document.getElementById('rec-music-prt');

export function move_around (){
  
 left_move.addEventListener('click',function(){
  rec_sec.scrollBy({
    left:-90 ,
    behavior:"smooth"
  });
 }) ;
 right_move.addEventListener('click',function (){
    rec_sec.scrollBy({
      left:90 ,
      behavior:"smooth"
    });
 });
}


