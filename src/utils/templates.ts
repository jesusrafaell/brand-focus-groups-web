import img1 from "@/images/templates/imagen_1.png";
import img2 from "@/images/templates/imagen_2.png";
import img3 from "@/images/templates/imagen_3.png";

import { StaticImageData } from "next/image";

interface ITemplates {
  img: StaticImageData;
  title: string;
  desc: string;
}

export const templates: ITemplates[] = [
  {
    img: img1,
    title: "Brief",
    desc: "Free",
  },
  {
    img: img2,
    title: "Creative concept & naming",
    desc: "$10.00USD",
  },
  {
    img: img3,
    title: "Content calendar",
    desc: "$12,00USD",
  },
  {
    img: img2,
    title: "Brief",
    desc: "Free",
  },
  {
    img: img1,
    title: "Creative concept & naming",
    desc: "$10.00USD",
  },
];
