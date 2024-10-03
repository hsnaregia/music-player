

const url = 'http://gr.vaxgame.top:3000';
const rec_box_img = [];
const rec_box_p = [];
for(let index =0 ; index <11 ; index++){
    rec_box_img[index] = document.querySelector(`.box${index+1} img`);
    rec_box_p[index] = document.querySelector(`.box${index+1} p`);
    console.log(rec_box_img[index]);
}
export async function fetch_data(){
    const res = await fetch(`${url}/api/enallsong`);
    const data = await res.json();
    recommended(data);
}

function recommended(data){
    
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
        rec_box_p[index].textContent=songs[index].name;
    }

}
