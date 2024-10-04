const slideIds = ["slider1", "slider2", "slider3"];
let currentIndex = 0;

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




const navItemsId = ['home' , 'player' , 'user'];
const navitems = navItemsId.map(id => document.getElementById(id));

export function click(){
  navitems.forEach(Element => {
    if(Element){
      Element.addEventListener('click' ,function(){
        clear_look();
        this.classList.add('activate');
      })
    }
  })
}

function clear_look(){
  for(let index = 0 ; index<navitems.length ; index++){
    if(navitems[index].classList.contains('activate'))
      navitems[index].classList.remove('activate');
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
