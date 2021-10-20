import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
require('dotenv/config');
import { booksRoute } from './routes/books';
import { authRoute } from './routes/auth';

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

// MIDDLEWARE ROUTES
app.use('/user/api', authRoute);
app.use('/user', express.static('public/user'));
app.use('/books', booksRoute);
app.use('/', express.static('public'));

const PORT = process.env.PORT || 3000;

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DataBase!');
});

app.listen(PORT, () => {
  console.log(`Server ir running in ${PORT}`);
});
