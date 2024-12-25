import React from "react";

const FirstService:React.FC = () => {
  return (
    <div
      className="w-full text-white bg-cover bg-center pt-20"
      style={{ backgroundImage: 'url("./images/back-proyectos-2.jpg")' }}
    >
      <div className="text-center py-9 flex flex-col gap-3 items-center">
        <h1 className="text-5xl font-semibold">
          Comprehensive <span className="text-blue-500">IT Solutions </span>
        </h1>
        <h1 className="text-3xl font-semibold">Tailored for Your Business</h1>
        <h1 className="text-md my-3 w-[500px]">
          From security to support. we handle it all--so you don't have to.
          From security to support. we handle it all..
        </h1>
      </div>
    </div>
  );
};

export default FirstService;
