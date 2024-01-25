function loadContent() {
    // Create a new request
    const xhr = new XMLHttpRequest();

    // What to do when response arrives
    xhr.onload = function() {
        const container = document.getElementById("lession1");
        lession1.innerHTML = xhr.responseText;
    }

    // prepare request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");

    // Request send
    xhr.send();
}