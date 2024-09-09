"use client";

import { FC, useState } from "react";
import logo from "@/images/logo.svg";
import Link from "next/link";
import Image from "next/image";

const NavBar: FC = () => {
  //   const t = useTranslations("NavBar");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 w-full fixed border-gray-200 dark:bg-gray-900 p-5 md:p-0 z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-montserrat">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="uppercase font-medium flex flex-col p-4 d:p-2 mt-4 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
              >
                Templates
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
