import React from 'react'
import Form from '../lib/Form.tsx'

const Signup:React.FC = () => {
  return (
    <div className="flex justify-evenly items-center pt-28">

      <div className="rounded-3xl w-96 bg-gray-200 px-12 pt-5 pb-8 ml-20">
        <h1 className="text-2xl font-bold">Register Your Account</h1>
         <Form />
      </div>

      <div className="rounded">
        <img
          src="./images/register.avif"
          alt="security"
          srcSet=""
          className="rounded-2xl h-[600px]"
        />
      </div>
    </div>
  )
}

export default Signup


