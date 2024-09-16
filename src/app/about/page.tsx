"use client"; // Esto debe estar al principio del archivo

import styled, { keyframes } from "styled-components";
import imgC from "@/images/c.svg";
import about1 from "@/images/about/about_1.png";
import about2 from "@/images/about/about_2.png";
import about3 from "@/images/about/about_3.png";
import { motion } from "framer-motion";
import { fadeOpacity, fadeUpDelay, fadeUpY } from "@/utils/fadesFrame";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-aboutground">
      <div
        id="about-1"
        className="min-h-screen text-white flex flex-col items-center justify-center"
      >
        <div className="flex flex-col jusitfy-center items-center w-full max-w-[80%] gap-y-20">
          <motion.div
            className="text-[22px] md:text-[45px] font-montserratBold font-bold flex w-full uppercase px-10 flex flex-col"
            initial="hidden"
            whileInView="visible"
            variants={fadeOpacity()}
            viewport={{ once: true }} //una sola vez
          >
            <span className="flex">
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
            <h2 className="text-[20px] md:text-[40px] uppercase font-nanum text-nowrap">
              {"let's start now"}
            </h2>
          </motion.div>
        </div>
      </div>
      {/* info */}
      <div className="flex justify-center items-center md:items-end w-full py-20">
        <motion.div
          className="grid md:grid-cols-3 text-white gap-x-5 px-10 gap-y-5 md:gap-y-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpY()}
          viewport={{ once: true }} //una sola vez
        >
          <ContainerCard>
            <h2 className="text-[30px] md:text-[25px] font-montserrat font-bold capitalize flex md:block flex-col gap-x-2 items-center">
              <span>creative</span> <span>studio</span>
            </h2>
          </ContainerCard>
          <ContainerCard>
            <InnerCard>
              <h2 className="text-[24px] uppercase ">services</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                03
              </h3>
              <p className="text-[14px]">
                Branding, Web Development, Strategy,
              </p>
            </InnerCard>
            <InnerCard>
              <h2 className="text-[24px] uppercase ">brands</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                +40
              </h3>
              <p className="text-[14px]">
                Branding, Web Development, Digital Products, Content, Strategy,
                Templates, Video edition.
              </p>
            </InnerCard>
          </ContainerCard>
          <ContainerCard>
            <InnerCard>
              <h2 className="text-[24px] uppercase ">years</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                05
              </h3>
              <p className="text-[14px]">
                We are proud of our years of experience, we continue to grow
                little by little
              </p>
            </InnerCard>
            <InnerCard>
              <h2 className="text-[24px] uppercase ">clients</h2>
              <h3 className="text-[40px] md:text-[60px] font-montserratBold font-bold">
                +27
              </h3>
              <p className="text-[14px]">
                We are proud of our years of experience, we continue to grow
                little by little
              </p>
            </InnerCard>
          </ContainerCard>
        </motion.div>
      </div>
      <div className="flex justify-center items-center pb-20 pt-10">
        <motion.div
          className="grid md:grid-cols-3 gap-x-5 jusitfy-center md:min-h-[500px] overflow-hidden"
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

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 400px;
    gap: 1.5rem;
  }
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  line-height: 1;
  max-width: 250px;
  height: 150px;
  text-align: start;

  @media (max-width: 768px) {
    row-gap: 5px;
    max-width: 200px;
    text-align: center;
  }

  & > h2 {
    font-size: 24px;
    text-transform: uppercase;
  }

  & > h3 {
    font-size: 40px;

    @media (min-width: 768px) {
      font-size: 60px;
    }

    font-family: "MontserratBold", sans-serif;
    font-weight: bold;
  }

  & > p {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  & > *:not(:last-child) {
    margin-bottom: 2px; /* space-y-[2px] equivalent */
  }
`;
