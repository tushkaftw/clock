const sunday = document.querySelector('.sunday');
const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');
const saturday = document.querySelector('.saturday');
const timeEl = document.querySelector('.time');
const twelveHr = document.querySelector('.twelve-hr');
const twentyFourHr = document.querySelector('.twenty-four-hr');
const daysList = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

window.addEventListener('load', day);
window.addEventListener('load', time);

function day() {
    for (i = 0; i < 7; i++) {
        if (i == new Date().getDay()) {
            daysList[i].classList.add('active');
        } else {
            daysList[i].classList.add('inactive');
        }
    }
}

function time() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours == 0 && seconds == 1) {
        location.reload();
    }
    
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    timeEl.innerText = hours + ":" + minutes + ":" + seconds;

    setTimeout(time, 100);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}