// Garrett's Variables and Functions

let headlineNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d41b7704e2764f2bbe291cbb929ef58f";

// 🔥🔥🔥 TILE 1 🔥🔥🔥
let imageDisplay = document.querySelector('#image-display');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let summary = document.querySelector('#summary');
let button = document.querySelector('#button'); 

let img = document.createElement('img');

function fetchNews() {
    fetch(headlineNews)
    .then(function (response) {
return response.json();
})

.then (function (data) {
    img.src = data.articles[0].urlToImage;
    imageDisplay.appendChild(img);
    console.log(data);
    title.textContent = data.articles[0].title;
    author.textContent = data.articles[0].author;
    summary.textContent = data.articles[0].description;
    button.onclick = function () {
        window.location.href = data.articles[0].url;
    }
})
};
fetchNews();

// 🔥🔥🔥 TILE 2 🔥🔥🔥
let imageDisplay2 = document.querySelector('#image-display2');
let title2 = document.querySelector('#title2');
let author2 = document.querySelector('#author2');
let summary2 = document.querySelector('#summary2');
let button2 = document.querySelector('#button2'); 

let img2 = document.createElement('img');

function fetchNews2() {
    fetch(headlineNews)
    .then(function (response) {
return response.json();
})
.then (function (data) {
    img2.src = data.articles[1].urlToImage;
    imageDisplay2.appendChild(img2);
    console.log(data);
    title2.textContent = data.articles[1].title;
    author2.textContent = data.articles[1].author;
    summary2.textContent = data.articles[1].description;
    button2.onclick = function () {
        window.location.href = data.articles[1].url;
    }
})
};
fetchNews2();

// 🔥🔥🔥 TILE 3 🔥🔥🔥
let imageDisplay3 = document.querySelector('#image-display3');
let title3 = document.querySelector('#title3');
let author3 = document.querySelector('#author3');
let summary3 = document.querySelector('#summary3');
let button3 = document.querySelector('#button3'); 

let img3 = document.createElement('img');

function fetchNews3() {
    fetch(headlineNews)
    .then(function (response) {
return response.json();
})
.then (function (data) {
    img3.src = data.articles[2].urlToImage;
    imageDisplay3.appendChild(img3);
    console.log(data);
    title3.textContent = data.articles[2].title;
    author3.textContent = data.articles[2].author;
    summary3.textContent = data.articles[2].description;
    button3.onclick = function () {
        window.location.href = data.articles[2].url;
    }
})
};
fetchNews3();

// 🔥🔥🔥 TILE 4 🔥🔥🔥
let imageDisplay4 = document.querySelector('#image-display4');
let title4 = document.querySelector('#title4');
let author4 = document.querySelector('#author4');
let summary4 = document.querySelector('#summary4');
let button4 = document.querySelector('#button4'); 

let img4 = document.createElement('img');

function fetchNews4() {
    fetch(headlineNews)
    .then(function (response) {
return response.json();
})
.then (function (data) {
    img4.src = data.articles[3].urlToImage;
    imageDisplay4.appendChild(img4);
    console.log(data);
    title4.textContent = data.articles[3].title;
    author4.textContent = data.articles[3].author;
    summary4.textContent = data.articles[3].description;
    button4.onclick = function () {
        window.location.href = data.articles[3].url;
    }
})
};
fetchNews4();



// Jasmin's Variables and Functions


// Kyle's Variable and Functions
const signUp = e => {
  let formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    pwd: document.getElementById('pwd').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  console.log(localStorage.getItem('formData'));
  e.preventDefault();
};
