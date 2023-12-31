'use client'
import { projects } from "@/components/ConstantProject"
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import Video from "@/components/Video"
import Foot from "@/components/Foot";
import {FaGithub} from "react-icons/fa"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import Slider from "@/components/Slider";
import Image from "next/image";


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
        
        <div className='  m-auto py-10 relative md:text-7xl  max-sm:text-xl'> 
          <div   className=' uppercase  font-bold tracking-normal text-[#0f3b56] m-5'>{project.title}
          </div>
        </div>
        
        <div>
            <div className=" pl-16 pr-16">
              {project.video? (<Video videoId={project.video}/>
              ):(
                <div className="flex items-center justify-center pl-16 pr-16"> 
                  <Slider photos={project.image} />
                </div>
              )}
                
            </div>
            <div className=' max-sm:text-base max-sm:max-w-md md:text-2xl max-w-5xl m-auto p-5 justify-center space-x- px-10 tracking-normal'>
              <h2 className=' py-2'>{project.subtitle}</h2>
              <p className='  py-5 font-semibold '>{project.team}</p>
              <p className=' py-5'>Stacks utilisés :{project.tags}</p>
              <p className=' py-5'>{project.description}</p>
              <Link  href={project.git} target='_blank ' className="flex text-[#0f3b56]   font-semibold">Voir le projet sur Github : <FaGithub size={30} color='#0f3b56'/></Link>
              <p className=" py-20 text-2xl font-semibold text-[#0f3b56] flex flex-row"><Link className=' cursor-none' href='#projects'><BsFillArrowLeftCircleFill size={40} color='#0f3b56' />Retour aux Projets</Link></p>
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