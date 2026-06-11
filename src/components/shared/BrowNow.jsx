"use client";
import { useContext } from "react";
import { Button } from "../ui/button";
import { BookContext } from "@/app/Context/CreateContext";

const BrowNow = ({ bookData }) => {
  const { browBooks, setBrowBooks } = useContext(BookContext);
  const handleBrowBook = (bookData) => {
    const isexist = browBooks.find((book) => book.id === bookData.id);

    if (isexist) {
      alert("book already exist");
      return;
    }

    setBrowBooks((prevBooks) => [...prevBooks, bookData]);
  };

  return (
    <>
      <Button
        onClick={() => handleBrowBook(bookData)}
        className={`bg-green-700 text-white px-5 py-2 rounded-2xl`}
      >
        Borrow Now
      </Button>
    </>
  );
};

export default BrowNow;
