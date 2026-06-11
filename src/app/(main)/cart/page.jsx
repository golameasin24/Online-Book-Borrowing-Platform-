"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BookContext } from "@/app/Context/CreateContext";

const CartPage = () => {
  const { browBooks, setBrowBooks } = useContext(BookContext);

  const handleIncreaseQuantity = (id) => {
    const updatedBooks = browBooks.map((book) => {
      if (book.id === id) {
        const currentQty = book.quantity || 1;

        if (currentQty < book.available_quantity) {
          return { ...book, quantity: currentQty + 1 };
        } else {
          alert(`Sorry, The copy books ${book.available_quantity} is avalable`);
        }
      }
      return book;
    });
    setBrowBooks(updatedBooks);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedBooks = browBooks.map((book) => {
      if (book.id === id) {
        const currentQty = book.quantity || 1;

        if (currentQty > 1) {
          return { ...book, quantity: currentQty - 1 };
        }
      }
      return book;
    });
    setBrowBooks(updatedBooks);
  };

  const handleDelete = (id) => {
    const updatedBooks = browBooks.filter((book) => book.id !== id);
    setBrowBooks(updatedBooks);
  };

  const totalBooksCount = browBooks?.reduce((total, book) => {
    return total + (book.quantity || 1);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Your Cart</h2>

      {browBooks && browBooks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {browBooks.map((book) => {
              const currentQuantity = book.quantity || 1;

              return (
                <div
                  key={book.id}
                  className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-2xl shadow-md border border-gray-100 gap-4 transition hover:shadow-lg"
                >
                  {/* ইমেজ এবং বিবরণ */}
                  <div className="flex gap-4 items-center w-full sm:w-auto">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={book.image_url || "/image.jpg"}
                        alt={book.title}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                  </div>

                  <div className="flex justify-between sm:justify-end items-center gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <button
                        onClick={() => handleDecreaseQuantity(book.id)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition font-bold text-lg"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-sm font-semibold text-gray-800 w-10 text-center">
                        {currentQuantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(book.id)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition font-bold text-lg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleDelete(book.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                      title="মুছে ফেলুন"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
              Browing summary
            </h3>
            <div className="flex justify-between text-gray-600">
              <span>Total book Item:</span>

              <span className="font-semibold text-gray-800">
                {totalBooksCount} pice
              </span>
            </div>

            <Link href="/checkout" className="block w-full">
              <button className="w-full bg-green-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition duration-200 text-center shadow-md shadow-blue-200">
                Countune with checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-lg mb-4">Your Cart is Empty</p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition">
              Browse book now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
