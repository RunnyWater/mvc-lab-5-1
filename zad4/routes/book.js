const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
router.get('/add', (req, res) => {
  res.render('add-book');
});

router.post('/add', booksController.addBook);
router.get('/:id', booksController.getBookDetails);

router.delete('/delete/:id', booksController.deleteBook);



module.exports = router;