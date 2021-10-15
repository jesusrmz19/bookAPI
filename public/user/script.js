'use strict';

const URL = 'http://localhost:3000/user/api/login';

const loginForm = document.getElementById('login_Form');
const addBook = document.getElementById('addBook_Form');

const submitForm = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  try {
    const res = await fetch('/user/api/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const { token } = await res.json();
    localStorage.setItem('token', token);
    console.log(token);
  } catch (err) {
    console.error(err);
  }
};

const submitBook = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('/books', {
      method: 'post',
      headers: { 'auth-token': token },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
};

addBook.addEventListener('submit', submitBook);
loginForm.addEventListener('submit', submitForm);
