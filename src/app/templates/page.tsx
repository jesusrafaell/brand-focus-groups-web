"use client"; // Esto debe estar al principio del archivo

import Image from "next/image";
import bgImg from "@/images/templates/tempates-bg.png";
import { templates } from "@/utils/templates";
import CardTemplate from "./Card";
import { motion } from "framer-motion";
import { fadeUpY } from "@/utils/fadesFrame";

export default function Templates() {
  return (
    <main className="bg-white">
      <div id="templates-1" className="min-h-[90vh] text-white">
        <motion.div
          className="relative w-full h-[700px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          // variants={fadeOpacity(0)}
          variants={fadeUpY({ y: -50, delay: 0 })}
        >
          {/* Imagen de fondo */}
          <Image
            src={bgImg}
            alt="bg-templates"
            className="w-full h-full object-cover absolute z-[0]"
            layout="fill"
            priority={true} // Asegura que la imagen se cargue rápido
          />

          <div className="relative z-[10] flex justify-center items-end h-full">
            <h1
              className="text-white font-bold font-montserratBold z-[10] text-nowrap uppercase"
              style={{ fontSize: "8.5vw" }}
            >
              CHOOSE YOUR OPTION
            </h1>
          </div>
        </motion.div>
      </div>
      {/* templates */}
      <div className="w-fit mx-auto flex flex-col min-h-screen pb-20">
        <div className="capitalize font-montserrat font-bold text-[20px] text-black flex gap-x-10">
          <span>All</span>
          <span>Branding</span>
          <span>Social Media</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 md:gap-x-20 mt-10 mb-5">
          {templates.map((tempate, i) => {
            const { img, title, desc } = tempate;
            return <CardTemplate key={i} img={img} title={title} desc={desc} />;
          })}
        </div>
      </div>
    </main>
  );
}
