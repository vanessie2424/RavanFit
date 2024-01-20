import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  let Links = [
    { name:"Home", link: "/"},
    { name:"Classes", link: "/classes"},
    {name:"Services", link: "/services"},
    {name:"Blog", link: "/blog"},

  ]
  const [open, setOpen] = useState(false);

  const activeStyle = {
    color: "#28a745"
  }
  return (
    <header className=' shadow-md w-full top-0 left-0'>
      <div className=' md:flex items-center justify-between bg-light py-5 md:px-10 px-7'>
        <div className=' font-bold text-2xl cursor-pointer flex items-center font-palanquin
          text-black-800 '>
          <span className=' text-3xl text-green mr-1 pt-2'>
          <ion-icon name="barbell-outline"></ion-icon>
          </span>
          <Link to='/' className=' font-palanquin font-extrabold text-2xl text-dark'> Code<span className=' text-green uppercase text-2xl'>Fit.</span></Link>
        </div>
        <div onClick={()=> setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
         <ion-icon name={ open ? 'close': 'menu'}></ion-icon>
        </div>
        <ul className={ `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-light md:z-auto z-[1] 
         left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"} `}>
          {
            Links.map((link)=>(
              <li onClick={()=>setOpen(!open)} key={link.name} className=' md:ml-8 text-xl md:my-0 my-7'>
                <NavLink to={link.link}  className='text-black hover:text-green duration-500 font-palanquin text-lg font-medium' style={({isActive}) => isActive ? activeStyle : null}> {link.name}</NavLink>
              </li>
            ))
          }
        </ul>

      </div>
  </header>
  )
}

export default Header