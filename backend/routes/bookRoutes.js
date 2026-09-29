const express = require("express");
const Book = require("../models/book");

const router = express.Router();

router.post("/books", async (req, res) => {
  try {
    const { bookTitle, authorName, isbn, category, publicationYear } = req.body;

    if (!bookTitle || !authorName || !isbn || !category || !publicationYear) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const book = await Book.create({
      bookTitle,
      authorName,
      isbn,
      category,
      publicationYear
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;