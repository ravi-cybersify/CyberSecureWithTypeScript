import React from "react";

import Card from "../../lib/Card.tsx";

import { GoGoal } from "react-icons/go";
import { MdHistoryEdu } from "react-icons/md";

interface cardProps {
  icon: React.ReactNode;
  name: string;
  paraClassName: string;
  text: string;
  cardClassName: string;
}

const SecondAbout:React.FC = () => {
  const card: cardProps[] = [
    {
      icon: <GoGoal size={28} color="#00aeef" />,
      name: "Our Vision",
      paraClassName: "text-2xl py-2",
      text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName:
        "pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center ",
    },
    {
      icon: <GoGoal size={28} color="#00aeef" />,
      name: "Our Mission",
      paraClassName: "text-2xl py-2",
      text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName:
        "pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center ",
    },
    {
      icon: <MdHistoryEdu size={28} color="#00aeef" />,
      name: "Our History",
      paraClassName: "text-2xl py-2",
      text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
      cardClassName:
        "pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center ",
    },
  ];
  return (
    <div className="">
      <p className="mx-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a,
        tenetur laborum cum iusto nihil consequatur aliquid autem commodi
        blanditiis qui. Voluptatem doloremque dignissimos laboriosam beatae!
        Temporibus sit, voluptates, excepturi vero consequuntur minus cupiditate
        porro dicta possimus consequatur iure debitis.
      </p>

      <div className="flex justify-evenly gap-12 items-center mx-40 my-12">
        {
            card.map((card,index)=>(
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

export default SecondAbout;
