import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 rounded-lg px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        CRUD APP! W/ MongoDB
      </Link>
      <Link
        className="text-black p-2 rounded-md bg-white cursor-pointer"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}

export default Navbar;
