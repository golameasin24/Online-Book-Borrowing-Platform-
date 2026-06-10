import Link from "next/link";
import React from "react";

const AuthtenticationLayout = ({ children }) => {
  return (
    <div>
      <div className="mt-10 container mx-auto">
        <Link className="px-5 py-2 rounded-2xl bg-green-500" href={"/"}>
          Back to home
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthtenticationLayout;
