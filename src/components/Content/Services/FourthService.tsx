import React from 'react'
import Button from '../../lib/Button.tsx'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from '../../lib/Image.tsx';

const FourthService:React.FC = () => {
  return (
    <div className="flex justify-evenly items-center mx-20 my-28">
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">
          Our Approach
        </p>
        <div className='flex gap-2'>
            <div className="mt-1"><RiVerifiedBadgeFill  size={20}/></div>
          <div className="">
          <p className='text-xl font-semibold'>Protected & Preventative</p>
          <p>we don't just react to issues: Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex gap-2'>
            <div className="mt-1"><RiVerifiedBadgeFill  size={20}/></div>
          <div className="">
          <p className='text-xl font-semibold'>End-to-End Solutions</p>
          <p>we don't just react to issues: Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex gap-2'>
            <div className="mt-1"><RiVerifiedBadgeFill  size={20}/></div>
          <div className="">
          <p className='text-xl font-semibold'>Client & Centric</p>
          <p>we don't just react to issues: Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <p>
          
        </p>
        <div className="flex gap-5">
          <Button
            name="Contact Us"
            navClassName="bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
            icons={''}
          />
        </div>
      </div>

      <div className="rounded">
        <Image
          srcName="./images/protect.avif"
        />
      </div>
    </div>
  )
}

export default FourthService
