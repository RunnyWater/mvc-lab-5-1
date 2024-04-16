const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const homeRoutes = require('./routes/home');
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');

app.use('/', homeRoutes);
app.use('/book', booksRoutes);
app.use('/author', authorsRoutes);

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});