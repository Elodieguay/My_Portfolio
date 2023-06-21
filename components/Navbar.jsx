'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Burger from './Burger'
import About from './About'
import Projets from './Projets'
import Form from './Form'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickOpen = () => {setClick(!click)}
  
  const closeMenu =() => setClick(false)

  return (
   <div className>
      <nav className='navbar flex  justify-between items-center max-w-full'>
        <div className='burger'onClick={clickOpen}>
          {click ? (<GiHamburgerMenu size={30} color='#0f3b56'/>)
            :(<GrClose size={30} color='#0f3b56'/>)}
        </div>
        <ul className={click ? "nav-menu active": "nav-menu"}>
          <li className='nav-items text-blue-500' >
            <a href="about"  onClick={closeMenu}>Home</a>
          </li>

        </ul>
      </nav>
   </div>
  )
}

export default Navbar 


    // (About ( 
    //   <div className=' relative w-full h-20 z-[100]'>
    //     <Link to ='#projects'>Projets</Link> 
    //     <Link to ='#contact'> Contact</Link>
    //   </div>  
    //   )) &&
    // (Projets( 
    //   <div className=' relative w-full h-20 z-[100]'>
    //     <Link to ='#about'  >hello</Link>
    //     <Link to ='#contact'> Contact</Link>
    //   </div>
    //   )) &&
    // (Form ( 
    //     <div className=' relative w-full h-20 z-[100]'>
    //       <Link to ='#about'  >hello</Link>
    //       <Link to ='#projects'>Projets</Link> 
    //     </div>
    // ))
    // <div className=' relative w-full h-20 z-[100]'>
    //     <div className='flex justify-between items-center w-full h-full px-2'>
    //      <Burger/> 
    //     </div>
    // </div>