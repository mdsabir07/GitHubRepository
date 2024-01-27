function loadContent() {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // What to do when response arrives / Define a callback function
    xhr.onload = function() {
        const container = document.getElementById("lession1");
        container.innerHTML = this.responseText;
        // console.log(this.getAllResponseHeaders());
        console.log(this.getResponseHeader('etag')); //Return single header information
    }

    // prepare request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS / Open the XMLHttpRequest object
    // xhr.open("GET", "./data/data.txt", true);
    xhr.open("GET", "./data/data.txt");

    // request a header / cutom header request to the server
    // xhr.setRequestHeader("MY_SON", "Muhammed Bin Sabir");

    // Send a Request to a server
    xhr.send();

    // abort
    // xhr.abort();
}