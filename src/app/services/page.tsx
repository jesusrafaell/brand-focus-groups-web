"use client";

import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { IContent, services } from "./data";
import { SlArrowLeft } from "react-icons/sl";
import { data } from "framer-motion/client";
import { motion } from "framer-motion";
import { fadeOpacity } from "@/utils/fadesFrame";

export default function Services() {
  const [selected, setSelected] = useState<IContent>(services.services);
  const [expandedItem, setExpandedItem] = useState<number | null>(null); // Estado para manejar el item expandido

  // State to track changes in selected.name for triggering animations
  const [nameChanged, setNameChanged] = useState<boolean>(false);

  const handleClickItem = (
    query: "services" | "branding" | "webDevelopment" | "strategy"
  ) => {
    setNameChanged(true); // Trigger the opacity animation
    setSelected(services[query]);
    setExpandedItem(null);
  };

  useEffect(() => {
    if (nameChanged) {
      const timer = setTimeout(() => {
        setNameChanged(false); // Reset after animation
      }, 500); // Duration of the animation

      return () => clearTimeout(timer);
    }
  }, [nameChanged]);

  return (
    <main className="bg-aboutground">
      <div
        id="services-1"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <motion.div
          className="bg-[#151122] text-white flex flex-col md:flex-row justify-between w-full max-w-[1400px] px-20 py-20 min-h-[800px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeOpacity()}
          viewport={{ once: true }} //una sola vez
        >
          <LeftContent selected={selected.name}>
            <h2 className="text-[40px] font-bold uppercase flex justify-start items-center">
              {selected.name !== services.services.name && (
                <div className="mr-4">
                  <div
                    onClick={() => handleClickItem("services")}
                    className="relative inline-flex items-center pl-2 pr-14 py-4 overflow-hidden text-lg font-medium text-white border-2 border-transparent rounded-full hover:text-white hover:border-white group hover:bg-white cursor-pointer"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-aboutground opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute text-[15px] right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-[-30%] ease">
                      Back
                    </span>
                    <span className="relative">
                      <SlArrowLeft size="lg" className="h-6 w-6 " />
                    </span>
                  </div>
                </div>
              )}
              {selected.left.title}
            </h2>
            <p>{selected.left.desc}</p>
          </LeftContent>

          {/* right */}
          <RightContent nameChanged={nameChanged}>
            {selected.right.map((item, i) => (
              <RightItem
                key={`${i}-${selected.name}`}
                onClick={(e) => {
                  if (item.query) {
                    handleClickItem(item.query as any);
                  }
                }}
              >
                <h2
                  className={`text-[35px] cursor-pointer transition-all duration-300 ${
                    selected.name == services.services.name && "hover:p-5"
                  }`}
                >
                  {item.title}
                </h2>
                <ExpandableText>{item.desc}</ExpandableText>
              </RightItem>
            ))}
          </RightContent>
        </motion.div>
      </div>
    </main>
  );
}

// Keyframes for the animation
const fadeIn = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Keyframes for left content movement
const moveUp = keyframes`
  0% {
    transform: translateY(90%);
    opacity: 0;
  }
  100% {
    transform: translateY(50%);
    opacity: 1;
  }
`;

const moveDown = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(90%);
    opacity: 1;
  }
`;

// Styled Components
const LeftContent = styled.div<{ selected: string }>`
  min-width: 350px;
  font-family: "Montserrat", sans-serif;
  position: relative;
  transition: transform 0.5s ease-in-out;

  /* Apply the animation based on the selected state */
  ${(props) =>
    props.selected === "services"
      ? css`
          animation: ${moveUp} 0.7s forwards;
        `
      : css`
          animation: ${moveDown} 0.7s forwards;
        `}
`;

// const RightContent = styled.div<{ nameChanged: boolean }>`
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   text-align: right;
//   font-family: "Montserrat", sans-serif;
//   gap-col: 5px;
//   font-weight: bold;
//   opacity: ${(props) => (props.nameChanged ? 0 : 1)};
//   animation: ${(props) =>
//     props.nameChanged
//       ? css`
//           ${fadeIn} 1s forwards
//         `
//       : "none"};
// `;

// const RightItem = styled.div<{ nameChanged: boolean }>`
//   margin-bottom: 20px;
//   opacity: ${(props) => (props.nameChanged ? 0 : 1)};
//   animation: ${(props) =>
//     props.nameChanged
//       ? css`
//           ${fadeIn} 1s forwards
//         `
//       : "none"};
// `;

const RightContent = styled.div<{ nameChanged: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  animation: ${(props) =>
    props.nameChanged
      ? css`
          ${fadeIn} 0.7s forwards
        `
      : "none"};
`;

const RightItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    h2 {
      // color: #ff9800;
    }

    p {
      max-height: 500px;
      opacity: 1;
      // padding: 10px;
    }
  }
`;

const ExpandableText = styled.p`
  max-height: 0;
  opacity: 0;
  padding: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;
  overflow: hidden;
`;
