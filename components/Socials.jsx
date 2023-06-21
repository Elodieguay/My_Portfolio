import React from 'react'
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {RiDownload2Line} from "react-icons/ri"

const Socials = () => {
  return (
    <div className='social flex justify-between items-center max-w-xs m-auto py-2'>
        <a  href='https://www.linkedin.com/in/elodieguayroso/' target='_blank'><FaLinkedinIn size={25} color='#597B6A'/></a>
        <a  href='https://github.com/Elodieguay' target='_blank'><FaGithub size={25} color='#597B6A'/></a>
        <a  href='/assets/CV_Elodie.pdf' target='_blank'><RiDownload2Line size={25} color='#597B6A'/></a>
        <a  href='https://www.instagram.com/une_saison_vegane/' target='_blank'><BsInstagram size={25} color='#597B6A'/></a>
    </div>
  )
}

export default Socials
