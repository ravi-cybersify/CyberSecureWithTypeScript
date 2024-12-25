import React from "react";
import Card from "../../lib/Card.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";

const FourthContact:React.FC = () => {
  return (
    <div className="flex my-28 mx-12 ">
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1343278256404!2d76.68929317537231!3d30.71462387459306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8331f6012f%3A0xf22e6035496e1874!2sCybersify%20Cloud%20Computing%20pvt.%20ltd!5e0!3m2!1sen!2sin!4v1734427179896!5m2!1sen!2sin"
          width="710"
          height="450"
          title="map"
        //   style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

     <div className="px-20 bg-[#e2f5fc] py-20 w-1/2 ">
     <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">Our Location</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          accusamus deserunt consequuntur nam quis laborum quaerat, voluptates
          eum quae commodi quidem voluptate architecto impedit explicabo velit
          repellat officia magnam deleniti.
        </p>
      </div>

      <div  className="border border-[#00aeef] mt-8"> </div>

      <div className="">
      <Card
          icon={<FaMapMarkerAlt size={20} color="#00aeef" />}
          name="Headquarters"
          paraClassName='text-3xl font-bold py-1'
          text="Cybersify Cloud Computing pvt. ltd"
          
          cardClassName='py-4 flex gap-4 items-center text-left '
        />
      </div>
     </div>
    </div>
  );
};

export default FourthContact;
