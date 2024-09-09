"use client";

import imgC from "@/images/c.svg";
import star from "@/images/star_icon.svg";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Studio = () => {
  const fadeX = (x: number): Variants => ({
    hidden: { opacity: 0, x: x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
    },
  });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-dark-bg -mt-1">
      <div className="min-h-[50vh] md:min-h-screen text-white grid w-full justify-center items-center">
        <div className="flex flex-col w-[440px] md:w-[800px] lg:w-[1020px] px-10">
          <motion.h1
            className="text-[40px] md:text-[85px] text-nowrap font-montserrat font-bold"
            initial="hidden"
            whileInView="visible"
            variants={fadeX(-100)}
            viewport={{ once: true }} //una sola vez
          >
            Brand Focus
          </motion.h1>
          <div className="self-end w-[80%] md:w-[80%] lg:w-[80%] flex flex-col">
            <motion.h2
              className="flex"
              initial="hidden"
              whileInView="visible"
              variants={fadeX(100)}
              viewport={{ once: true }} //una sola vez
            >
              <Image
                src={imgC}
                alt="C"
                width={50}
                className="w-[20px] md:w-[50px]"
              />
              <span className="text-[34px] md:text-[70px] text-nowrap font-montserrat text-bold pl-2 md:pl-4">
                Creative Studio
              </span>
            </motion.h2>
            <motion.p
              className="self-end pt-5 md:pt-10 text-gray-200 text-[12px] md:text-[16px] w-[280px] md:w-[380px] text-justify"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              We design unique and powerful visual identities that connect with
              your audience, transforming your vision into a memorable brand.
            </motion.p>
          </div>
          <motion.div
            className="w-[50px] md:w-[150px]"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <Image src={star} alt="star" className="w-full" />
          </motion.div>
        </div>
        <motion.div
          className="uppercase flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <span className="text-[12px] md:text-[20px] font-inter">
            AVAILABLE WORLDWIDe
          </span>
          <span className="text-[27px] md:text-[36.7px] font-montserratBold font-extrabold ">
            CREATIVE STUDIO
          </span>
          <span className="text-[23.5px] md:text-[32px] -mt-2 font-montserratBold font-extrabold ">
            &STRATEGIC DESIGN
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Studio;
