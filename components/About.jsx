import React from 'react'
import Image from 'next/image'
import Moi9 from '../public/assets/Moi9.jpg'
import Stacks from './Stacks'
import {SiGooglemessages} from "react-icons/si"
import {RiDownload2Line} from "react-icons/ri"




// import CV from '../public/assets/CV.pdf'
// import Link from 'next/link'


const About = () => {
  return (
    <>
    <div id='about' className='max-w-7xl h-20 z-[100] m-auto py-10 relative justify-between '>
        <h1 className='surlignev w-72 uppercase  font-bold text-7xl tracking-normal text-[#0f3b56] m-5'>HELLO!</h1>

    </div>        

    <div className=' bg3 max-w-full  min-h-screen   px-40 flex items-center py-20 justify-center relative overflow-hidden'>
           
      <div className='  m-auto md:grid grid-cols-2 gap-7'>
        <div className=' space-x-2 px-16'>
          <h2 className='p-2'>Qui suis-je ?</h2>
          <h2 className='py-5'>Une Reconversion pour développer mon imagination</h2>
          <p className='py-5'>
          Rêver, créer en grand pour les autres et pour moi. Cela a toujours été ma devise.
          Aujourd&apos;hui, après une carrière dans le tourisme puis dans le conseil en création et développement d&apos;entreprise, j&apos;ai décidé d&apos;aller au cœur de la création: la programmation.
          Une envie qui a commencé il y a plus de 10 ans. Je me lance enfin et ouf cela me fait du bien.            
          </p>
          <p>
          Depuis janvier 2023, je suis étudiante à Ada Tech School, une école inclusive  adoptant une approche pratique et immersive de l'apprentissage (projets concrets et expérience pratique). Ce qui me permet de monter en compétence continuellement. Le cursus dure 21 mois dont 12 mois en alternance.
          </p>
          <p className='py-5'>
            Les stacks que j'apprends :
          </p>
          <Stacks/>
         <div className='CTA space-y-3 pt-5'> 
            <p className='flex'>Vous pouvez m'embaucher <a className=' cursor-none px-2' href='#contact'><SiGooglemessages size={25} color='#0B927A'/></a>
            </p>
            <p className='flex'>Ou télécharger mon cv<a href='/assets/CV_Elodie.pdf' download className=' cursor-none px-1'><RiDownload2Line size={25} color='#0B927A'/></a>pour m'embaucher
            </p>
          </div>
        </div>
        <div className=' max-md-sm h-auto m-auto shadow-lg shadow-slate-600 rounded-lg flex justify-center p-2  '>
          <Image className='rounded-lg  max-w-sm h-max' src={Moi9} alt='Moi' />
        </div>
      

      </div>
      
    </div>
    </>
  )
}

export default About