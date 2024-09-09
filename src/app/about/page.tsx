"use client"; // Esto debe estar al principio del archivo

import styled, { keyframes } from "styled-components";
import imgC from "@/images/c.svg";
import about1 from "@/images/about/about_1.png";
import about2 from "@/images/about/about_2.png";
import about3 from "@/images/about/about_3.png";
import { motion } from "framer-motion";
import { fadeOpacity, fadeUpDelay, fadeUpY } from "@/utils/fadesFrame";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-aboutground">
      {/* title */}
      <div
        id="about-1"
        // pt-[15rem]
        className="min-h-screen text-white flex flex-col items-center justify-center"
      >
        <div className="flex flex-col jusitfy-center items-center w-full max-w-[80%] gap-y-20">
          <motion.div
            className="text-[22px] md:text-[45px] font-montserrat font-bold flex w-full uppercase px-10 flex flex-col"
            initial="hidden"
            whileInView="visible"
            variants={fadeOpacity()}
            viewport={{ once: true }} //una sola vez
          >
            <span className="font-bold flex">
              Brand focus
              <Image
                src={imgC}
                alt="C"
                width={50}
                className="ml-4 w-[20px] md:w-[50px]"
              />
            </span>
            <span>Creating</span>
            <span>memorable brands</span>
          </motion.div>
          <motion.div
            className="w-full flex justify-end md:px-20"
            initial="hidden"
            whileInView="visible"
            variants={fadeUpDelay(0.5)}
            viewport={{ once: true }} //una sola vez
          >
            <h2 className="text-[14px] md:text-[30px] uppercase font-nanum text-nowrap">
              {"let's start now"}
            </h2>
          </motion.div>
        </div>
      </div>
      {/* info */}
      <div className="flex justify-center items-end w-full py-20">
        <motion.div
          className="grid md:grid-cols-3 text-white gap-x-5 px-10 gap-y-5 md:gap-y-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpY()}
          viewport={{ once: true }} //una sola vez
        >
          <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
            <h2 className="text-[25px] font-montserrat font-bold capitalize">
              creative studio
            </h2>
          </div>
          <div className="md:flex-col gap-y-10 w-[300px] md:w-[400px] grid grid-cols-2 gap-x-3 md:flex">
            <div className="flex flex-col font-montserrat leading-none space-y-[2px] max-w-[250px]">
              <h2 className="text-[24px] uppercase ">services</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                03
              </h3>
              <p className="text-[14px]">
                Branding, Web Development, Strategy,
              </p>
            </div>
            <div className="flex flex-col font-montserrat leading-none space-y-[2px] max-w-[250px]">
              <h2 className="text-[24px] uppercase ">brands</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                +40
              </h3>
              <p className="text-[14px]">
                Branding, Web Development, Digital Products, Content, Strategy,
                Templates, Video edition.
              </p>
            </div>
          </div>
          <div className="md:flex-col gap-y-10 w-[300px] md:w-[400px] grid grid-cols-2 gap-x-3 md:flex">
            <div className="flex flex-col font-montserrat leading-none space-y-[2px] max-w-[250px]">
              <h2 className="text-[24px] uppercase ">years</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                05
              </h3>
              <p className="text-[14px]">
                We are proud of our years of experience, we continue to grow
                little by little
              </p>
            </div>
            <div className="flex flex-col font-montserrat leading-none space-y-[2px] max-w-[250px]">
              <h2 className="text-[24px] uppercase ">clients</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                +27
              </h3>
              <p className="text-[14px]">
                We are proud of our years of experience, we continue to grow
                little by little
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center pb-20 pt-10">
        <motion.div
          className="grid md:grid-cols-3 gap-x-5 px-10 md:h-[500px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpDelay(0)}
          viewport={{ once: true }} //una sola vez
        >
          <motion.div
            className="w-[300px] md:w-[400px]"
            variants={fadeUpDelay(0.4)}
          >
            <Image
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
              src={about1}
              alt="about1"
            />
          </motion.div>
          <motion.div
            className="w-[300px] md:w-[400px]"
            variants={fadeUpDelay(0.65)}
          >
            <Image
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
              src={about2}
              alt="about2"
            />
          </motion.div>
          <motion.div
            className="w-[300px] md:w-[400px]"
            variants={fadeUpDelay(0.9)}
          >
            <Image
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
              src={about3}
              alt="about3"
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
