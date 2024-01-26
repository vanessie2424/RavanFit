import React from 'react'
import { Button } from './Button'

export const Classes = ({classData}) => {

    const classBackground = {
        backgroundImage: `url(${classData.imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "contain",
        height: "300px",
        weight: "300px",
        backgroundRepeat: "no-repeat",
      };
 
  return (
    <div className=' w-[330px] rounded-lg bg-white shadow-lg'>
        <div style={classBackground} className=' rounded-t-lg'>
            <div className=' h-full flex items-center justify-center'>
                <Button type="small"> Details </Button>
            </div>
        </div>
        <div className=' p-5 flex flex-col gap-4 justify-center items-center'>
            <h3 className=' text-green text-xl font-semibold'>{classData.name}</h3>
            <p className=' text-base text-dark'>{classData.description}</p>
        </div>
    </div>
  )
}
