import express, { Request, Response } from 'express';
import { Book } from '../models/Book';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A BOOK
router.post('/', async (req: Request, res: Response) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

export { router as booksRoute };
