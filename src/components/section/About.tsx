import React from 'react'
import HeadAbout from '../Content/About/HeadAbout.tsx'
import FirstAbout from '../Content/About/FirstAbout.tsx'
import SecondAbout from '../Content/About/SecondAbout.tsx'
import ThirdAbout from '../Content/About/ThirdAbout.tsx'
import FourthAbout from '../Content/About/FourthAbout.tsx'
import FifthAbout from '../Content/About/FifthAbout.tsx'
import SixthAbout from '../Content/About/SixthAbout.tsx'

const About:React.FC = () => {
  return (
    <div>
      <HeadAbout />
      <FirstAbout />
      <SecondAbout />
      <FourthAbout />
      <FifthAbout />
      <SixthAbout />
      <ThirdAbout />
    </div>
  )
}

export default About
