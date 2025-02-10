const search_form = document.querySelector("div#clockAndDate form#search-form");
const search_input = search_form.querySelector("input");
const url_form = document.querySelector("div#clockAndDate form#url-form");
const url_input = url_form.querySelector("div#url-input-box input");

function search_submit(event) {
    event.preventDefault();
    let search_key = search_input.value;
    search_key =`https://duckduckgo.com/?t=h_&q=${search_key}&ia=web`;
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