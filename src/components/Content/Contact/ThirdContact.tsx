import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoMdTime } from "react-icons/io";
import "../../../App.css";
// import moment from "moment";

const ThirdContact:React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setValue(date);
  };
    // const [date, setDate] = useState('');

    // useEffect(()=>{
    //     const str = JSON.stringify(value);
    //     const parts = str.slice(1,11);
    //     // console.log(parts)
        
    //     setDate(parts);
    // },[value])

    

    // console.log(date.split(' '),'value')
  return (
    <div className="flex justify-evenly items-center mx-28 my-28">
      <div className=" rounded flex gap-12">
       <div className="">
        <p className="text-lg font-semibold">Schedule 60 Minutes</p>
        <span className="flex gap-1 items-center"><IoMdTime /> 1h</span>
        {/* <div className="">{date}</div> */}
       </div>
        <hr />
       <div className=" shadow-lg px-4 py-3">
       <h1 className="text-lg font-semibold pl-3">Select a Date & Time</h1>
       <Calendar value={value} onClickDay={handleDateChange}/>
       </div>
      </div>
         
      <div className="w-[400px] text-left flex flex-col gap-7">
        <h1 className="text-5xl font-semibold">Schedule a Consultation</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quae
          minima quo.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          neque voluptas, distinctio commodi ea temporibus suscipit minima odit,
          veritatis quidem veniam obcaecati, harum vitae quia deserunt enim
          quae! Debitis, explicabo.
        </p>
      </div>
    </div>
  );
};

export default ThirdContact;
