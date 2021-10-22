import express, { Request, Response } from 'express';
import { Book } from '../models/Book';
import { verify } from './verifyToken';

const router = express.Router();

// GET ALL BOOKS
router.get('/all', async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A BOOK
router.post('/', verify, async (req: Request, res: Response) => {
  const book = new Book({
    title: req.body.title,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    author: `${req.body.firstName} ${req.body.lastName}`,
    pages: req.body.pages,
    dateRead: req.body.dateRead,
    imgUrl: req.body.imgUrl,
  });
  try {
    const savedBook = await book.save();
    res.send({ success: 'Book Added' });
  } catch (err) {
    res.json({ message: err });
  }
  // try {
  //   const savedBook = await book.save();
  //   res.json(savedBook);
  // } catch (err) {
  //   res.json({ message: err });
  // }
});

// GET BOOK BY ID
router.get('/:bookId', async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET A BOOK BY AUTHOR
router.get('/author/:name', async (req: Request, res: Response) => {
  try {
    const book = await Book.find({ author: `${req.params.name}` });
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// // GET A SPECIFIC POST
// router.get('/:postId', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.postId);
//     res.json(post);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // DELETE A POST
// router.delete('/:postId', async (req, res) => {
//   try {
//     const removedPost = await Post.remove({ _id: req.params.postId });
//     res.json(removedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // UPDATE A POST
// router.patch('/:postId', async (req, res) => {
//   try {
//     const updatedPost = await Post.updateOne(
//       { _id: req.params.postId },
//       {
//         $set: {
//           title: req.body.title,
//         },
//       }
//     );
//     res.json(updatedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

export { router as booksRoute };
