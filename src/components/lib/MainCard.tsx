import React from "react";
import { FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

interface MainCardProps{
  image: string,
  name: string,
  text: string
}

const MainCard:React.FC<MainCardProps> = ({ image, name, text }) => {
  return (
    <div className="border w-[300px] shadow-lg bg-[#e3f0ff] my-5 px-5 py-2 hover:shadow-xl">
      <div className="bg-white px-2 pt-2 rounded-lg my-2 ">
        <img src={image} alt="" srcSet="" className="h-72" />
      </div>
      <p className="text-xl font-bold">{name}</p>
      <p className="text-xs font-semibold">{text}</p>
      <div className="flex gap-4 justify-center my-2">
        <p className="bg-white px-1 rounded py-1 cursor-pointer"><FaXTwitter /></p>
        <p className="bg-white px-1 rounded py-1 cursor-pointer"><FaFacebook /></p>
        <p className="bg-white px-1 rounded py-1 cursor-pointer"><FaInstagram /></p>
        <p className="bg-white px-1 rounded py-1 cursor-pointer"><FaGithub /></p>
      </div>
    </div>
  );
};

export default MainCard;
