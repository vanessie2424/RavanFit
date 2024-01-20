import React from 'react'


const Programs = ({programData}) => {
  return (
    <div className=' px-12 max-lg:px-6'>
      <div className=''>
        <img src={programData.image} alt="" className='my-3'/>
        <h1 className=' font-medium my-3 text-lg'> {programData.title}</h1>
        <p className=' m-auto my-4'>{programData.description}</p>
      </div>
    
    </div>
  )
}

export default Programs

