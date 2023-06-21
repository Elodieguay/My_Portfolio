'use client'
import { projects } from "@/components/ConstantProject"
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import Video from "@/components/Video"
import Foot from "@/components/Foot";
import {FaGithub} from "react-icons/fa"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"


export default function Page(){

//  Prendre dans l'URL l'ID 

  const router = useSearchParams()
  const search = router.get('id')

 console.log(search);

// Vérifier que l'id est un entier
  const projectId = parseInt(search)

console.log(projectId);

  return (
    // La condition =>if (idURL) alors tu peux push les informations contenues dans la même collection IdURL
    <>
    <div className='w-full min-h-screen'>
      {projects.map((project)=> (
        project.id== projectId && (
        <div key={project.id}>
        <div className='max-w-7xl h-20 z-[100] m-auto py-10 relative'>
          <div   className=' uppercase  font-bold text-7xl tracking-normal text-[#0f3b56] m-5'>{project.title}
          </div>
        </div>
        <div className='  max-w-full  min-h-screen  px-36 flex items-center py-20 justify-center relative overflow-hidden'>

          <div className=' m-auto md:grid grid-cols-2 gap-7  '>
            <div className='me max-w-5xl m-auto p-5 justify-center space-x- px-10 tracking-normal'>
              <h2 className=' py-2'>{project.subtitle}</h2>
              <p className='  py-5 font-semibold '>{project.team}</p>
              <p className=' py-5'>Stack utilisé :{project.tags}</p>
              <p className=' py-5'>{project.description}</p>
              <a  href={project.git} target='_blank'><FaGithub size={30} color='#0f3b56'/></a>
              <p className=" py-20 text-xl font-semibold text-[#0f3b56]"><Link className=' cursor-none' href='#projects'><BsFillArrowLeftCircleFill size={50} color='#0f3b56' />Retour aux Projets</Link></p>
            </div>
            <div className='max-w-5xl m-auto px-5 flex-col justify-center'>
              <Video videoId={project.video}/>
            </div>
          </div>
        </div>
        </div> 
        
        )

      ))}
      
   </div>
   <Foot/>
   </>
  
  )
}