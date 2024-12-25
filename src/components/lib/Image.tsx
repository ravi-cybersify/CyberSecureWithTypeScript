import React from 'react'

interface ImageProps{
  srcName: string
}

const Image:React.FC<ImageProps> = ({srcName}) => {
  return (
    <div className="rounded">
        <img src={srcName} alt='img' className="rounded-tr-[60px] rounded-bl-[60px] w-[550px] h-96 " />
      </div>
  )
}

export default Image
