import React from 'react'
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {RiDownload2Line} from "react-icons/ri"

const Foot = () => {
  return (
    <div id='foot' className=' bg-slate-600 max-w-full h-36 relative text-center justify-center m-auto'>
      <ul className='  pt-4 text-white text-xl'>
        <li>Ce portfolio a été créé avec React 18, Next.js 13 et Tailwind </li>
        <li>Merci et à très vite</li>
      </ul>
      <div className='social flex justify-between items-center max-w-xs m-auto py-2'>
        <a  href='https://www.linkedin.com/in/elodieguayroso/' target='_blank'><FaLinkedinIn size={25} color='#FFFFFF'/></a>
        <a  href='https://github.com/Elodieguay' target='_blank'><FaGithub size={25} color='#FFFFFF'/></a>
        <a  href='/assets/CV_Elodie.pdf' target='_blank'><RiDownload2Line size={25} color='#FFFFFF'/></a>
    </div>
    </div>
  )
}

export default Foot