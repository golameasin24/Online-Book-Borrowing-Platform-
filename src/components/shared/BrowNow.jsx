import React from "react";
import { Button } from "../ui/button";

const BrowNow = ({ bookData }) => {
  console.log(bookData);
  return (
    <>
      <Button className={`bg-green-700 text-white px-5 py-2 rounded-2xl`}>
        Borrow Now
      </Button>
    </>
  );
};

export default BrowNow;
