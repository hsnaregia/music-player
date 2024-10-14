import { play } from "../scripts/play.js";

const rec_box_img = [];
const rec_box_p = [];
for (let index = 0; index < 11; index++) {
    rec_box_img[index] = document.querySelector(`.box${index + 1} img`);
    rec_box_p[index] = document.querySelector(`.box${index + 1} p`);

   
}

export function recommended(data ,url){
    
    const songs = data.songs ;
    console.log(songs);
  
    let currentIndex = songs.length ; 
    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [songs [currentIndex],songs[randomIndex]] = [songs[randomIndex] , songs[currentIndex]];
    }
    
    for(let index = 0 ; index<11 ; index ++){
       
        
        rec_box_img[index].src = `${url}/${songs[index].cover}`;
        console.log(`${url}/${songs[index].cover}`);
        rec_box_p[index].textContent=songs[index].name;
        if (rec_box_p[index]) {
            rec_box_p[index].addEventListener('click', () => {
                
                play(songs ,index,songs.length);
        });
        }  
    }

}
