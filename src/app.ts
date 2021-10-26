import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
require('dotenv/config');
import { booksRoute } from './routes/books';
import { authRoute } from './routes/auth';
import path from 'path';

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

// MIDDLEWARE ROUTES
app.use('/user/api', authRoute);
app.use('/user', express.static('./public/user'));
app.use('/books', booksRoute);
app.use('/', express.static('public'));
app.use(function (req: Request, res: Response, next) {
  res.status(404).send("This page doesn't exists!");
});

const PORT = process.env.PORT || 3000;

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DataBase!');
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
