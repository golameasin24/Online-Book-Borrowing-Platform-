import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
