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
    
    <div className='h-full text-center font-serifDisplay'>
        <div style={bgImageStyle} className=' h-[420px] relative blur-[2px]'></div>  
        <div className=' absolute z-[999] left-0 right-0 ml-auto mr-auto w-full top-[50%] font-montserrat'>
            <h1 className='pb-3 text-5xl font-bold uppercase  max-lg:text-4xl text-green'> {imageSlide[currentState].title}</h1>
            <p className='mt-3 mb-5 text-2xl font-semibold  max-lg:text-lg text-light'> {imageSlide[currentState].body}</p>
            <button className='mb-5 text-base font-bold  bg-green text-light w-36 h-11 rounded-2xl'> JOIN US </button>

            <div className='flex items-center justify-center py-4 '>
            {
                imageSlide.map((imageSlide, currentState) =>(
                    <span className=' w-[10px] h-[10px] bg-light ml-[10px] rounded-xl cursor-pointer shadow' key={currentState} onClick={()=> goToNext(currentState)}> </span>
                ))
            }
        </div>

        </div>
      
    </div>
    
    
  )
}

export default Hero