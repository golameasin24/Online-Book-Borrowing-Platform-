"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { BookContext } from "@/app/Context/CreateContext";

const CheckoutPage = () => {
  const { browBooks, setBrowBooks } = useContext(BookContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBorrowOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    const borrowedBooksDetails = browBooks
      .map((book) => `${book.title} (Quantity: ${book.quantity || 1} pcs)`)
      .join(", ");

    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      user_address: formData.address,
      books_details: borrowedBooksDetails,
      total_items: browBooks.reduce(
        (total, book) => total + (book.quantity || 1),
        0,
      ),
    };

    const SERVICE_ID = "service_lfyypac";
    const TEMPLATE_ID = "template_w6ocxi8";
    const PUBLIC_KEY = "NeS1skFUi5_wjrkxv";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        toast.success(
          " Congratulations! Your book borrowing request has been sent successfully.",
        );
        setBrowBooks([]);
        setFormData({ name: "", phone: "", address: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Sorry, failed to send the request. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const totalBooksCount = browBooks?.reduce(
    (total, book) => total + (book.quantity || 1),
    0,
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center sm:text-left">
        Borrowing Information (Checkout)
      </h2>

      {browBooks && browBooks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-700 mb-6 pb-2 border-b">
              Delivery Address (Please provide accurate info)
            </h3>

            <form onSubmit={handleBorrowOrder} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your active mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="House/Flat No, Road, Area, and City details"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-bold py-4 px-6 rounded-xl transition duration-200 text-center shadow-lg text-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 shadow-green-100"
                }`}
              >
                {loading ? "Sending Request..." : "Order for Borrowing"}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-bold text-gray-800">
                Borrow Summary
              </h3>
              <Link
                href="/cart"
                className="text-sm text-blue-600 hover:underline"
              >
                ← Back to Cart
              </Link>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {browBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-50"
                >
                  <span className="text-sm font-medium text-gray-700 line-clamp-1 w-3/4">
                    {book.title}
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-bold">
                    {book.quantity || 1} pcs
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-200 text-gray-700 font-semibold">
              <span>Total Quantity:</span>
              <span className="text-xl font-bold text-blue-600">
                {totalBooksCount} pcs
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-xl mb-6">
            Your borrow list is empty.
          </p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition shadow-md">
              Browse Book Library
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
