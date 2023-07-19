
// 🔥🔥🔥HEADER🔥🔥🔥
let ctaButton = document.querySelector('#cta-button');
let newsLetterDiv = document.querySelector('#newsletter');

ctaButton.addEventListener('click', function() {
    newsLetterDiv.scrollIntoView();
});


// 🔥🔥🔥 Variables 🔥🔥🔥
// API LINKS BY NEWS TOPIC
let headlineNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let businessNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let entertainmentNews = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let generalNews = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let healthNews = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let scienceNews = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let sportsNews = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d41b7704e2764f2bbe291cbb929ef58f";
let techNews = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d41b7704e2764f2bbe291cbb929ef58f";

// TILE 1 SELECTORS
let imageDisplay = document.querySelector('#image-display');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let summary = document.querySelector('#summary');
let btn1 = document.querySelector('#btn1');
let img = document.createElement('img');

// TILE 2 SELECTORS
let imageDisplay2 = document.querySelector('#image-display2');
let title2 = document.querySelector('#title2');
let author2 = document.querySelector('#author2');
let summary2 = document.querySelector('#summary2');
let btn2 = document.querySelector('#btn2');
let img2 = document.createElement('img');

// TILE 3 SELECTORS
let imageDisplay3 = document.querySelector('#image-display3');
let title3 = document.querySelector('#title3');
let author3 = document.querySelector('#author3');
let summary3 = document.querySelector('#summary3');
let btn3 = document.querySelector('#btn3');
let img3 = document.createElement('img');

// TILE 4 SELECTORS
let imageDisplay4 = document.querySelector('#image-display4');
let title4 = document.querySelector('#title4');
let author4 = document.querySelector('#author4');
let summary4 = document.querySelector('#summary4');
let btn4 = document.querySelector('#btn4');
let img4 = document.createElement('img');

// BUTTON SELECTORS 
let  businessBtn = document.querySelector('#business');
let  entertainmentBtn = document.querySelector('#entertainment');
let  generalBtn = document.querySelector('#general');
let  healthBtn = document.querySelector('#health');
let  scienceBtn = document.querySelector('#science');
let  sportsBtn = document.querySelector('#sports');
let  techBtn = document.querySelector('#tech');

// ARRAYS
let imageDisplays = [imageDisplay, imageDisplay2, imageDisplay3, imageDisplay4];
let titles = [title, title2, title3, title4];
let authors = [author, author2, author3, author4];
let summaries = [summary, summary2, summary3, summary4];
let btns = [btn1, btn2, btn3, btn4];
let imgs = [img, img2, img3, img4];


// 🔥🔥🔥 DEFAULT NEWS FUNCTION 🔥🔥🔥
function fetchNews(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.articles.length; i++) {
                if (data.articles[i].urlToImage == null || data.articles[i].urlToImage == undefined) {
                    imgs[i].src = "assets/unavailable.png";
                } else {
                    imgs[i].src = data.articles[i].urlToImage;
                }
                imageDisplays[i].appendChild(imgs[i]);
                titles[i].textContent = data.articles[i].title;
                authors[i].textContent = data.articles[i].author;
                summaries[i].textContent = data.articles[i].description;
                btns[i].onclick = function () {
                    window.location.href = data.articles[i].url;
                }
            };
        }
 )};
fetchNews(headlineNews);

// 🔥🔥🔥 EVENT LISTENERS 🔥🔥🔥
businessBtn.addEventListener('click', function () {
    fetchNews(businessNews);
});

entertainmentBtn.addEventListener('click', function () {
    fetchNews(entertainmentNews);
});

generalBtn.addEventListener('click', function () {
    fetchNews(generalNews);
});

healthBtn.addEventListener('click', function () {
    fetchNews(healthNews);
});

scienceBtn.addEventListener('click', function () {
    fetchNews(scienceNews);
});

sportsBtn.addEventListener('click', function () {
    fetchNews(sportsNews);
});

techBtn.addEventListener('click', function () {
    fetchNews(techNews);
});



// Jasmin's Variables and Functions


// Kyle's Variable and Functions
const signUp = e =>
{
  let formData =
  {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    pwd: document.getElementById('pwd').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  console.log(localStorage.getItem('formData'));
  e.preventDefault();
  updateLocalStorageDisplay();

  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pwd').value = '';

};

// Function to update the displayed local storage
function updateLocalStorageDisplay()
{
    // Retrieve data from local storage
    var storedData = localStorage.getItem('formData');

        // Check if there is data in local storage
        if (storedData)
        {
            // Parse the data from string to object (if needed)
            var parsedData = JSON.parse(storedData);

            // Update the HTML with the stored data
            var dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '<pre>' + JSON.stringify(parsedData, null, 2) + '</pre>';
        } 
        else
        {
            // No data found in local storage
            var dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = 'No data found.';
        }
}

// Get reference to the submit button
var submitButton = document.getElementById('Newsletter');

// Add event listener to the submit button
submitButton.addEventListener('click', function () {
  // Call the signUp function
  signUp();
  updateLocalStorageDisplay();
});

// Get reference to the clear button
var clearButton = document.getElementById('clearButton');

// Add event listener to the clear button
clearButton.addEventListener('click', function () {
  // Clear the input values
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pwd').value = '';

  // Clear the local storage
  localStorage.clear();
  updateLocalStorageDisplay();

  // Redirect the user to a new page
  window.location.href = 'newpage.html';
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
