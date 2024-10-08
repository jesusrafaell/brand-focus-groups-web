"use client";

import { EllipseGlow } from "@/utils/elipseGlow";
import { fadeUpDelay } from "@/utils/fadesFrame";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer className="bg-dark-bg overflow-hidden -mt-1">
      <div className="relative">
        <div className="min-h-[300px] flex flex-col w-full justify-center items-center pt-5 pb-10 px-5">
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10 w-full md:text-[20px] text-white font-montserrat uppercase">
            <div className="flex gap-x-10">
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUpDelay(0.2)}
                // viewport={{ once: true }}
              >
                <Link href="/projects">
                  <LinkFooter>projects</LinkFooter>
                </Link>
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUpDelay(0.3)}
                // viewport={{ once: true }}
              >
                <Link href="/about">
                  <LinkFooter>about</LinkFooter>
                </Link>
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUpDelay(0.4)}
                // viewport={{ once: true }}
              >
                <Link href="/templates">
                  <LinkFooter>templates</LinkFooter>
                </Link>
              </motion.span>
            </div>
            <div className="flex gap-x-10">
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUpDelay(0.5)}
                // viewport={{ once: true }}
              >
                <Link href="/services">
                  <LinkFooter>services</LinkFooter>
                </Link>
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUpDelay(0.6)}
                // viewport={{ once: true }}
              >
                <Link href="/focus">
                  <LinkFooter className="flex flex-col relative group relative flex">
                    Focus in
                    <b
                      className="text-[15px] text-nowrap absolute left-0 -bottom-[20px] 
               transition-[left] duration-500 ease-in-out 
               group-hover:left-[110%] 
               group-hover:delay-0 group-hover:transition-[top] 
               group-hover:top-[5px] 
               transition-[top] delay-500 ease-in-out"
                    >
                      your brand
                    </b>
                  </LinkFooter>
                </Link>
              </motion.span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-1 overflow-hidden p-10 md:p-10">
          <div className="relative">
            <div className="transform translate-x-[-80%] md:translate-x-[-60%] translate-y-[50%] md:translate-y-[35%]">
              <EllipseGlow />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LinkFooter = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  color: white;
  position: relative;
  transition: all 0.5s ease-in-out;
  display: inline-block;

  &:hover {
    color: #9747ff; /* Cambia el color al hacer hover */
    transform: scale(1.1); /* Aumenta el tamaño al hacer hover */
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #9747ff, #5b2b99);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%; /* La línea crece hasta 100% al hacer hover */
  }
`;

export default Footer;
