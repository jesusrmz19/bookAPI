import mongoose from 'mongoose';

interface IBook {
  title: string;
  author: string;
  pages: string;
  dateRead: string;
  year: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
}

const bookSchema = new mongoose.Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  dateRead: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

// BookSchema.statics.build = (attr: IBook) => {
//   return new Book(attr);
// };

const Book = mongoose.model('Book', bookSchema);

export { Book };
