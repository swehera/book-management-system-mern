const express = require("express");
const allBook = require("../models/bookModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await allBook.find();
  res.status(200).json(books);
});

module.exports = router;
