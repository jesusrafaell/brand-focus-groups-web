"use client";

import imgC from "@/images/c.svg";
import star from "@/images/star_icon.svg";

const Studio = () => {
  return (
    <div className="bg-dark-bg">
      <div className="min-h-screen text-white grid w-full justify-center items-center">
        <div className="flex flex-col w-[80vw] md:w-[50vw]">
          <h1 className="text-[40px] md:text-[85px] text-nowrap font-montserrat font-bold">
            Brand Focus
          </h1>
          <h2 className="self-center text-[20px] md:text-[70px] text-nowrap font-montserrat text-bold flex">
            <img
              src={imgC.src}
              alt="C"
              width={50}
              className="w-[20px] md:w-[50px]"
            />
            <span className="pl-2">Creative Studio</span>
          </h2>
          <p className="self-end pt-5 md:pt-10 text-gray-200 text-[9px] md:text-[16px] w-[200px] md:w-[350px]">
            We design unique and powerful visual identities that connect with
            your audience, transforming your vision into a memorable brand.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start">
            <div className="w-[50px] md:w-[150px] p-[3px] md:p-[7px] bg-dark-bg">
              <img src={star.src} alt="star" className="w-full" />
            </div>
            <div className="w-[50px] md:w-[150px] -ml-[14px] lg:-ml-[50px] p-[3px] md:p-[7px] bg-dark-bg">
              <img src={star.src} alt="star" className="w-full" />
            </div>
          </div>
        </div>
        <div className="uppercase flex flex-col justify-center items-center">
          <span className="text-[12px] md:text-[20px]">
            AVAILABLE WORLDWIDe
          </span>
          <span className="text-[25px] md:text-[32px] font-montserrat font-bold">
            CREATIVE STUDIO
          </span>
          <span className="text-[25px] md:text-[32px] -mt-2 font-montserrat font-bold">
            &STRATEGIC DESIGN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Studio;
