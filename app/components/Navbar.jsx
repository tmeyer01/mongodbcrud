import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        MongoDB CRUD
      </Link>
      <Link
        className="text-black p-2  bg-white cursor-pointer"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}

export default Navbar;
