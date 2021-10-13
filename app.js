const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
// IMPORT ROUTES
const postsRoute = require('./routes/posts');
const booksRoute = require('./routes/books');

// MIDDLEWARE ROUTE
app.use('/books', booksRoute);
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('We are home ');
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('Connected to DB')
);

// LISTEN TO THE SERVER
app.listen(3000);
