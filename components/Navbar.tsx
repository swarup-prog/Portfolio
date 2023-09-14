import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="flex">
        <Link href="/" className="title">
          Home
        </Link>
        <Link href="/">Works</Link>
        <Link href="/">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;

const styles = {
  link: "no-underline text-black",
};
