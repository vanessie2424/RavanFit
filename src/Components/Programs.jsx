import React from "react"



const Programs = ({programData}) => {
  return (

      <div className="">
          <img src={programData.image} alt="programs" />
          <h2 className=" my-3 font-semibold text-xl"> {programData.title} </h2>
          <p className=" max-w-xs"> {programData.description} </p>
      </div>


    

  )
}

export default Programs

