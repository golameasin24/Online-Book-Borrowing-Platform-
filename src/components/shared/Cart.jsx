"use client";

import { BookContext } from "@/app/Context/CreateContext";
import { useContext } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cart = () => {
  const { browBooks } = useContext(BookContext);

  const totalBooksCount =
    browBooks?.reduce((total, book) => {
      return total + (book.quantity || 1);
    }, 0) || 0;

  return (
    <div>
      <Button
        asChild
        variant="outline"
        className="relative flex items-center gap-2 px-4 py-5 border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shadow-sm"
      >
        <Link href="/cart" className="no-underline">
          <HiOutlineShoppingBag className="w-5 h-5 text-gray-700" />

          <span className="font-semibold text-sm text-gray-700 hidden sm:inline">
            Cart
          </span>

          {totalBooksCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] font-bold text-white shadow-md animate-in fade-in zoom-in duration-300">
              {totalBooksCount}
            </span>
          )}
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
