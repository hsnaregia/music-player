import { MP } from "./autoMediaPlayer.js";
const url = 'http://gr.vaxgame.to:3000';
const pic = document.getElementById('cover');

export function play(data , id){
    let count = 0 ;
    MP();
    for(let index = 0 ; index <data.length ; index++){
       
        if(data.id == id)
        {count = index;
        console.log('inside')
        }
    }
    
    // console.log(`${url}/${data[count].covers}`)
    // pic.src = `${url}/${cover}`;
}


