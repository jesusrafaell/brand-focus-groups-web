"use client";

import { FC, useState } from "react";
import logo from "@/images/logo.svg";
import logo2 from "@/images/logo_v2.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeOpacity } from "@/utils/fadesFrame";

const NavBar: FC = () => {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="top-0 w-full fixed border-gray-200 dark:bg-gray-900 p-5 md:py-2 md:px-2 z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-montserrat">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-white"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeOpacity()}
            viewport={{ once: true }}
            className="relative hover:scale-110 active:scale-95 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <LogoImage
              src={logo}
              isVisible={isHomeRoute}
              alt="brand focus group"
            />
            <LogoImage
              src={logo2}
              isVisible={!isHomeRoute}
              alt="brand focus group v2"
            />
          </motion.div>
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
          <ul className="uppercase font-medium flex flex-col p-4 d:p-2 mt-4 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                href="/projects"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
                aria-current="page"
              >
                Projects
              </Link>
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
              <Link
                href="/templates"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/focus"
                className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-gray-500 md:p-0"
              >
                <div className="flex flex-col relative group relative flex">
                  Focus in
                  <b
                    className="font-bold text-[15px] text-nowrap absolute left-0 -bottom-[20px] 
                              transition-[left] duration-500 ease-in-out 
                              transition-[top] delay-500 ease-in-out"
                  >
                    your brand
                  </b>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const LogoImage = styled(Image)<{ isVisible: boolean }>`
  height: 2rem;
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
  transform-origin: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible
      ? "scale(1) translateY(0) rotate(0deg)"
      : "scale(0.75) translateY(-10px) rotate(-10deg)"};
  position: ${(props) => (props.isVisible ? "relative" : "absolute")};
  top: 0;
  left: 0;
`;

export default NavBar;
