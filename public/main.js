import {  currentIndex, showSlide, click , comeBack} from '../src/scripts/actions.js';
import {fetch_data} from '../src/services/config.js'
import { move_around ,artists_page_open } from '../src/scripts/actions.js';
import { play_pause } from '../src/scripts/play.js';
// play_pause();
showSlide(currentIndex);

click();
comeBack();


fetch_data();
move_around();
artists_page_open();