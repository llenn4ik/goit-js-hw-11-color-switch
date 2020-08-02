// import colors from './js/colors';
import colorSwitch from './js/colorSwitch';
import './css/styles.css';
const startBtn = document.querySelector('button[data-action="start');
const stopBtn = document.querySelector('button[data-action="stop');
startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));