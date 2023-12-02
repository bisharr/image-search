'use strict';

const accessKey = 'R-rGdeTcq_7ic0qI5UYV-3G6nLb0QlToT7zS6aEqhGw';

const formEl = document.querySelector('form');
const SearchInputEl = document.getElementById('search-input');
const searchResultEl = document.querySelector('.search-results');
const showMoreButton = document.getElementById('show-more-button');

let inputData = '';
let page = 1;

async function searchImages() {
  inputData = SearchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultEl.innerHTML = '';
  }
  const results = data.results;
  results.map((result) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('search-result');
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultEl.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMoreButton.style.display = 'block';
  }
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  searchImages();
});

showMoreButton.addEventListener('click', () => {
  searchImages();
});

const iconEl = document.querySelector('.icon-img');

iconEl.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    iconEl.src = 'sun.png';
  } else {
    iconEl.src = 'moon.png';
  }
});
