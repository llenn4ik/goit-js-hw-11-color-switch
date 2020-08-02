'use strict';
import colors from './colors';
const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const colorSwitch = {
       isActive: false,

 start() {
      if (this.isActive){
          return;
     
      }
      this.isActive=true;
      this.timerId = setInterval(() => {body.style=`background-color:${
          colors[randomIntegerFromInterval(0, colors.length-1)]
        }`}, 1000 );
  },

 stop() {
    clearInterval(this.timerId);
    this.isActive = false;
},
}
export default colorSwitch