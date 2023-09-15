import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full z-10 flex justify-end px-[60px] h-[70px] items-center ">
      <nav className="flex gap-x-8">
        <Link href="/" className="nav-title">
          Home
        </Link>
        <Link href="/works" className="nav-title">
          Works
        </Link>
        <Link href="/contact" className="nav-title">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

const styles = {
  link: "no-underline text-black",
};
