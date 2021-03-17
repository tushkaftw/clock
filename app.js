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

window.addEventListener('load', day);
window.addEventListener('load', time);
window.addEventListener('load', twentyFourType);

function day() {
    switch(new Date().getDay()) {
        case 0:
            sunday.classList.add('active');
            monday.classList.add('inactive');
            tuesday.classList.add('inactive');
            wednesday.classList.add('inactive');
            thursday.classList.add('inactive');
            friday.classList.add('inactive');
            saturday.classList.add('inactive');
            break;
        case 1:
            sunday.classList.add('inactive');
            monday.classList.add('active');
            tuesday.classList.add('inactive');
            wednesday.classList.add('inactive');
            thursday.classList.add('inactive');
            friday.classList.add('inactive');
            saturday.classList.add('inactive');
            break;
        case 2:
            sunday.classList.add('inactive');
            monday.classList.add('inactive');
            tuesday.classList.add('active');
            wednesday.classList.add('inactive');
            thursday.classList.add('inactive');
            friday.classList.add('inactive');
            saturday.classList.add('inactive');
            break;
        case 3:
            sunday.classList.add('inactive');
            monday.classList.add('inactive');
            tuesday.classList.add('inactive');
            wednesday.classList.add('active');
            thursday.classList.add('inactive');
            friday.classList.add('inactive');
            saturday.classList.add('inactive');
            break;
        case 4:
            sunday.classList.add('inactive');
            monday.classList.add('inactive');
            tuesday.classList.add('inactive');
            wednesday.classList.add('inactive');
            thursday.classList.add('active');
            friday.classList.add('inactive');
            saturday.classList.add('inactive');
            break;
        case 5:
            sunday.classList.add('inactive');
            monday.classList.add('inactive');
            tuesday.classList.add('inactive');
            wednesday.classList.add('inactive');
            thursday.classList.add('inactive');
            friday.classList.add('active');
            saturday.classList.add('inactive');
            break;
        case 6:
            sunday.classList.add('inactive');
            monday.classList.add('inactive');
            tuesday.classList.add('inactive');
            wednesday.classList.add('inactive');
            thursday.classList.add('inactive');
            friday.classList.add('inactive');
            saturday.classList.add('active');
    }
}

function time() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
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