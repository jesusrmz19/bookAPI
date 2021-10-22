'use strict';

const URL = 'http://localhost:3000/books/';
const dataElem = document.getElementById('data');
const bookForm = document.getElementById('book_form');
const hintBtns = document.querySelectorAll('.hint_btns');
const input = document.getElementById('input_name');
const example = document.querySelector('.example');

const createHTML = async () => {
  try {
    const res = await fetch(`${URL}/617206c278b8cb2f1fa4d0a1`);
    const data = await res.json();
    const { imgUrl, title, author, pages, dateRead } = data;
    const html = `
      <div class="example_img">
        <img src="${imgUrl}" />
      </div>
      <div class="example_text">
        <p class="example_text__title">${title}</p>
        <p class="example_text__author">${author}</p>
        <div class="example_subtext">
          <p class="example_subtext__pages">${pages} pages</p>
          <p class="example_subtext__read">Ready by: ${dateRead}</p>
        </div>
      </div>
    `;
    example.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    console.error(err);
  }
};

const getData = async (condition) => {
  try {
    const res = await fetch(`${URL}${condition}`);
    const data = await res.json();
    dataElem.innerHTML = JSON.stringify(data, undefined, 2);
  } catch (err) {
    console.error(err);
  }
};

const getBooks = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const condition = formData.get('condition');
  getData(condition);
};

const init = () => {
  getData('all');
  createHTML();
};
init();

hintBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    getData(btn.innerHTML);
  });
});

bookForm.addEventListener('submit', getBooks);
