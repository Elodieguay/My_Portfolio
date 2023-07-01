import React from 'react'
import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'

const Mainbis = () => {
  return (
    <div id='home'className='bg5 w-full min-h-screen text-center flex items-center '>
        <div className='  m-auto md:grid grid-cols-2 gap-7  '>
            <div className='me  m-auto  justify-center  '>
                {/* <p className=' uppercase text-white text-xl font-semibold py-3'>Je suis</p> */}
                {/* <h1 className=' uppercase font-semibold text-4xl tracking-normal text-[#0f3b56]  mt-40 pt-96'>elodie guayroso</h1> */}
            </div>
            <ul  className=' m-auto pr-4 flex-col justify-center space-x-5 p-2'>
                <li className='surlignev uppercase  font-bold text-7xl tracking-normal text-[#0f3b56] m-6'>
                    <a className=' cursor-none' href='#about'  >hello!</a></li>
                <li className='surligney uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-6'>
                    <a className=' cursor-none' href='#projects'>Projets.</a> </li>
                <li className='surligner uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-6 '>
                    <a className=' cursor-none' href='#contact'> Contact.</a></li>
                <li><Socials/></li>
                <p className='  text-[#0f3b56] text-2xl font-semibold pt-10 '>Etudiante developpeuse web fullstack </p>
                <h1 className='  font-semibold text-5xl tracking-normal pt-5 text-[#0f3b56]  '>Elodie Guayroso</h1>

            </ul>
        </div>
    </div>
    )
}

export default Mainbis