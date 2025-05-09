import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

function Footer2() {
  return (
    <div className="bg-black text-white pt-4 pb-10 font-extralight tracking-tight">
      <div className="container mx-auto flex flex-col items-center text-center md:text-center gap-3 lg:gap-4">
        {/* Copyright Section */}
        <div className="text-md">
          2025 © <span className="font-semibold">Jatin Gaud</span>
        </div>

        {/* Icons Section */}
        <div className="flex flex-row md:flex-row items-center justify-center md:justify-center gap-2">
          <a
            className="no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 text-sm items-center border-1 border-zinc-600  p-2 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_1px_#ffffff]">
              {" "}
              <FaLinkedinIn />
            </div>
          </a>

          <a
            className="no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lex gap-2 text-sm items-center border-1 border-zinc-600 p-2 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_1px_#ffffff]">
              {" "}
              <FaGithub />
            </div>
          </a>

          <a
            className="no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lex gap-2 text-sm items-center border-1 border-zinc-600 p-2 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_1px_#ffffff]">
              <FaDribbble />
            </div>
          </a>

          <Link
            href="mailto:iamjatingaud@gmail.com?subject=Hi, Jatin!"
            className="no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lex gap-2 text-sm items-center border-1 border-zinc-600 p-2 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_1px_#ffffff]">
              <IoMailOpen />
            </div>
          </Link>
        </div>

        {/* Developer Note Section */}
        <div className="text-sm text-zinc-400">
          Developed by Jatin in Next.js
        </div>
      </div>
    </div>
  );
}

export default Footer2;
