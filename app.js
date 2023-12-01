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
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  searchImages();
});
