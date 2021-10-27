# Book API

This is a personal RESTful API that will let me add, delete, and update the books I've read in 2021.

## Overview

### The Challenge

The initial challenge is to create a RESTful API by learning and using new technologies like Node.js, Express, JWT, and Typescript.

The API won't be open to anyone as I will be the only one capable of adding new content or update the current one. But as a user you will be able to get the JSON data as the example shows below.

### Links

- Live Site URL: [https://jrmbookapi.herokuapp.com/](https://jrmbookapi.herokuapp.com/)

## Process

### Built with

**Backend**

- Node.js
- Express
- JWT
- TypeScript

**Frontend**

- HTML5
- CSS
- JavaScript

## Example

The returned data looks like this:

```json
{
  "_id": "617201f878b8cb2f1fa4d089",
  "title": "Me",
  "author": "Elton John",
  "firstName": "Elton",
  "lastName": "John",
  "pages": "300",
  "dateRead": "2021-03-30",
  "imgUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553526563l/44303730.jpg",
  "__v": 0
}
```

## How to use it?

The API link is https://jrmbookapi.herokuapp.com/books/:

- All Books: https://jrmbookapi.herokuapp.com/books/all
- Book by Author Full Name: https://jrmbookapi.herokuapp.com/books/author/Ken Follet
- Book by Author First Name: https://jrmbookapi.herokuapp.com/books/author/firstname/Maya
- Book by Author Last Name: https://jrmbookapi.herokuapp.com/books/author/lastname/John

## Author

- Website - [jesusrmz.com](https://jesusrmz.com/)
- Twitter - [@jesusrmz\_](https://twitter.com/jesusrmz_)
- CodePen - [@jesusrmz](https://codepen.io/jesusrmz)
