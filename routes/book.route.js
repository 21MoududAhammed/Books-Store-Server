const { getAllBooks, createBook, updateBook, deleteBook , getABook} = require('../controller/book.controller');
const router = require('express').Router();

// Get all books
router.get('/', getAllBooks);

// Get a book
router.get('/:id', getABook);

// Create a book
router.post('/', createBook);

// Update a book by ID
router.put('/:id', updateBook);

// Delete a book by ID
router.delete('/:id', deleteBook);

module.exports = router;
