const express = require("express");
const Book = require("../models/bookModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ok done");
});

router.post("/", async (req, res) => {
  try {
    const newBook = new Book({
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      book_price: req.body.book_price,
    });
    const saveBook = await newBook.save();
    res.json(saveBook);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
