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