"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  key: number;
  img: StaticImageData;
  title: string;
  desc: string;
}

const CardTemplate = ({ key, title, desc, img }: Props) => {
  return (
    <div
      key={key}
      className="w-72 font-montserrat bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      // className="w-72 bg-white duration-500 hover:scale-105 hover:shadow-xl"
    >
      <a href="#">
        <Image
          src={img}
          alt={title}
          className="h-80 w-72 object-cover rounded-t-xl"
          // className="h-80 w-72 object-cover"
        />
        <div className="px-4 pt-1 pb-4 w-72">
          <span className="text-md font-bold text-black truncate block capitalize">
            {title}
          </span>
          <p className="mr-3 uppercase text-sm">{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default CardTemplate;
