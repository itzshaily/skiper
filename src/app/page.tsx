

import HeroContent from '@/components/landingPage/HeroContent'
import Nav from '@/components/navbar/Nav'
import CardCarouselParent from '@/components/homeCard/CardCarouselParent'

import React from 'react'
import TemplateCard from '@/components/homeCard/TemplateCard'
import SpecialCard from '@/components/homeCard/SpecialCard'
import AiInputCard from '@/components/homeCard/AiInputCard'
import ThemeChange from '@/components/homeCard/ThemeChange'



const page = () => {
  return (
    <div>
      <Nav />
      <HeroContent />
      <CardCarouselParent />
      <TemplateCard />
      <SpecialCard />
      <AiInputCard />
      <ThemeChange />
    </div>
  )
}

export default page

