"use client"
import React from 'react'
import { useState } from 'react'


const Burger = () => {

    const [open, setOpen] = useState(false);

    const clickOpen = () =>{
      setOpen(!open)
    }
  
    return (
       
 <nav className="container flex justify-between px-4 py-8 mx-auto cursor-none">
  <div>
    <h3 className="text-2xl font-medium text-green-800"></h3>
  </div>
  <div className="hidden space-x-8 lg:flex text-[#0f3b56] text-2xl cursor-none">
    <a className=' cursor-none' href="#about">Hello</a>
    <a className=' cursor-none' href="#projects">Projets</a>
    <a className=' cursor-none' href="#contact">Contact</a>
  </div>
  <div className="flex lg:hidden" >
    <div className="space-y-2" >
      <span className="block w-8 h-1 rounded-xl bg-[#fea29b] animate-pulse"onClick={clickOpen}></span>
      <span className="block w-8 h-1 rounded-xl bg-[#fea29b] animate-pulse"onClick={clickOpen}></span>
      <span className="block w-8 h-1 rounded-xl bg-[#fea29b] animate-pulse"onClick={clickOpen}></span>
    </div>
  </div>
</nav> 

       
    )
}

export default Burger