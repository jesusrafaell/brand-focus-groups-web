"use client";

import { fadeOpacity } from "@/utils/fadesFrame";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Main = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/bg-home.png')", // Ruta de la imagen en la carpeta public
      }}
    >
      <motion.div
        className="grid items-center justify-center min-h-[90vh]"
        initial="hidden"
        whileInView="visible"
        variants={fadeOpacity()}
        viewport={{ once: true }} //una sola vez
      >
        <div className="text-[24px] md:text-[45px] font-montserrat flex uppercase box-content h-[40px] md:h-[70px]">
          <h1 className="font-montserratBold">focus in your&nbsp;</h1>
          <div className="overflow-hidden">
            <FlipSpan>Brand</FlipSpan>
            <FlipSpan>Dream</FlipSpan>
            <FlipSpan>Style</FlipSpan>
          </div>
        </div>
      </motion.div>
      <div className="relative py-5 px-20 text-[25px]">
        <MarqueeContainer>
          <MarqueeInner className="font-nanum">
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
            <span className="text-center text-nowrap px-4">
              creating unforgettable experiences
            </span>
          </MarqueeInner>
        </MarqueeContainer>
      </div>
    </div>
  );
};

// Definir la animación de "flip"
const flip = keyframes`
  0% {
    transform: translateY(50%);
  }
  15% {
    transform: translateY(-20%);
  }
  30% {
    transform: translateY(0%);
  }
  45% {
    transform: translateY(-122%);
  }
  60% {
    transform: translateY(-100%);
  }
  75% {
    transform: translateY(-212%);
  }
  90% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(-300%);
  }
`;

// Componente para el texto animado
const FlipSpan = styled.span`
  display: block;
  height: 100%;
  // border: 1px solid white;
  animation: ${flip} 8s infinite;
`;

// const moveInitial = "calc(-23.4% + 20vw)";
// const moveFinal = "calc(-36% + 20vw)";

const moveInitial = "-4%";
const moveFinal = "-14%";

// Definir la animación de "flip"
const marquee = keyframes`
  0% {
    transform: translate3d(${moveInitial}, 0, 0);
  }
  100% {
    transform: translate3d(${moveFinal}, 0, 0);
  }
`;

const MarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const MarqueeInner = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(${moveInitial}, 0, 0);
  animation-play-state: running;
  animation: ${marquee} 8s linear infinite;
  opacity: 1;
  transition: opacity 0.4s;
`;

export default Main;
