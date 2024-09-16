"use client";

import imgC from "@/images/c.svg";
import star from "@/images/star_icon.svg";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const { scrollYProgress } = useScroll(); // Detecta el progreso de scroll

  // Transformación de rotación en base al progreso del scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360], {
    clamp: false,
  });

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    setRotation(scrollPosition / 10);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setRotation(scrollPosition / 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-dark-bg -mt-1 overflow-hidden">
      <div className="min-h-[50vh] md:min-h-screen text-white grid w-full justify-center items-center">
        <div className="flex flex-col px-20">
          <motion.h1
            className="text-[40px] md:text-[85px] text-nowrap font-montserratBold"
            initial="hidden"
            whileInView="visible"
            variants={fadeX(-100)}
            viewport={{ once: true }} //una sola vez
          >
            Brand Focus
          </motion.h1>
          <div className="md:self-end md:w-[80%] lg:w-[80%] flex flex-col">
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
                className="w-[15px] md:w-[30px] self-start mt-2 md:pt-4"
              />
              <span className="text-[34px] md:text-[70px] text-nowrap font-montserrat font-bold pl-2">
                Creative Studio
              </span>
            </motion.h2>
            <motion.p
              className="md:self-end pb-5 md:pt-10 text-gray-200 text-[12px] md:text-[16px] md:w-[52%] text-justify"
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
            <div
              className="w-[50px] md:w-[150px] pin"
              style={{
                transform: `rotate(${rotation}deg)`, // Aplica la rotación calculada
                top: "50px",
                left: "50px",
                fontSize: "30px",
                transition: "transform 0.4s ease-out", // Transición suave de 0.3 segundos
              }}
            >
              <Image src={star} alt="star" className="w-full" />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="uppercase flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <span className="text-[27px] md:text-[36.7px] font-montserratBold font-extrabold ">
            CREATIVE STUDIO
          </span>
          <span className="text-[23.5px] md:text-[32px] -mt-2 font-montserratBold font-extrabold ">
            &STRATEGIC DESIGN
          </span>
          <span className="text-[12px] md:text-[20px] font-inter mt-2">
            AVAILABLE WORLDWIDe
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Studio;
