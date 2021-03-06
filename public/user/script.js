'use strict';

const URL = 'http://localhost:3000/user/api/login';

const loginForm = document.getElementById('login_Form');
const addBook = document.getElementById('addBook_Form');
const addBookField = document.getElementById('addBook_Fieldset');
const successElem = document.querySelector('.success');

const submitForm = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  try {
    const res = await fetch('/user/api/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await res.json();
    if (data.error) throw data.error;
    if (data.msg) {
      loginForm.reset();
      addBookField.disabled = false;
    }
  } catch (err) {
    alert(err);
  }
};

const submitBook = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  try {
    const res = await fetch('/books', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const newData = await res.json();
    if (newData.error) throw data.error;
    if (newData.success) {
      addBook.reset();
      successElem.classList.add('active');
    }
  } catch (err) {
    alert.error(err);
    successElem.classList.remove('active');
  }
};

addBook.addEventListener('submit', submitBook);
loginForm.addEventListener('submit', submitForm);
