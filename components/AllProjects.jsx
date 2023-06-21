'use client'
import React from 'react'
import Link from 'next/link'
import { projects } from './ConstantProject'



const AllProjects = () => {
  return (
    <>
    <div  id='projects'className=' max-w-7xl h-20 z-[100] py-10 m-auto relative'>
    <h1 className=' surligney w-96 uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-5'> Projets.</h1>
    </div>
    <div className=' max-w-full  bg3 flex relative min-h-screen items-center justify-center mx-auto space-x-0'>
      
      <div className=' max-w-7xl px-12 py-32 '>
        <div className=' grid md:grid-cols-3 gap-10 text-black'>
        {projects.map((project) => (
          <div key={project.id} className=' relative flex items-center  cursor-auto justify-center h-60 w-60  rounded-full   shadow-xl shadow-gray-400 p-4 group bg-[#DFA438] '>
            <Link 
              href={{pathname:'/projectDetails', query: {id:project.id}}}><h3 className=' text-2xl text-white tracking-wider text-center mb-2 mt-2'>{project.title}</h3>
            </Link> 
          </div>
        ))} 
        </div>
      </div>
    </div>
    </>
  )
}

export default AllProjects
