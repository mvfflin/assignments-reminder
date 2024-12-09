"use client";

import Image from "next/image";
import { useEffect } from "react";

const Header = () => {
  // useEffect(() => {
  //   const header = document.getElementById("header");
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY == 0) {
  //       header?.classList.add("!bg-opacity-10");
  //     } else {
  //       header?.classList.remove("!bg-opacity-10");
  //     }
  //   });

  //   if (window.scrollY == 0) {
  //     header?.classList.add("!bg-opacity-10");
  //   } else {
  //     header?.classList.remove("!bg-opacity-10");
  //   }
  // }, []);

  return (
    <header
      id="header"
      className="transition-all h-20 bg-zinc-900 w-full flex justify-between fixed font-poppins z-50"
    >
      <div className="my-auto ml-12 float-start flex space-x-5">
        {/* <Image
          alt="hockey-logo"
          src="/hockey.png"
          width={600}
          height={600}
          className="!w-16 aspect-square rounded-full m-auto"
        /> */}
        <h1 className="font-bold text-white text-3xl m-auto">Tugas 11.C</h1>
      </div>
      <div className="my-auto mr-12 float-end space-x-5 list-none lg:hidden flex">
        <button>O</button>
      </div>
      <ul className="my-auto mr-12 float-end space-x-5 list-none hidden lg:flex">
        <li>Home</li>
        <li>Tambah Tugas</li>
      </ul>
    </header>
  );
};

export default Header;
