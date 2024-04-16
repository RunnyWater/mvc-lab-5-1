exports.getAuthors = (req, res) => {
    res.render('authors', { authors: [{ id: 1, name: 'Author_name' }] });
};