document.addEventListener('DOMContentLoaded', function() {

const startBtn = document.querySelector('#start'),
      stopBtn  = document.querySelector('#stop'),
      resetBtn = document.querySelector('#reset'),
      lapBtn   = document.querySelector('#lap'),
      lapTxt   = document.querySelector('#laps-text');

const chrono = document.querySelector('#chronometre');

let cent = 0, sec = 0, min = 0, hour = 0;
let t;

function tick() {
    cent++;
    if (cent === 100) {
        cent = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hour++;
            }
        }
    }
}

function add() {
    tick();
    chrono.querySelector('.hour-text').innerHTML = (hour < 10 ? '0' : '') + hour + '<span class="small">h </span>' + (min < 10 ? '0' : '') + min + '<span class="small">m </span>' + (sec < 10 ? '0' : '') + sec + '<span class="small">s "' + (cent < 10 ? '0' : '') + cent + '</span>';

    timer();
}

function timer() {
    t = setTimeout(add, 10);
}

timer();

startBtn.addEventListener('click', timer);

stopBtn.addEventListener('click', function() {
    clearTimeout(t);
});

resetBtn.addEventListener('click', function() {
    chrono.querySelector('.hour-text').innerHTML = '00<span class="small">h</span> 00<span class="small">m</span> 00<span class="small">s</span> <span class="small">"00</span>';
    cent = 0, sec = 0, min = 0, hour = 0;
});

lapBtn.addEventListener('click', function() {
    // enregistre le temps au moment du click
    let lapTime = chrono.querySelector('.hour-text').textContent;
    // ajoute le temps au tableau
    lapTxt.innerHTML += '<li>' + lapTime + '</li>';
});


});
