import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Add = () => {
  const [book_name, setBookname] = useState("");
  const [book_author, setBookAuthor] = useState("");
  const [book_price, setPrice] = useState("");

  const handleSubmit = () => {
    console.log(book_name);
    if (book_name === "") {
      toast.error("Enter Your Book Name");
    } else if (book_author === "") {
      toast.error("Enter your author name");
    } else if (book_price === "") {
      toast.error("Enter the price");
    } else {
      axios.post("http://localhost:3000/adduser", {
        book_name,
        book_author,
        book_price,
      });
      toast.success("Book Added Successfully");
      setBookname("");
      setBookAuthor("");
      setPrice("");
    }
  };

  return (
    <div className=" mt-8">
      <p className=" text-3xl text-gray-600 font-semibold text-center">
        Add Book
      </p>
      <form className=" flex flex-col items-center justify-center gap-2 mt-4">
        <div className=" border-solid border-2  py-1 px-2 rounded-md">
          <input
            type="text"
            name="book_name"
            placeholder="Enter Book Name"
            className="focus:outline-none"
            onChange={(e) => setBookname(e.target.value)}
            value={book_name}
          />
        </div>
        <div className=" border-solid border-2  py-1 px-2 rounded-md">
          <input
            type="text"
            name="book_author"
            placeholder="Enter Author Name"
            className="focus:outline-none"
            onChange={(e) => setBookAuthor(e.target.value)}
            value={book_author}
          />
        </div>
        <div className=" border-solid border-2  py-1 px-2 rounded-md">
          <input
            type="number"
            name="book_price"
            placeholder="Enter Book Price"
            className="focus:outline-none"
            onChange={(e) => setPrice(e.target.value)}
            value={book_price}
          />
        </div>
      </form>
      <div className=" flex items-center justify-center mt-4">
        <button
          onClick={handleSubmit}
          className=" bg-slate-800 text-white py-1 px-2 rounded-md"
        >
          Submit
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default Add;
