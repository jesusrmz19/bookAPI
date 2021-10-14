'use strict';

const URL = 'http://localhost:3000/books';
const pElem = document.getElementById('data');

const getData = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();

  pElem.innerHTML = JSON.stringify(data[0], undefined, 2);
};

getData(URL);
