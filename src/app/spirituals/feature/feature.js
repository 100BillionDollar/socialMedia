import React from 'react'
import Image from 'next/image'
import SpiritualHeading from '@/app/utils/spiritualHeading'

export default function Feature() {
  return (
     <div className="container feature_sec mb-5 pt-5">
             <div className="row">
               <div className="col-12 text-center mb-4">
              <SpiritualHeading text="Feature"/>
               </div>
             </div>
   
             {/* First Row of Features */}
             <div className="row row-cols-lg-6 mb-4 mt-4">
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0 ">
                   <div className="card-body p-0 text-center">
   
                     <div className="position-relative img_sec" style={{height: "180px"}}>
                          <Image 
                         src="/assets/images/temples.png" 
                         alt="Aarti Thali" 
                       fill
                       style={{objectFit:"contain"}}
                         className="object-contain" 
                       />
                     </div>
                     <p className="card-title">Temple</p>
                   </div>
                 </div>
               </div>
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0 ">
                   <div className="card-body p-0 text-center">
                     <div className="position-relative img_sec mb-3" style={{height: "180px"}}>
                       <Image 
                         src="/assets/images/poojathali.png" 
                         alt="Aarti Thali" 
                         fill
                         style={{objectFit:"contain"}}
   
                         className="img-fluid" 
                       />
                     </div>
                     <p className="card-title">Aarti & Chalisa</p>
                   </div>
                 </div>
               </div>
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0">
                   <div className="card-body p-0 text-center">
                     <div className="img_sec mb-3 position-relative" style={{height: "180px"}}>
                       <Image 
                         src="/assets/images/dharmikgyan.png" 
                         alt="Sacred Book" 
                         fill
                         
                         style={{objectFit:"contain",bottom:"0",top:'inherit'}}
                         className="img-fluid" 
                       />
                     </div>
                     <p className="card-title">Dharmik Gyan</p>
                   </div>
                 </div>
               </div>
   
             {/* Second Row of Features */}
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0">
                   <div className="card-body p-0 text-center">
                     <div className="img_sec position-relative mb-3 py-5" style={{height: "180px"}}>
                     <Image 
                         src="/assets/images/articles.png" 
                         alt="Sacred Book" 
                         fill
                         
                         style={{objectFit:"contain",bottom:"0",top:'inherit'}}
                         className="img-fluid" 
                       />
                     </div>
                     <p className="card-title">Articles</p>
                   </div>
                 </div>
               </div>
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0">
                   <div className="card-body p-0 text-center">
                     <div className="img_sec position-relative mb-3 py-5" style={{height: "180px"}}>
                     <Image 
                         src="/assets/images/festivals.png" 
                         alt="Sacred Book" 
                         fill
                         
                         style={{objectFit:"contain",bottom:"0",top:'inherit'}}
                         className="img-fluid px-4" 
                       />
                     </div>
                     <p className="card-title">Festivals</p>
                   </div>
                 </div>
               </div>
               <div className="col mb-3 mb-md-0">
                 <div className="card shadow-none h-100 border-0">
                   <div className="card-body p-0 text-center">
                   <div className="img_sec position-relative mb-3 py-5" style={{height: "180px"}}>
                     <Image 
                         src="/assets/images/live_img.png" 
                         alt="Sacred Book" 
                         fill
                         
                         style={{objectFit:"contain",bottom:"0",top:'inherit'}}
                         className="img-fluid" 
                       />
                     </div>
                     <p className="card-title">Live Darshan</p>
                   </div>
                 </div>
               </div>
           </div>
         </div>
  )
}
