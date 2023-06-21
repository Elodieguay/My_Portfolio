'use client'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { useEffect, useState } from 'react'

const TopButton = () => {

    const [visible, setVisible] = useState(false)
  
    useEffect(() =>{
      window.addEventListener('scroll', () =>{
        if (window.scrollY > 300){
          setVisible(true);
         } else {
          setVisible(false);
         }
        });
    }, []);

    const scrollUp = () => {
      window.focus()
      window.scrollTo({
        top:0
      })
    }
  

  
  return (

    <div>
      
      {visible && (
       <button className=' fixed  text-5xl w-12 bottom-10 h-12 cursor-pointer  left-[90%]'
      onClick ={scrollUp}> <BsFillArrowUpCircleFill color='#0f3b56'/>

      </button>  
      )}
   
    </div>
  );
}
export default TopButton