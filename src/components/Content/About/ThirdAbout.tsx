import React from "react";
import MainCard from "../../lib/MainCard.tsx";

interface MainCardProps{
    image: string,
    name: string,
    text: string
  }

const ThirdAbout:React.FC = () => {
    const mainCard:MainCardProps[] = [
        {
          image:'./images/Priya-Yadav.png',
          name: 'Priya Yadav',
          text: 'PROJECT MANAGER'
        },
        {
          image:'./images/team_member_image_1.webp',
          name: 'Aticus Sterllin',
          text: 'SYSTEM ENGINEER'
        },
        {
          image:'./images/team_member_image_4.webp',
          name: 'Orien Jasper',
          text: 'IT CONSULTANT'
        },
        {
          image:'./images/team_member_image_5.webp',
          name: 'Daxton Atlas',
          text: 'SYSTEM ENGINEER'
        },
        
      ];

  return (
    <div className="flex justify-evenly items-center mx-12 my-20">
      <div className="text-center flex flex-col gap-4">
        <p className="text-4xl font-semibold">
          About Team Members Of Cyber Security
        </p>
        <p>
          The single most expensive loss due to a cybersecurity exploit was the
          ILOVEYOU or Love Bug email worm of 2000.
        </p>
        <div className="flex gap-5">
        {
          mainCard.map((mainCard,index)=>(
            <MainCard
              key={index}
              image={mainCard.image}
              name={mainCard.name}
              text={mainCard.text}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default ThirdAbout;
