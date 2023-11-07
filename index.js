
//Js stop watch

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start() {
    timer = true;
    stopWatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "0" + hr;
    document.getElementById("min").innerHTML = "0" + min;
    document.getElementById("sec").innerHTML = "0" + sec;
    document.getElementById("count").innerHTML = "0" + count;
}

function stopWatch() {
    if (timer == true) {
        count += 1;

        if (count == 100) {
            sec += 1;
            count = 0;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
            count = 0;
        }

        if (min == 60) {
            hr += 1;
            min += 0;
            sec = 0;
            count = 0;
        }
        document.getElementById("hr").innerHTML = "0" + hr; 
        document.getElementById("min").innerHTML = "0" + min;
        document.getElementById("sec").innerHTML = "0" + sec;
        document.getElementById("count").innerHTML = "0" +count;

        setTimeout("stopWatch()", 10);
    }
}