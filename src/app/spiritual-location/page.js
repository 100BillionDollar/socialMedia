"use client"

import React from 'react'
import TempleExplorer from './heroSection/heroSection'
import TempleCard from './temple-card/templecard'
import TestimonialSlider from './happydevoteeCorner'
export default function Home() {
  return (
    <>    <TempleExplorer/>
    <div className='container mt-4'>
      <div className='row row-cols-lg-3 g-4'>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    <TempleCard/>
    </div>
    </div>
    <TestimonialSlider/>
    </>

  )
}
