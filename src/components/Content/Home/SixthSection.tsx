import React from 'react'
import MainCard from '../../lib/MainCard.tsx'

interface MainCardProps{
  image: string,
  name: string,
  text: string
}

const SixthSection:React.FC = () => {
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
    
  ]
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-semibold text-center'>Top Skilled experts</h1>
      <div className="flex gap-4 justify-center">
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
  )
}

export default SixthSection
