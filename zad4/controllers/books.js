let books = [];
exports.getBooks = (req, res) => {
 res.render('books', { books });
};

exports.addBook = (req, res) => {
 const newBook = {
    id: Date.now(),
    title: req.body.title,
    publishingYear: req.body.publishingYear,
    authorId: req.body.authorId
 };
 books.push(newBook);
 res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
 const bookId = parseInt(req.params.id, 10);
 books = books.filter(book => book.id !== bookId);
 res.redirect('/book/list');
};

exports.getBookDetails = (req, res) => {
   const bookId = parseInt(req.params.id, 10);
   const book = books.find(b => b.id === bookId);
   if (book) {
     res.render('book', { book });
   } else {
     res.status(404).send('Book not found');
   }
 };