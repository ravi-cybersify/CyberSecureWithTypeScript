import React from 'react'
import FirstSection from '../Content/Home/FirstSection.tsx'
import SecondSection from '../Content/Home/SecondSection.tsx'
import ThirdSection from '../Content/Home/ThirdSection.tsx'
import FourthSection from '../Content/Home/FourthSection.tsx'
import FifthSection from '../Content/Home/FifthSection.tsx'
import SixthSection from '../Content/Home/SixthSection.tsx'
import SeventhSection from '../Content/Home/SeventhSection.tsx'

const Home:React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  )
}

export default Home
