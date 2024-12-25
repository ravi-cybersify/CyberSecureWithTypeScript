import React from 'react'
import Form from "../lib/Form.tsx";

const Login:React.FC = () => {


  return (
    <div className="flex justify-evenly items-center pt-28">

      <div className="rounded">
        <img
          src="./images/login.avif"
          alt="security"
          srcSet=""
          className="rounded-2xl h-[600px]"
        />
      </div>

      <div className="rounded-3xl  w-96 bg-gray-200 px-12 pt-5 pb-8 mr-20">
        <h1 className="text-2xl font-bold">Login Your Account</h1>
         <Form />
      </div>
    </div>
  );
};

export default Login;
