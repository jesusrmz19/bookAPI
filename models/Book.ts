import mongoose from 'mongoose';

interface IBook {
  title: string;
  author: string;
  pages: string;
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
  pages: {
    type: String,
    required: true,
  },
});

// BookSchema.statics.build = (attr: IBook) => {
//   return new Book(attr);
// };

const Book = mongoose.model('Book', bookSchema);

export { Book };
