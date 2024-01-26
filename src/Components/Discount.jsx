import React from 'react'
import { Button } from './Button'

export const Discount = () => {

    const discountBackground ={
        backgroundImage: "url('images/discount.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "380px",
        objectFit: "contain"

    }
  return (
    <div style={discountBackground} className='flex justify-center items-center flex-col font-inter'>
        <h1 className=' text-4xl font-bold text-light'>BRING ALL YOUR FRIENDS & FAMILY.</h1>
        <p className=' text-xl text-light font-medium my-6'> GET AWESOME % DISCOUNTS! </p>
        <Button type="small"> JOIN US</Button>
    </div>
  )
}
