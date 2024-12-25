import React from "react";
import CommonComp from "../../lib/CommonComp.tsx";

interface commonCompProps {
  name: string;
  text: string;
  para: string;
  compClassName: string;
  textClassName: string;
  btnName: string;
  btnClassName: string;
  imageSrc: string;
}

const SeventhSection: React.FC = () => {
  const commonCompProps: commonCompProps = {
    name: "What Makes Us Different?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam omnis doloribus expedita, sit quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatibus expedita esse rerum aperiam aspernatur ratione? Quidem eveniet rem magnam.",
    textClassName: "",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet debitis alias soluta perferendis error, quo quisquam aliquam earum quia.",
    compClassName: "flex justify-evenly items-center mx-12 my-28",
    btnName: "Get Started",
    btnClassName:
      "bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide",

    imageSrc: "./images/compMan.webp",
  };

  return (
    <CommonComp {...commonCompProps}/>
  );
};

export default SeventhSection;
