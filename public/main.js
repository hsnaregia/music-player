import { slideIds, currentIndex, showSlide, nextSlide , click} from '../src/scripts/actions.js';

showSlide(currentIndex);

click();


const MusicUrl = 'http://gr.vaxgame.top:3000/api/enartists/mohsenlorestani';


async function fetch_data(){
    const res = await fetch(MusicUrl);
    const data = await res.json();
    console.log(data);
}
fetch_data();