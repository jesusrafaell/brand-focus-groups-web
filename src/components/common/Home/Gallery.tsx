"use client";

import imagen1 from "@/images/home/imagen_1.png";
import imagen2 from "@/images/home/imagen_2.png";
import imagen3 from "@/images/home/imagen_3.png";
import imagen4 from "@/images/home/imagen_4.png";
import imagen5 from "@/images/home/imagen_5.png";
import imagen6 from "@/images/home/imagen_6.png";
import imagen7 from "@/images/home/imagen_7.png";
import { EllipseGlow } from "@/utils/elipseGlow";
import { motion, Variants } from "framer-motion";

const Gallery = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const fadeUp2: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-dark-bg -mt-1 relative w-full py-10">
      <div className="absolute top-[-10%] left-0 z-1 overflow-hidden p-10 md:p-20">
        <div className="relative">
          <div className="transform translate-x-[-80%] md:translate-x-[-70%]">
            <EllipseGlow />
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col w-full justify-center items-center p-10 gap-y-5">
        <div className="flex flex-col gap-y-4 overflow-hidden z-10">
          <motion.div
            className="flex w-full gap-x-4 "
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }} //una sola vez
          >
            <motion.img
              src={imagen1.src}
              alt="imagen1"
              className="max-w-[60%]"
              variants={fadeUp}
            />
            <motion.img
              src={imagen2.src}
              alt="imagen2"
              className="max-w-[40%]"
              variants={fadeUp2}
            />
          </motion.div>
          <motion.div
            className="flex w-full gap-x-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }} //una sola vez
          >
            <motion.div
              className="flex flex-col max-w-[40%] justify-between items-between"
              variants={fadeUp2}
            >
              <img src={imagen3.src} alt="imagen3" className="w-full" />
              <img src={imagen4.src} alt="imagen4" className="w-full" />
            </motion.div>
            <motion.div className="max-w-[60%]" variants={fadeUp}>
              <img src={imagen5.src} alt="imagen5" />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex w-full gap-x-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }} //una sola vez
          >
            <motion.img
              src={imagen6.src}
              alt="imagen6"
              className="max-w-[60%]"
              variants={fadeUp}
            />
            <motion.img
              src={imagen7.src}
              alt="imagen7"
              className="max-w-[40%] z-10"
              variants={fadeUp2}
            />
          </motion.div>
        </div>
        <div>
          <h1 className="text-[12px] md:text-[20px] uppercase underline underline-offset-8 font-inter cursor-pointer hover:text-transparent bg-gradient-to-r from-yellow-300 to-yellow-300 bg-[length:0%_100%] bg-left hover:bg-[length:100%_100%] hover:bg-right transition-all duration-500 ease-in-out bg-clip-text">
            see more
          </h1>
        </div>
      </div>
      <div className="absolute bottom-[40px] right-0 z-1 overflow-hidden p-10 md:p-20">
        <div className="relative">
          <div className="transform translate-x-[80%] md:translate-x-[70%]">
            <EllipseGlow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
