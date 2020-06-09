let period = 60;
let threeQuarters = Math.floor(period * .75);
let half = Math.floor(period * .5);
let lastQurter = Math.floor(period * .25);
let el = document.getElementById('s');
let body = document.getElementsByTagName('body')[0];
let val = el.innerHTML;
let timer = setInterval(() => {
    el.innerHTML = period--;
    switch (true) {
        case (period <= 0):
            body.style.backgroundColor = '#191919';
            period = 60;
            break;
        case (period <= lastQurter):
            body.style.backgroundColor = 'yellow';
            break;
        case (period <= half):
            body.style.backgroundColor = 'gray';
            break;
        case (period <= threeQuarters):
            body.style.backgroundColor = 'green';
            break;
    }
}, 1000);