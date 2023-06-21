import React from 'react'
import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'

const Mainbis = () => {
  return (
    <div id='home'className='bg5 w-full min-h-screen text-center flex items-center '>
        <div className=' max-w-5xl m-auto md:grid grid-cols-2 gap-7  '>
            <div className='me max-w-5xl m-auto p-5 justify-center  '>
                {/* <p className=' uppercase text-white text-xl font-semibold py-3'>Je suis</p> */}
                <h1 className=' uppercase font-semibold text-6xl tracking-normal text-[#0f3b56] py-3'>elodie guayroso</h1>
                <p className=' uppercase text-[#0f3b56] text-xl font-semibold py-3 m-2'>étudiante developpeuse web fullstack </p>
            </div>
            <ul  className='max-w-5xl m-auto p-2 flex-col justify-center space-x-5 '>
                <li className='surlignev uppercase  font-bold text-7xl tracking-normal text-[#0f3b56] m-5 mr-2'>
                    <a className=' cursor-none' href='#about'  >hello!</a></li>
                <li className='surligney uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-5 m-2'>
                    <a className=' cursor-none' href='#projects'>Projets.</a> </li>
                <li className='surligner uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-5'>
                    <a className=' cursor-none' href='#contact'> Contact.</a></li>
                <li><Socials/></li>
            </ul>
        </div>
    </div>
    )
}

export default Mainbis