import React from 'react'
import Hero from '../Components/Hero'
import Programs from '../Components/Programs'
import programDatas from '../programDatas'
import { ProgramsImage } from '../Components/ProgramsImage'
import { Discount } from '../Components/Discount'
import classDatas from '../classDatas'
import { Classes } from '../Components/Classes'


const HomePage = () => {

  const programElement = programDatas.map(programData => {
    return (
      <Programs programData = {programData}/>
    )
  })

  const classElement = classDatas.map(classData => {
    return(
      <Classes classData = {classData}/>
    )
  })

  return (
    <div>
      <Hero/> 
      <div className=' flex items-center justify-between mx-auto max-w-[1400px] font-inter py-[90px] px-14 '>
        <div className=' px-[70px]'>
          <h1 className='text-4xl font-bold uppercase '>Our Programs</h1>
          <div className=' w-16 h-[5px] bg-green rounded-full my-3'></div>
          <p className='mb-10 mt-6 text-lg font-medium max-w-[550px]'>Skyfit programs are designed for universal scalability, 
             making it the perfect application for any committed individual regardless of experience.
           </p>
           <div className='grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-8 '>
             {programElement}
           </div>  

          </div>
      
          <div className='mt-10 '>
             <ProgramsImage/>
          </div>



      </div>
      <div className=' py-[90px]'>
      <Discount/>
      </div>
      <div className=' max-w-[1400px] flex items-center justify-center flex-col mb-[90px]'>
        <h2> OUR FEATURED CLASSES </h2>
        <div className=' w-20 h-1 bg-green my-4'></div>
        <p className=' max-w-3xl text-center'>We offer a variety of classes to fit your specific needs. 
          Our program is designed to bring you additional benefits of a well-rounded fitness program. 
          In each of our classes, our focus is building consistency over time, and then increasing intensity 
          relative to the individual. 
          This keeps our fitness program focused, effective, and fun!</p>
          <div className=' grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-10 '>
           {classElement}
          </div>
        
      </div>
      

    </div>
  )
}

export default HomePage