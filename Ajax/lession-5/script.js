function sendRequest(method, url) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        console.log(this.response);
    }

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.send();
}

function getData() {

}

function sendData() {

}

const getBtn = document.getElementById("get");
const sendBtn = document.getElementById("send");

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);