import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Slider = ({photos}) => {
  return (
    
      <div className="w-full">
      <Carousel>
        {photos.map((photo, index) => (
          
          <div key={index}>
            <img src={photo} alt={`image-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider