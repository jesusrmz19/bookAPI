'use strict';

const URL = 'http://localhost:3000/books/';
const dataElem = document.getElementById('data');
const bookForm = document.getElementById('book_form');

const getBooks = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const condition = formData.get('condition');
  try {
    const res = await fetch(`${URL}${condition}`);
    const data = await res.json();
    dataElem.innerHTML = JSON.stringify(data, undefined, 2);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

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

bookForm.addEventListener('submit', getBooks);
// const pElem = document.getElementById('data');
// const getButton = document.getElementById('get_button');

// const getData = async () => {
//   const res = await fetch(URL);
//   const data = await res.json();

//   pElem.innerHTML = JSON.stringify(data, undefined, 2);
// };

// getButton.addEventListener('click', getData);

// const loginBtn = document.getElementById('login_btn');

// const submitForm = (e) => {
//   e.preventDefault();
//   console.log('click');
// };

// loginBtn.addEventListener('submit', submitForm);
// loginBtn.addEventListener('click', submitForm);
