'use strict';

const URL = 'http://localhost:3000/books/';
const dataElem = document.getElementById('data');
const bookForm = document.getElementById('book_form');
const hintBtns = document.querySelectorAll('.hint_btns');
const input = document.getElementById('input_name');

const getBooks = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const condition = formData.get('condition');
  try {
    const res = await fetch(`${URL}${condition}`);
    const data = await res.json();
    dataElem.innerHTML = JSON.stringify(data, undefined, 2);
  } catch (err) {
    console.error(err);
  }
};

hintBtns.forEach((btn) => {
  btn.addEventListener('click', async function () {
    try {
      const res = await fetch(`${URL}${btn.innerHTML}`);
      const data = await res.json();
      dataElem.innerHTML = JSON.stringify(data, undefined, 2);
    } catch (err) {
      console.error(err);
    }
  });
});

bookForm.addEventListener('submit', getBooks);

const init = async () => {
  try {
    const res = await fetch(`${URL}all`);
    const data = await res.json();
    dataElem.innerHTML = JSON.stringify(data, undefined, 2);
  } catch (err) {
    console.error(err);
  }
};
init();
