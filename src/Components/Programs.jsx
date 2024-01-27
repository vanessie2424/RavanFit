import React from "react"



const Programs = ({programData}) => {
  return (

      <div className="">
          <img src={programData.image} width={70} alt="programs" />
          <h2 className="my-3 text-xl font-semibold "> {programData.title} </h2>
          <p className="max-w-xs "> {programData.description} </p>
      </div>


    

  )
}

export default Programs

