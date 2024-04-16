exports.getBooks = (req, res) => {
    res.render('books', { books: [{ id: 1, title: 'Book_name', publishingYear: 2024, authorId: 1 }] });
  };