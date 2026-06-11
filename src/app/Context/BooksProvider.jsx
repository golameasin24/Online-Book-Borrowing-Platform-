"use client";

import { useState } from "react";
import { BookContext } from "./CreateContext";

const BooksProvider = ({ children }) => {
  const [browBooks, setBrowBooks] = useState([]);

  return (
    <BookContext.Provider value={{ browBooks, setBrowBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;
