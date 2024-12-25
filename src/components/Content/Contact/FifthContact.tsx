import React from 'react'
import Card from '../../lib/Card.tsx'
import { GoGoal } from 'react-icons/go'
import { MdHistoryEdu, MdSecurity } from 'react-icons/md'
import { SiSecurityscorecard } from 'react-icons/si'

interface CardProps{
  icon: React.ReactNode,
  name:string,
  paraClassName: string,
  text : string,
  cardClassName: string
}

const FifthContact:React.FC = () => {
    const cards: CardProps[] = [
        {
          icon: <MdHistoryEdu size={28} color="#00aeef" />,
          name: "Real World Experience",
          paraClassName: "text-2xl py-2",
          text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName:
            "px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center",
        },
        {
          icon: <MdSecurity size={28} color="#00aeef" />,
          name: "Comperhensive Solution",
          paraClassName: "text-2xl py-2",
          text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName:
            "px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center",
        },
        {
          icon: <SiSecurityscorecard size={28} color="#00aeef" />,
          name: "Victim-Centric Approach",
          paraClassName: "text-2xl py-2",
          text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName:
            "px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center",
        },
        {
          icon: <MdSecurity size={28} color="#00aeef" />,
          name: "Expert Team",
          paraClassName: "text-2xl py-2",
          text: "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName:
            "px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center",
        },
      ];
  return (
    <div className="flex flex-col gap-8 my-20">
        <h1 className='text-center text-4xl font-semibold'>Why Contact Secure365?</h1>
        <div className="flex justify-evenly gap-12 items-center mx-40 mt-3 mb-12">
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
  )
}

export default FifthContact
