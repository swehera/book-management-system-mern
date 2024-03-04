import { useEffect, useState } from "react";
import { AllBook } from "../data/allBooks";
import axios from "axios";

const Hero = () => {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allbooks").then((res) => {
      if (res?.status === 200) {
        setBooks(res?.data);
      } else {
        console.log("data fetching error", res);
      }
    });
  }, []);
  console.log(book);

  return (
    <div className=" grid grid-cols-4 flex items-center justify-center gap-4 py-4 px-24  mt-6">
      {book.map((item: AllBook) => (
        <div
          key={item?._id}
          className=" rounded-md border-solid border-2 border-black px-3 py-2 "
        >
          <div className=" h-32 w-auto">
            <p className=" text-[20px] text-gray-800 font-semibold">
              <span className=" text-pink-600">Book Name:</span>{" "}
              {item?.book_name}
            </p>
            <p>
              <span className=" font-bold">Author: </span>
              {item?.book_author}
            </p>
            <p>
              <span className=" font-bold">Price: </span>
              {item?.book_price}$
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
