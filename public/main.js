import { slideIds, currentIndex, showSlide, nextSlide , click} from '../src/scripts/actions.js';
import { fetch_data } from '../server.js';
showSlide(currentIndex);

click();


const MusicUrl = 'http://gr.vaxgame.top:3000/api/enartists/mohsenlorestani';


fetch_data();