'use strict';

const URL = 'http://localhost:3000/books/';
const dataElem = document.getElementById('data');
const bookForm = document.getElementById('book_form');
const hintBtns = document.querySelectorAll('.hint_btns');
const input = document.getElementById('input_name');

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

getData('all');

hintBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    getData(btn.innerHTML);
  });
});

bookForm.addEventListener('submit', getBooks);
