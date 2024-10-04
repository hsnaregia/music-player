import { slideIds, currentIndex, showSlide, nextSlide , click} from '../src/scripts/actions.js';
import { fetch_data } from '../server.js';
import { move_around } from '../src/scripts/actions.js';
showSlide(currentIndex);

click();



fetch_data();
move_around();