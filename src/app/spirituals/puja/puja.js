import SpiritualHeading from '@/app/utils/spiritualHeading';
import PujaCards from './pujaCards';
import React from 'react'

export default function puja() {
  return (
    
    <div className="container mb-5">
    <div className="col-12 text-center mb-5">
    <SpiritualHeading text="Upcoming Pujas"/>
    </div>
      <div className="row mb-5 pb-4">
        <PujaCards/>
      </div>
    </div>
  )
}
