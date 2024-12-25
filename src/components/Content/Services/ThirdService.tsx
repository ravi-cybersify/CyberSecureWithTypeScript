import React from 'react'
import Card from '../../lib/Card.tsx'
import { CiLock } from 'react-icons/ci'
import { MdSecurity } from 'react-icons/md'
import { SiSecurityscorecard } from 'react-icons/si'

interface CardProps{
  icon: React.ReactNode,
  name:string,
  text : string,
  paraClassName: string,
  cardClassName: string
}

const ThirdService:React.FC = () => {
    const cards: CardProps[] = [
        {
          icon : <CiLock size={28} color="#00aeef" />,
          name : "Secure Payment & Froud Detections",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef" />,
          name : "IT Detective Services & Scam Recovery",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <SiSecurityscorecard size={28} color="#00aeef" />,
          name : "E-commerce Solution & Transaction Protect",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Bussiness SEO & Digital Visibility",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
        {
          icon : <MdSecurity size={28} color="#00aeef"/>,
          name : "Inventory Management System",
          paraClassName : 'text-2xl py-2',
          text : "With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business.",
          cardClassName : 'px-5 py-5 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center',
        },
      ];

  return (
    <div className='grid grid-cols-4 gap-5 bg-gray-100 w-full px-40 py-16 mx-auto '>
        <div className="flex items-center justify-between col-span-2 gap-5">
            <div className="">
            <p className='text-5xl'>Our Core</p>
            <p className='text-7xl font-bold'>Services</p>
            </div>
            <div className="">
                <img src="./images/ai.avif" alt="Service" className='h-64 w-60'/>
            </div>
        </div>
       
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
  )
}

export default ThirdService
