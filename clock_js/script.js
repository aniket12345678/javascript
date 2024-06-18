const clock = () => {
    let new_date = new Date();
    console.log("Date:- ",new_date.getDate());
    console.log("Day:- ",new_date.getDay());
    console.log("Year:- ",new_date.getFullYear());
    console.log("Hours:- ",new_date.getHours());
    console.log("Milliseconds:- ",new_date.getMilliseconds());
    console.log("Minutes:- ",new_date.getMinutes());
    console.log("Month:- ",new_date.getMonth());
    console.log("Seconds:- ",new_date.getSeconds());
}
setInterval(clock, 1000);