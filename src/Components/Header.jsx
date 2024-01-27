import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './Button'
const Header = () => {
  let Links = [
    { name:"Home", link: "/"},
    { name:"Classes", link: "/classes"},
    {name:"Services", link: "/services"},
    {name: <Button type= "small">Sign Up</Button>, link: "/signup"},

  ]
  const [open, setOpen] = useState(false);

  const activeStyle = {
    color: "#28a745"
  }
  return (
    <header className='top-0 left-0 w-full shadow-md '>
      <div className='items-center justify-between py-5 md:flex bg-light md:px-10 px-7'>
        <div className='flex items-center text-2xl font-bold cursor-pointer font-palanquin text-black-800'>
          <span className='pt-2 mr-1 text-3xl text-green'>
          <ion-icon name="barbell-outline"></ion-icon>
          </span>
          <Link to='/' className='text-2xl font-extrabold font-palanquin text-dark'> Code<span className='text-2xl uppercase text-green'>Fit.</span></Link>
        </div>
        <div onClick={()=> setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
         <ion-icon name={ open ? 'close': 'menu'}></ion-icon>
        </div>
        <ul className={ `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-light md:z-auto z-[1000] 
         left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"} `}>
          {
            Links.map((link)=>(
              <li onClick={()=>setOpen(!open)} key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
                <NavLink to={link.link}  className='text-lg font-medium text-black duration-500 hover:text-green font-palanquin' style={({isActive}) => isActive ? activeStyle : null}> {link.name}</NavLink>
              </li>
            ))
          }
        </ul>

      </div>
  </header>
  )
}

export default Header