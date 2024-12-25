import React from 'react'
import FirstService from '../Content/Services/FirstService.tsx'
import SecondService from '../Content/Services/SecondService.tsx'
import ThirdService from '../Content/Services/ThirdService.tsx'
import FourthService from '../Content/Services/FourthService.tsx'

const Services:React.FC = () => {
  return (
    <div>
      <FirstService />
      <SecondService />
      <ThirdService />
      <FourthService />
    </div>
  )
}

export default Services
