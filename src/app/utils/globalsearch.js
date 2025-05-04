"use client"
import React from 'react'
import { useState } from 'react';
export default function Globalsearch({trendingCategories}) {
      const [location, setLocation] = useState('Kalma Nagar, New Delhi');
      const [searchQuery, setSearchQuery] = useState('');
  return (
   <div className="  m-auto ">
                 <div className="input-group bg-white rounded-3">
                   {/* Location Input */}
                   <div className="input-group-prepend after_border d-flex rounded-start p-3">
                     <span className="input-group-text bg-transparent border-0">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                       </svg>
                     </span>
                     <input 
                       type="text" 
                       className="form-control bg-transparent border-0 shadow-none p-0 fw-medium"
                       value={location}
                       onChange={(e) => setLocation(e.target.value)}
                     />
                   </div>
                   
                   {/* Search Input */}
                   <input 
                     type="text" 
                     className="form-control border-0 bg-transparent shadow-none p-0 px-4"
                     placeholder="What are you looking for"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                   />
                   <button className="btn bg-danger border-0 rounded-end px-3 search_icon_btn">
                     {/* Changed bg-prime-color to bg-danger for bootstrap class */}
                    
                     <svg 
                     width="24" 
                     height="24" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg" 
                     fill="none"
                   >
                     <circle 
                       cx="11" 
                       cy="11" 
                       r="7" 
                       
                       stroke="#fff" 
                       strokeWidth="2" 
                       strokeLinecap="round" 
                     />
                     <line 
                       x1="16" 
                       y1="17" 
                       x2="19" 
                       fill="#fff"
 
                       y2="20" 
                       stroke="#fff" 
                       strokeWidth="2" 
                       strokeLinecap="round" 
                     />
                   </svg>
                   </button>
                 </div>
               </div>
  )
}
