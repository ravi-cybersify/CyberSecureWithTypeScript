import React from "react";
import Image from "../../lib/Image.tsx";

const SecondService:React.FC = () => {
  return (
    <div className="flex justify-evenly items-center mx-12 my-28">
      <div className="rounded">
        <Image
          srcName="./images/secure365.webp"
        />
      </div>
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">
          Why Choose <span className="font-bold">Secure365?</span>
        </p>
        <p>
          Cybersecurity is a major endeavor in the IT industry. There are a
          number of professional certifications given for cybersecurity training
          and expertise.[1] Although billions of dollars are spent annually on
          cybersecurity, no computer or network is immune from attacks or can be
          considered completely secure.
        </p>
      </div>
    </div>
  );
};

export default SecondService;
