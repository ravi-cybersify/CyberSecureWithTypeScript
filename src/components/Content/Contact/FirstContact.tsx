import React from "react";

const FirstContact:React.FC = () => {
  return (
    <div
      className="w-full text-white bg-cover bg-center pt-20"
      style={{ backgroundImage: 'url("./images/back-proyectos-2.jpg")' }}
    >
      <div className="text-center py-9 flex flex-col gap-3 justify-center items-center">
        <h2 className="text-3xl font-semibold">Get in Touch with</h2>
        <h1 className="text-5xl font-semibold text-blue-500">
          Secure365-Your Trusted It Partner
        </h1>
        <p className="text-md my-3 mx-80 w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          pariatur numquam animi repudiandae sed odio dolore veritatis porro,
          
        </p>
      </div>
    </div>
  );
};

export default FirstContact;
