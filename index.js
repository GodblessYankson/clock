const hourEl = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

function updateClock () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
 
if(h>12) {
    h = h - 12;
    ampm = "PM";
} 
if(h< 10) {
    h = "0" + h;
} 

m = m < 10 ? "0" + m : m;

s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEL.innerText = m;
    secondsEl.innerText = s;
    ampmEL.innerHTML = ampm;
  
setTimeout(() => {
    updateClock()
}, 1000)
}   


updateClock()