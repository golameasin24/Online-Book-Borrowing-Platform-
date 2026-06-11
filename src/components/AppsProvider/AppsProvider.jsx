"use client";
import BooksProvider from "@/app/Context/BooksProvider";
import React from "react";

const AppsProvider = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default AppsProvider;
