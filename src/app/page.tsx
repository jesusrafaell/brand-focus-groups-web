"use client"; // Esto debe estar al principio del archivo

import Gallery from "@/components/common/Home/Gallery";
import Studio from "@/components/common/Home/Studio";
import { fadeOpacity } from "@/utils/fadesFrame";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Main from "@/components/common/Home/Main";

export default function Home() {
  return (
    <main>
      <Main />
      <Studio />
      <Gallery />
    </main>
  );
}
