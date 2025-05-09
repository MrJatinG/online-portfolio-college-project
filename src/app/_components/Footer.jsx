import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col tracking-tight text-zinc-700 py-4 border-t-2 border-black">
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col-lg-6 text-lg-start mb-2 mb-lg-0">
            2025 © <span className="font-semibold">jatin gaud</span>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end gap-2">
            <Link
              
              className="no-underline text-zinc-700 hover:text-[#158163]"
              target="_blank"
              rel="noopener noreferrer"
            >
              linked in
            </Link>
            <span>•</span>
            <Link
              
              className="no-underline text-zinc-700 hover:text-[#158163]"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
            <span>•</span>
            <Link
              href={"mailto:iamjatingaud@gmail.com?subject=Hello, Jatin!"}
              className="no-underline text-zinc-700 hover:text-[#158163]"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-mail
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            designed and developed by
            <a className="navbar-brand ms-2" href="#">
              <img
                src="https://i.imgur.com/Tu3FLtC.png"
                alt="Logo"
                className="w-10 inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
