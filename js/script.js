// background

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

function randomInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const chosenIamge = images[randomInt(0, 6)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenIamge}`;

document.body.appendChild(bgImage);

// clock

const clockAndDate = document.querySelector("div#clockAndDate");
const clock = clockAndDate.querySelector("h2#clock");
const date_h3 = clockAndDate.querySelector("h3#date");

function check_size(size) {
    return_var = size.toString().length;
    return return_var;
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

// greetings

const loginForm = document.querySelector("form.login-form");
const loginInput = loginForm.querySelector("div.login-div input");
const greetingForm = document.querySelector("h1#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintingGreeting(name) {
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    greetingForm.innerText = `Hello, ${name}`;
}

function onLoginSubmit(event) {
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintingGreeting(savedUsername);
}

// quotes

const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn'
    },
];

function randomInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const quote = document.querySelector("div#quote span:first-child");
const author_c = document.querySelector("div#quote span:last-child");

const todaysQuote = quotes[randomInt(0, 9)];

quote.innerText = todaysQuote.quote;
author_c.innerText = todaysQuote.author;

// search

const search_form = document.querySelector("div#clockAndDate form#search-form");
const search_input = search_form.querySelector("input");
const url_form = document.querySelector("div#clockAndDate form#url-form");
const url_input = url_form.querySelector("div#url-input-box input");

function search_submit(event) {
    event.preventDefault();
    let search_key = search_input.value;
    search_key = `https://duckduckgo.com/?t=h_&q=${search_key}&ia=web`;
    location.assign(search_key);
}

function url_submit(event) {
    event.preventDefault();
    let url_key = url_input.value;
    url_key = `https://${url_key}`;
    location.assign(url_key);
}

search_form.addEventListener("submit", search_submit);
url_form.addEventListener("submit", url_submit);

// todo list

const todo_form = document.querySelector("form#todo-form");
const todo_list_ul = document.querySelector("ul#todo-list");
const todo_input = todo_form.querySelector("input");
const todo_list_ex = todo_list_ul.querySelector("span");
const TODOS_KEY = "TO Do List";

let ToDo_list = [];

function saving_todo_list_in_localStorage() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDo_list));
}

function rm_todo_list(event) {
    const li = event.target.parentElement;
    li.remove();
    ToDo_list = ToDo_list.filter((item) => item.Id !== parseInt(li.id));
    saving_todo_list_in_localStorage();
    if (todo_list_ul.querySelectorAll("li").length < 1) {
        todo_list_ex.classList.add("hidden");
    }
}

function paint_todo_list(to_do) {
    if (todo_list_ul.querySelectorAll("li").length < 8) {
        todo_list_ex.classList.remove("hidden");
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", rm_todo_list);
        li.appendChild(span);
        li.appendChild(button);
        span.innerText = to_do.Text;
        li.id = to_do.Id;
        todo_list_ul.appendChild(li);
    } else {
        alert("You can only create a list of up to 8 items.");
    }
}

function todo_submit(event) {
    event.preventDefault();
    const todo = todo_input.value;
    todo_input.value = "";
    const newToDO = { Id: Date.now(), Text: todo }; // {Id : Int, Text : String}
    ToDo_list.push(newToDO);
    saving_todo_list_in_localStorage();
    paint_todo_list(newToDO);
}

todo_form.addEventListener("submit", todo_submit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach((item) => paint_todo_list(item));
    ToDo_list = parseToDos;
}
