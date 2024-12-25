import React from 'react'
import Button from './Button.tsx'
import Image from './Image.tsx'

interface CommonCompProps{
  name:string,
  text: string,
  textClassName: string,
  para: string,
  compClassName: string,
  btnName: string,
  btnClassName: string,
  imageSrc: string
}

const CommonComp:React.FC<CommonCompProps> = ({name,text,textClassName,para,compClassName,btnName,btnClassName,imageSrc}) => {
  return (
    <div className={compClassName}>
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">{name}</p>
        <p className={textClassName}>
          {text}
        </p>
        <p>
          {para}
        </p>
        <div className="flex gap-5">
        <Button
          name={btnName}
          navClassName={btnClassName}
          icons={''}
        />
        </div>
      </div>

      <div className="rounded">
        <Image
          srcName={imageSrc}
        />
      </div>
    </div>
  )
}

export default CommonComp
