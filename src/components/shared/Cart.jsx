"use client";

import { BookContext } from "@/app/Context/CreateContext";
import { useContext } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cart = () => {
  const { browBooks, setBrowBooks } = useContext(BookContext);
  return (
    <div>
      <Button asChild>
        <Link href={`/cart`}>Cart:{browBooks.length}</Link>
      </Button>
    </div>
  );
};

export default Cart;
