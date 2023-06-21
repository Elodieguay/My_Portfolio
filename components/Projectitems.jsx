'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './ConstantProject'


const Projectitems = () => {
  return (
    <>
    <div  id='projects'className=' max-w-7xl h-20 z-[100] py-28 m-auto'>
    <h1 className=' surligney  w-72 uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-5'> Projets.</h1>
    </div>
    <div className='w-full bg3 flex h-screen max-w-'>
      <div className=' max-w-5xl mx-auto px-2 py-16'>
        <h2 className=' py-4 mb-5'>Mes réalisations</h2>
        <div className=' grid md:grid-cols-1  md:grid-rows-5 gap-10 text-black'>
        {projects.map((project) => (
          <div className=' relative flex items-center  cursor-auto justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#DFA438] '>
            <div className=' rounded-xl group-hover:opacity-10'><Image src= {project.image}/></div>
            <div className=' hidden group-hover:block absolute '>
             <h3 className=' text-2xl text-white tracking-wider text-center mb-2 mt-2'>{project.title}</h3>
             <p className='pb-4 pt-2 ml-5 mr-5 text-white text-center'>{project.descripttion}</p>
             <p className='pb-4 pt-2 ml-5 mr-5 text-white text-center'>{project.team}</p>
             <p className=' pb-4 pt-2 text-white text-center'>{project.tags}</p>
             <p className=' text-center py-3  m-5 rounded-lg bg-white text-black font-bold text-lg cursor-auto'><Link href= {project.git} target='_blank'>Plus d&apos;info</Link></p>
            </div>
          </div>
        ))} 
        </div>
      </div>
    </div>
    </>
  )
}

export default Projectitems