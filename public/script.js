'use strict';

const URL = 'http://localhost:3000/books/';
const dataElem = document.getElementById('data');
const bookForm = document.getElementById('book_form');
const hintBtns = document.querySelectorAll('.hint_btns');
const input = document.getElementById('input_name');
const example = document.querySelector('.example_section');

const getData = async (condition) => {
  try {
    const res = await fetch(`${URL}${condition}`);
    const data = await res.json();
    dataElem.innerHTML = JSON.stringify(data, undefined, 2);
  } catch (err) {
    console.error(err);
  }
};

const createHTML = async () => {
  try {
    const res = await fetch(`${URL}/author/Ken Follet`);
    const data = await res.json();
    data.forEach((elem) => {
      const html = `
      <article class="example_book">
        <div class="example_img">
          <img src="${elem.imgUrl}" alt="Cover of ${elem.title} by ${elem.author}" />
        </div>
        <div class="example_text">
          <p class="example_text__title">${elem.title}</p>
          <p class="example_text__author">${elem.author}</p>
        </div>
      </article>
    `;
      example.insertAdjacentHTML('afterbegin', html);
    });
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
