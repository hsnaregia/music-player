import {  currentIndex, showSlide, click , comeBack} from '../src/scripts/actions.js';
import {fetch_data} from '../src/services/config.js'
import { move_around } from '../src/scripts/actions.js';
showSlide(currentIndex);

click();
comeBack();


fetch_data();
move_around();
