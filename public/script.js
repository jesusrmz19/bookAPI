'use strict';

const URL = 'http://localhost:3000/books/616779daf636c89be955bfc4';
const pElem = document.getElementById('data');
const getButton = document.getElementById('get_button');

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  pElem.innerHTML = JSON.stringify(data, undefined, 2);
};

getButton.addEventListener('click', getData);

const loginBtn = document.getElementById('login_btn');

const submitForm = (e) => {
  e.preventDefault();
  console.log('click');
};

loginBtn.addEventListener('submit', submitForm);
loginBtn.addEventListener('click', submitForm);
