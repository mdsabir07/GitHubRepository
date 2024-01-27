function loadContent(callbackF) {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // What to do when response arrives / Define a callback function
    xhr.onload = function() {
        callbackF(this);
    }

    // prepare request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS / Open the XMLHttpRequest object
    xhr.open("GET", "./data/data.txt");

    // request a header / cutom header request to the server
    // xhr.setRequestHeader("MY_SON", "Muhammed Bin Sabir");

    // Send a Request to a server
    xhr.send();

    // abort
    // xhr.abort();
}

function myCallback1(xhr) {
    const container = document.getElementById("lession1");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
    const container = document.getElementById("lession2");
    container.innerHTML = xhr.responseText;
}