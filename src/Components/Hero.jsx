import React, { useEffect, useState } from 'react'
import imageSlide from '../heroData'



const Hero = () => {
    const [currentState, setCurrentState] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===3){
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1) 
            }
            
        },5000)
        return()=> clearTimeout(timer)
    }, [currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "contain",
        height: "600px",
        backgroundRepeat: "no-repeat",

    }
    const goToNext = (currentState)=>{
        setCurrentState(currentState)
    }
  return (
    
    <div className=' h-full text-center'>
        <div style={bgImageStyle} className=' h-[420px] relative'></div>  
        <div className=' w-[800px] absolute z-[999] top-[70%] left-[24%] text-center max-lg:left-[-13%] overflow-x-hidden'>
            <h1 className=' max-lg:text-3xl font-bold text-5xl text-green pb-4 uppercase'> {imageSlide[currentState].title}</h1>
            <p className=' max-lg:text-lg text-2xl text-light font-semibold'> {imageSlide[currentState].body}</p>

            <div className=' flex items-center justify-center p-4'>
            {
                imageSlide.map((imageSlide, currentState) =>(
                    <span className=' w-[15px] h-[15px] bg-light ml-[10px] rounded-xl cursor-pointer shadow' key={currentState} onClick={()=> goToNext(currentState)}> </span>
                ))
            }
        </div>

        </div>
      
    </div>
    
    
  )
}

export default Hero