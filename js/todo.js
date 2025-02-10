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