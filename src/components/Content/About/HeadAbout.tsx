import React from "react";

const HeadAbout:React.FC = () => {
  return (
    <div className= 'w-full text-white bg-cover bg-center pt-20' style={ { backgroundImage: 'url("./images/back-proyectos-2.jpg")' }}>
      <div className="text-center py-9 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-5xl font-semibold">From <span className="text-blue-500">Fighting Cybercrime</span></h1>
      <h1 className="text-3xl font-semibold">Building Secure Solutions</h1>
      <h1 className="text-md my-3 w-[500px]">
        From security to support. we handle it all--so you don't have to. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit.
      </h1>
    </div>
    </div>
    
  );
};

export default HeadAbout;
