document.addEventListener('DOMContentLoaded', function() {  

const minuteurInput = document.querySelectorAll('.nb'),
      minuteurBtns  = document.querySelectorAll('.minuteur-btn'),
      startBtn      = document.querySelector('#start-minuteur'),
      stopBtn       = document.querySelector('#stop-minuteur');

      
const timeRows = {
    "tenth-h": 
    { 
        "btn-up": this.querySelector('#tenth-h-up'), 
        "btn-down": this.querySelector('#tenth-h-down'), 
        "text": this.querySelector('#tenth-h') 
    },
    
    "h":
    {
        "btn-up": this.querySelector('#h-up'),
        "btn-down": this.querySelector('#h-down'),
        "text": this.querySelector('#h')
    },

    "tenth-m":
    {
        "btn-up": this.querySelector('#tenth-m-up'),
        "btn-down": this.querySelector('#tenth-m-down'),
        "text": this.querySelector('#tenth-m')
    },

    "m":
    {
        "btn-up": this.querySelector('#m-up'),
        "btn-down": this.querySelector('#m-down'),
        "text": this.querySelector('#m')
    },

    "tenth-s":
    {
        "btn-up": this.querySelector('#tenth-s-up'),
        "btn-down": this.querySelector('#tenth-s-down'),
        "text": this.querySelector('#tenth-s')
    },

    "s":
    {
        "btn-up": this.querySelector('#s-up'),
        "btn-down": this.querySelector('#s-down'),
        "text": this.querySelector('#s')
    }
};

// créé une array a partir de timeRows
const timeArray = Object.keys(timeRows).map(e => timeRows[e]);

let hasStarted;
startBtn.addEventListener('click', function() { 
    hasStarted = true; 
    console.log(hasStarted);
});

stopBtn.addEventListener('click', function() { 
    hasStarted = false; 
    console.log(hasStarted);
});

minuteurBtns.forEach((btn) => {
    hasStarted ? btn.style.display = 'none' : btn.style.display = 'block';
})

timeArray.forEach(e => {
    
e["btn-up"].addEventListener('click', function() {
    let value = parseInt(e.text.innerHTML);
    if (value < 59) {
        value++;
        if(e.text.id === 'h' || e.text.id === 'm') {
            e.text.innerHTML = value + `:`;
        }
        else {
            e.text.innerHTML = value;
        }

        getTimeString();
    }

    if(value > 9) {
        if(e.text.id === 'h' || e.text.id === 'm') {
            e.text.innerHTML = '0' + `:`;
        }
        else {
            e.text.innerHTML = '0';
        }

        getTimeString();
    }
});

e["btn-down"].addEventListener('click', function() {
    let value = parseInt(e.text.innerHTML);
    if (value > 0) {
        value--;
        if(e.text.id === 'h' || e.text.id === 'm') {
            e.text.innerHTML = value + `:`;
        }
        else {
            e.text.innerHTML = value;
        }

        getTimeString();
    }

    if(value > 9) {
        if(e.text.id === 'h' || e.text.id === 'm') {
            e.text.innerHTML = '0' + `:`;
        }
        else {
            e.text.innerHTML = '0';
        }

        getTimeString();
    }
});

});

function getTimeString() {

    let timeStr = '';
    timeArray.forEach(e => {
        timeStr += e.text.innerHTML;
    });

    // console.log(timeStr);
    return timeStr;
}



});