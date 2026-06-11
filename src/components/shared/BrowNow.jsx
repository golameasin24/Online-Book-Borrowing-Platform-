"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import { BookContext } from "@/app/Context/CreateContext";
import { toast } from "react-toastify";

const BrowNow = ({ bookData }) => {
  const { browBooks, setBrowBooks } = useContext(BookContext);

  const handleBrowBook = (bookData) => {
    const isexist = browBooks.find((book) => book.id === bookData.id);

    if (isexist) {
      toast.warning("This book is already in your cart!");
      return;
    }

    setBrowBooks((prevBooks) => [...prevBooks, { ...bookData, quantity: 1 }]);
    toast.success("Book added to cart successfully!");
  };

  return (
    <>
      <Button
        onClick={() => handleBrowBook(bookData)}
        className="bg-green-700 text-white px-5 py-2 rounded-2xl"
      >
        Borrow Now
      </Button>
    </>
  );
};

export default BrowNow;
