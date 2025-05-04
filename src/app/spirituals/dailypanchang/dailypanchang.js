import React from 'react'
import SpiritualHeading from '@/app/utils/spiritualHeading'
import Image from 'next/image'

export default function dailypanchang() {
  return (
    <div className="container  daily_panchang_info mb-5">
    <div className="col-12 text-center mb-5">
  <SpiritualHeading text="Spiritual Information"/>
  </div>
    
    <div className="card  text-white mb-4">
      
      <div className="card-body p-0 p-4">
      <h5 className='mb-4'>Daily Panchang</h5>
      <img src="/assets/images/absolute-texture.png" className='position-absolute absolute_blob_1' alt=""/>
      <img src="/assets/images/absolute-texture.png" className='position-absolute absolute_blob_2' alt=""/>
  
      <img src="/assets/images/absolute-texture.png" className='position-absolute absolute_blob_3' alt=""/>
  
  
      <div className='col-lg-6'>
        <div className= "row">
          <div className="col-md-4">
              <div className="bg-purple-light rounded p-2 d-inline-block mb-2">
                <small>18th February 2025</small><br />
                <small>(Saturday)</small>
              </div>
          </div>
          <div className="col-md-4">
            <div className="img_s mb-2">
              <div className='content mb-3'>
              <h6 className='fw-bold'>Shubh Muhurat:</h6>
              <small className="mb-1">11:28 Am to 12:31 Pm</small>
              </div>
              <div className='content'>
              <h6 className='w-bold'>Rahukaal:</h6>
              <small>09:01 Am to 10:30 Am</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='d-flex gap-5'>
                <div className='content mb-3'>
                  <img src="/assets/images/sunrise.svg" className='mb-2' height={'60'} alt='sunrise'/>
                <h6 className='fw-bold'>Sunrise</h6>
                <small>06:12 Am</small>
              </div>
              <div className='content'>
              <img src="/assets/images/sunset.svg" className='mb-2' height={'60'} alt='sunrise'/>
  
              <h6 className='fw-bold'>Sunset</h6>
                <small>05:39 Pm</small>
              </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    {/* Appointment Cards */}
    <div className="row mb-5 pb-4">
      <div className="col-md-6 mb-3 mb-md-0">
        <div className="card rounded-3 border-0 overflow-hidden">
          <div className="card-img position-relative">
            <Image 
              src="/assets/images/astrologer-banner.jpg" 
              alt="Appointment Background" 
              width={600} 
              height={200}
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card rounded-3 border-0 overflow-hidden">
          <div className="card-img position-relative">
            <Image 
              src="/assets/images/astrologer-banner.jpg" 
              alt="Appointment Background" 
              width={600} 
              height={200}
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
