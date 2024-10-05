import { slideIds, currentIndex, showSlide, nextSlide , click , comeBack} from '../src/scripts/actions.js';
import { fetch_data } from '../server.js';
import { move_around } from '../src/scripts/actions.js';
showSlide(currentIndex);

click();
comeBack();


fetch_data();
move_around();