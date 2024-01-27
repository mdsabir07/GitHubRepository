function loadContent() {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // What to do when response arrives / Define a callback function
    xhr.onload = function() {
        console.log("Response finished")
        const container = document.getElementById("lession1");
        container.innerHTML = this.responseText;
    }

    // prepare request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS / Open the XMLHttpRequest object
    // xhr.open("GET", "./data/data.txt", true);
    xhr.open("GET", "./data/data.txt", false);

    // request a header / cutom header request to the server
    // xhr.setRequestHeader("MY_SON", "Muhammed Bin Sabir");

    // Send a Request to a server
    xhr.send();

    console.log("Hello Muhammed!")

    // abort
    // xhr.abort();
}