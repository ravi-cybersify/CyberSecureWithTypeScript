import React from "react";
import Card from "../../lib/Card.tsx";
import { CiLock } from "react-icons/ci";
import { SiSecurityscorecard } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

interface CardProps{
  icon: React.ReactNode,
  name:string,
  paraClassName: string,
  text : string,
  cardClassName: string
}

const ThirdSection:React.FC = () => {
  const cards: CardProps[] = [
    {
      icon : <CiLock size={28} color="#00aeef" />,
      name : "CyberScurity Solution",
      paraClassName : 'text-2xl py-2',
      text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
    },
    {
      icon : <MdSecurity size={28} color="#00aeef" />,
      name : "CyberScurity Solution",
      paraClassName : 'text-2xl py-2',
      text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
    },
    {
      icon : <SiSecurityscorecard size={28} color="#00aeef" />,
      name : "CyberScurity Solution",
      paraClassName : 'text-2xl py-2',
      text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
    },
    {
      icon : <MdSecurity size={28} color="#00aeef"/>,
      name : "CyberScurity Solution",
      paraClassName : 'text-2xl py-2',
      text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
    },
  ];

  return (
    <div className="w-full  my-28 flex flex-col gap-12">
      <div className="w-[920px] mx-80 flex flex-col gap-5">
      <h1 className="text-5xl font-semibold text-center ">Key Services</h1>
      <p className="text-lg text-[#4f4f4f] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique
        veritatis molestias consectetur ab? Velit cum rerum earum ipsa! Iste
        corporis fuga assumenda ea inventore quos ad optio eius eveniet
        provident atque tempore aliquid, quia modi laboriosam maxime a mollitia?
      </p>
      </div>
      <div className="flex gap-5 px-40 text-center">
        {
          cards.map((card,index)=>(
            <Card
              key={index}
              icon={card.icon}
              name={card.name}
              paraClassName={card.paraClassName}
              text={card.text}
              cardClassName={card.cardClassName}
              />
          ))
        }
      </div>
    </div>
  );
};

export default ThirdSection;
