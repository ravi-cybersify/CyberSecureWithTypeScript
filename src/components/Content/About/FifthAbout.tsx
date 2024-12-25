import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "../../lib/Image.tsx";

interface image {
  srcName: string;
}

const FifthAbout:React.FC = () => {
  const image: image = {
    srcName: "./images/aboutImage.webp",
  };
  return (
    <div className="flex justify-evenly items-center mx-12 my-28">
      <div className="rounded">
        <Image {...image} />
      </div>

      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">Our Core Values</p>
        <div className="flex gap-2">
          <div className="mt-1">
            <RiVerifiedBadgeFill size={20} />
          </div>
          <div className="">
            <p className="text-xl font-semibold">Customer-First Approach</p>
            <p>
              we don't just react Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Facere! to issues: Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mt-1">
            <RiVerifiedBadgeFill size={20} />
          </div>
          <div className="">
            <p className="text-xl font-semibold">Integrety & Transperancy</p>
            <p>
              we don't just react to issues: Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mt-1">
            <RiVerifiedBadgeFill size={20} />
          </div>
          <div className="">
            <p className="text-xl font-semibold">
              Security as a Responsibility
            </p>
            <p>
              we don't just react to issues: Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veniam? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mt-1">
            <RiVerifiedBadgeFill size={20} />
          </div>
          <div className="">
            <p className="text-xl font-semibold">Inovation & Growth</p>
            <p>
              we don't just react to issues: Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Sed, expedita! Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthAbout;
