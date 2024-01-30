import React from 'react'



const Trainer = ({trainerData}) => {

  

  const trainerBackground = {
    backgroundImage: `url(${trainerData.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "contain",
    height: "300px",
    weight: "300px",
    backgroundRepeat: "no-repeat",
  };
 

  return (
    
      <div style={trainerBackground} className='w-[280px] rounded my-5 group'>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h2 className='text-2xl font-bold text-white uppercase'>{trainerData.name}</h2>
        <p className='mt-2 text-xl text-white'>{trainerData.title}</p>
      </div>
    </div>

  )
}

export default Trainer