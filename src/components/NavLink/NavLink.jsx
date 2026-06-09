"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      className={`${isActive ? "text-green-800 border-b-2 border-green-800" : "text-muted-foreground hover:text-green-800 hover:border-b-2 hover:border-green-800 transition-all"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
