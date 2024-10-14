import { play } from "./play.js";



var artist_bkg = document.getElementById('artist_page_pic');
var Info = document.getElementById('artist_info');
let artist_info = ["Rammstein is a German industrial metal band known for their intense sound and dramatic performances. Famous for songs like Du Hast, they blend metal and electronic music. Their lyrics and shows often provoke strong reactions." ,"Coldplay is a British rock band known for their melodic and uplifting music. Formed in 1996, the band is famous for hits like Fix You and Viva La Vida. Their music blends rock with pop, creating anthemic, emotional songs that resonate globally. " ,"Mohsen Lorestani is a Kurdish-Iranian singer known for emotional songs about love and heartbreak. He sings in both Kurdish and Persian. His heartfelt lyrics have gained him a strong following."]
const music_cont = document.getElementById('music_container');
const music_box = document.getElementById('music_box');




export function page(data ,url){
    console.log(data);
    console.log(`${url}/${data.image}`);
    let img_src=`${url}/${data.image}`;
    artist_bkg.style.backgroundImage = "url("+img_src+')'; 
    artist_bkg.style.backgroundSize = "cover";   
    artist_bkg.style.backgroundPosition = "top"; 
    artist_bkg.style.backgroundRepeat = "no-repeat";
    console.log(data.name)
    if(data.name == 'ramstin'){
        Info.textContent = `${artist_info[0]}`
    }else if(data.name == 'coldplay'){
        Info.textContent =`${artist_info[1]}`
    }else if(data.name == 'mohsenlorestani'){
        Info.textContent =`${artist_info[2]}`;
    }
    console.log(data.songs);
    console.log(`${url}/${data.songs[0].cover}`);
    generator(data.songs.length , data ,url);
    
}



function generator(num, data, url) {
    
    music_cont.innerHTML = '';

    for (let index = 0; index < num; index++) {
        const cloned = music_box.cloneNode(true);
        cloned.id = `music_box_${index}`;

        // Update cloned element content
        cloned.querySelector('#artist_img_mini').src = `${url}/${data.songs[index].cover}`;
        cloned.querySelector('#artist_music_mini').textContent = data.songs[index].name;
        cloned.querySelector('#artist_name_mini').textContent = data.songs[index].artist;

        // Add event listener for each music box
        cloned.addEventListener('click', function() {
            let id = parseInt(cloned.id.slice(10, 11));
            
            play(data.songs,id ,data.songs.length)
        });

        music_cont.appendChild(cloned);
    }
}



// {
//     "name": "coldplay",
//     "artist": "Coldplay",
//     "genre": "Pop",
//     "image": "artists/coldplay.jpg",
//     "songs": [
//         {
//             "id": 1,
//             "name": "Fix You",
//             "artist": "Coldplay",
//             "src": "ColdplayFixYou.mp3",
//             "format": "mp3",
//             "cover": "covers/ColdplayFixYou.jpg"
//         },
//         {
//             "id": 2,
//             "name": "Yellow",
//             "artist": "Coldplay",
//             "src": "ColdplayYellow.mp3",
//             "format": "mp3",
//             "cover": "covers/ColdplayYellow.jpg"
//         },
//         {
//             "id": 3,
//             "name": "TheScientist",
//             "artist": "Coldplay",
//             "src": "coldplaythescientist.mp3",
//             "format": "mp3",
//             "cover": "covers/thescientist.jpg"
//         }
//     ]
// }