"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { BookContext } from "@/app/Context/CreateContext";

const CheckoutPage = () => {
  const { browBooks, setBrowBooks } = useContext(BookContext);

  // ফর্মের স্টেট
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EmailJS এর মাধ্যমে ইমেইল পাঠানোর ফাংশন
  const handleBorrowOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    // কার্টের বইগুলোর নাম এবং কোয়ান্টিটি একটি সুন্দর টেক্সট ফরম্যাটে রূপান্তর
    const borrowedBooksDetails = browBooks
      .map((book) => `${book.title} (পরিমাণ: ${book.quantity || 1} টি)`)
      .join(", ");

    // EmailJS এ পাঠানোর জন্য ডাটা অবজেক্ট
    // (আপনার EmailJS টেমপ্লেটের ভেরিয়েবল নামের সাথে এগুলো মিলিয়ে নিবেন)
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

    // ⚠️ আপনার EmailJS এর আসল ID গুলো এখানে বসাবেন
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        alert("🎉 অভিনন্দন! আপনার বই ধারের অনুরোধটি সফলভাবে পাঠানো হয়েছে।");
        // অর্ডার সফল হলে কার্ট খালি করে দেওয়া
        setBrowBooks([]);
        // ফর্ম রিসেট করা
        setFormData({ name: "", phone: "", address: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("দুঃখিত, ইমেইল পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // কার্টের মোট বইয়ের সংখ্যা গণনা
  const totalBooksCount = browBooks?.reduce(
    (total, book) => total + (book.quantity || 1),
    0,
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center sm:text-left">
        বই ধারের তথ্য (Checkout)
      </h2>

      {browBooks && browBooks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* বাম পাশ: ডেলিভারি বা ধার নেওয়ার ফর্ম */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-700 mb-6 pb-2 border-b">
              ডেলিভারি ঠিকানা (অনুগ্রহপূর্বক সঠিক তথ্য দিন)
            </h3>

            <form onSubmit={handleBorrowOrder} className="space-y-5">
              {/* নাম ফিল্ড */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* ফোন ফিল্ড */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ফোন নম্বর <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="আপনার সচল মোবাইল নম্বর লিখুন"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* ঠিকানা ফিল্ড */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পূর্ণ ঠিকানা <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="বাসা/ফ্ল্যাট নম্বর, রোড, এলাকা এবং জেলার নাম বিস্তারিত লিখুন"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* সাবমিট বাটন */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-bold py-4 px-6 rounded-xl transition duration-200 text-center shadow-lg text-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 shadow-green-100"
                }`}
              >
                {loading
                  ? "অনুরোধ পাঠানো হচ্ছে..."
                  : "বই ধারের জন্য অর্ডার করুন"}
              </button>
            </form>
          </div>

          {/* ডান পাশ: বইয়ের সংক্ষিপ্ত তালিকা */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-bold text-gray-800">
                ধরের তালিকার সামারি
              </h3>
              <Link
                href="/cart"
                className="text-sm text-blue-600 hover:underline"
              >
                ← কার্টে ফিরুন
              </Link>
            </div>

            {/* বইয়ের নাম ও সংখ্যার লিস্ট */}
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
                    {book.quantity || 1} টি
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-200 text-gray-700 font-semibold">
              <span>সর্বমোট বইয়ের পরিমাণ:</span>
              <span className="text-xl font-bold text-blue-600">
                {totalBooksCount} টি
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* কার্ট খালি থাকলে */
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-xl mb-6">
            আপনার ধারের তালিকায় কোনো বই নেই।
          </p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition shadow-md">
              বই লাইব্রেরি ব্রাউজ করুন
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
