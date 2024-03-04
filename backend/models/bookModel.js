const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  book_author: {
    type: String,
    required: true,
    
  },
  book_price: {
    type: Number,
    required: true,
    
  },
});

module.exports = mongoose.model("hera_books", bookSchema);
