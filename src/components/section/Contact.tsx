import React from 'react'
import FirstContact from '../Content/Contact/FirstContact.tsx'
import SecondContact from '../Content/Contact/SecondContact.tsx'
import ThirdContact from '../Content/Contact/ThirdContact.tsx'
import FourthContact from '../Content/Contact/FourthContact.tsx'
import FifthContact from '../Content/Contact/FifthContact.tsx'
const Contact:React.FC = () => {
  return (
    <div>
      <FirstContact />
      <SecondContact />
      <ThirdContact />
      <FourthContact />
      <FifthContact />
    </div>
  )
}

export default Contact
