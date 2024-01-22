import React from 'react'
import Hero from '../Components/Hero'
import Programs from '../Components/Programs'
import programDatas from '../programDatas'


const HomePage = () => {

  const programElement = programDatas.map(programData => {
    return (
      <Programs programData = {programData}/>
    )
  })

  return (
    <div>
      <Hero/> 
      <div className=' my-11 mx-24 max-[360px]:mx-7 max-lg:mx-12'>
      <div className=' px-11 max-lg:px-6'>
        <h1 className=' text-3xl font-semibold uppercase tracking-wide '> Our Classes</h1>
        <div className=' h-[5px] w-14 rounded bg-green my-4'></div>
        <p className=' text-lg my-5'>Codefit programs are designed for universal scalability, making it the perfect application for any committed individual regardless of experience.</p>
      </div>
      <div className=' flex max-lg:flex-col'>
      <div className=' grid grid-cols-2 max-lg:grid-cols-1'>
      {programElement}
      </div>
      <div>
        <img src="images/program.jpg" width={700} alt="program" className=' my-5' />
      </div>

      </div>

        
      </div>
      
      
    </div>
  )
}

export default HomePage