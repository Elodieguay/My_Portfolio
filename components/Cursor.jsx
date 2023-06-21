"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove)

    return () =>{
        window.addEventListener("mousemove", mouseMove)
    }
  }, []);
    
    const variants ={
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }
  
    return (
    <div>
        <motion.div
            className='cursor'
            variants= {variants}
            animate= "default"
        />
    </div>
  )
}

export default Cursor