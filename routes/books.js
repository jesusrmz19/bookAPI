const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// ROUTES

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
