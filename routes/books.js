const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// ROUTES

// GET ALL BOOKS
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A BOOK
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    dateFinshed: req.body.dateFinshed,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
