var seconds = 60;
var minutes = 5

const timer_seconds = () => {
    
    if (seconds==0) {
        clearInterval(set_timer_seconds);
        seconds = 60;
        minutes--;
        setInterval(timer_seconds, 1000);
    }
    else {
        if (seconds==60) {
            console.log(minutes+':00');
        }
        else {
            console.log();
            if (seconds.toString().length==1) {
                console.log(minutes+':0'+seconds);
            }
            else {
                console.log(minutes+':'+seconds);
            }
        }
        seconds--;
    }
}

let set_timer_seconds = setInterval(timer_seconds, 1000);