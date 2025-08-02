import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"

const CardCarouselParent = () => {

  const images = [
    { src: "/images/1.webp", alt: "Image 1" },
    { src: "/images/2.webp", alt: "Image 2" },
    { src: "/images/3.webp", alt: "Image 3" },
  ]

  return (
     <div>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCarouselParent
