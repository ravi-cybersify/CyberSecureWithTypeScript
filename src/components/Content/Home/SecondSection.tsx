import React from 'react'

interface Image{
  src: string,
  alt: string,
}

const SecondSection:React.FC = () => {
  const Image:Image[] = [
    {
      src:"./images/cropped-sellmac.webp",
      alt: "first",
    },
    {
      src:"./images/cropped-sellmac.webp",
      alt: "second",
    },
    {
      src:"./images/cropped-sellmac.webp",
      alt: "third",
    },
    {
      src:"./images/cropped-sellmac.webp",
      alt: "fourth",
    },

  ];

  return (
    <div className='flex justify-evenly items-center mb-12'>
      {
        Image.map((Img,index)=>(
          <img key={index} src={Img.src} alt={Img.alt} className='w-40 h-10' />
        ))
      }
    </div>
  )
}

export default SecondSection

