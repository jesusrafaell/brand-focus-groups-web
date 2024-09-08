"use client";

import { EllipseGlow } from "@/utils/elipseGlow";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Footer = () => {
  const fadeUp = (d = 0.3): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: d },
    },
  });

  return (
    <footer className="bg-dark-bg overflow-hidden -mt-1">
      <div className="relative">
        <div className="min-h-[300px] flex flex-col w-full justify-center items-center pt-5 pb-10 px-5">
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10 w-full md:text-[20px] text-white font-montserrat uppercase">
            <div className="flex gap-x-10">
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUp(0.2)}
                // viewport={{ once: true }}
              >
                <LinkFooter>projects</LinkFooter>
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUp(0.3)}
                // viewport={{ once: true }}
              >
                <LinkFooter>about</LinkFooter>
              </motion.span>
            </div>
            <div className="flex gap-x-10">
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUp(0.4)}
                // viewport={{ once: true }}
              >
                <LinkFooter>templates</LinkFooter>
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView="visible"
                variants={fadeUp(0.5)}
                // viewport={{ once: true }}
              >
                <LinkFooter>services</LinkFooter>
              </motion.span>
            </div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              variants={fadeUp(0.6)}
              // viewport={{ once: true }}
            >
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
            </motion.span>
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
    bottom: -2px; /* Ajusta esta distancia si es necesario */
    width: 0;
    height: 2px; /* Grosor de la línea */
    background: linear-gradient(
      to right,
      #9747ff,
      #5b2b99
    ); /* Gradiente de amarillo */
    transition: width 0.5s ease-in-out; /* Animación suave */
  }

  &:hover::after {
    width: 100%; /* La línea crece hasta 100% al hacer hover */
  }
`;

export default Footer;
