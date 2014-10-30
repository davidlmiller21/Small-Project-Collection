//create javascript clock class H:M:S

function Clock(hours, minutes, seconds) {
    //seconds
    function timeTick() {
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours === 24) {
            hours = 0;
        }
        document.getElementById("seconds").innerText = seconds;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("hour1").innerText = hours;
    }

    this.startClock = function () {
        setInterval(timeTick, 1000);
    };
}

var ourClock = new Clock(23, 59, 55);
ourClock.startClock();
//now i need the clock to display
