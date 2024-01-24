import React from 'react'
import Hero from '../Components/Hero'
import Programs from '../Components/Programs'
import programDatas from '../programDatas'
import { ProgramsImage } from '../Components/ProgramsImage'


const HomePage = () => {

  const programElement = programDatas.map(programData => {
    return (
      <Programs programData = {programData}/>
    )
  })

  return (
    <div>
      <Hero/> 
      <div className=' flex items-center justify-between mx-auto max-w-[1400px] font-inter my-7 px-14'>
        <div className=' px-[70px]'>
          <h1 className=' font-bold text-4xl uppercase'>Our Programs</h1>
          <div className=' w-16 h-[5px] bg-green rounded-full my-3'></div>
          <p className=' text-base my-8'>Skyfit programs are designed for universal scalability, 
             making it the perfect application for any committed individual regardless of experience.
           </p>
           <div className=' grid grid-cols-2 grid-rows-2 gap-5'>
             {programElement}
           </div>  

          </div>
      
          <div className=' mt-10'>
             <ProgramsImage/>
          </div>



      </div>

    </div>
  )
}

export default HomePage