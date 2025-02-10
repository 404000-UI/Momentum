const clockAndDate = document.querySelector("div#clockAndDate");
const clock = clockAndDate.querySelector("h2#clock");
const date_h3 = clockAndDate.querySelector("h3#date");

function check_size(size) {
    return_var = size.toString().length
    return return_var
}

function setClock() {
    const date = new Date();
    hours = String(date.getHours()).padStart(2, "0");
    min = String(date.getMinutes()).padStart(2, "0");
    sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

function setDate() {
    const days = ["sun", "Mon", "Tue", "wed", "Thur", "Fri", "sat"];
    const date_fun = new Date();
    year = String(date_fun.getFullYear());
    month = String(date_fun.getMonth() + 1).padStart(2, "0");
    date = String(date_fun.getDate()).padStart(2, "0");
    day_Num = date_fun.getDay();
    days_day = days[day_Num];
    date_h3.innerText = `${date}/${month}/${year} ${days_day}`;
}

setClock();
setInterval(setClock, 1000);
setDate();
setInterval(setDate, 1000);