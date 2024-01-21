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
        <div style={bgImageStyle} className=' h-[420px] relative blur-[2px]'></div>  
        <div className=' absolute z-[999] left-0 right-0 ml-auto mr-auto w-full top-[50%] font-montserrat'>
            <h1 className=' max-lg:text-4xl font-bold text-5xl text-green pb-3 uppercase'> {imageSlide[currentState].title}</h1>
            <p className=' max-lg:text-lg text-2xl text-light font-semibold mt-3 mb-5'> {imageSlide[currentState].body}</p>
            <button className=' bg-green text-light w-36 h-11 rounded-2xl text-base font-bold mb-5'> JOIN WITH US </button>

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