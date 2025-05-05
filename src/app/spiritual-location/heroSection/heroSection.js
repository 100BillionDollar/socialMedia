// File: pages/index.js or app/page.js (depending on your Next.js version)
"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CitiesSlider from './citySelection';
// This import is required only if you're using pages directory
// In app directory, you would use a separate ClientComponent

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('All');
  

  const featuredTemples = [
    { name: 'Salasar Balaji', state: 'Rajasthan', top: '20%', left: '30%' },
    { name: 'Mahakaleshwar', state: 'MP', top: '40%', left: '60%' },
    { name: 'Kolhapur Mahalakshmi', state: 'Maharashtra', top: '65%', left: '40%' },
  ];

  return (
    <>
      <Head>
        <title>Indian Temples and Pilgrimages</title>
        <meta name="description" content="Connect with holy pilgrimages and divine temples of India" />
        <link rel="icon" href="/favicon.ico" />
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        {/* Bootstrap Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
        />
      </Head>

      <div className="container-fluid spiritual_hero_sec py-4">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-4">Connect with holy pilgrimages and divine temples of India</h1>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <span className="bg-dots rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                    </span>
                  </div>
                  <div>Learn about the culture and religious history of temples</div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <span className="bg-dots rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                    </span>
                  </div>
                  <div>Connect with temples of your favourite deities</div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <span className="bg-dots rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                    </span>
                  </div>
                  <div>Offer charity work and donate in your favourite temples</div>
                </div>
              </div>
              
              <div className="d-flex gap-2">
                <button className="btn common-btn  px-4">Explore Temples of India</button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="bi bi-plus"></i> Add Temples
                </button>
              </div>
            </div>
            
            <div className="col-lg-6 position-relative">
              <div className="position-relative mt-4 mt-lg-0">
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <img 
                    src="/assets/images/location_temple_map.png" 
                    alt="India map" 
                    className="img-fluid" 
                  />
                  
                  {/* {featuredTemples.map((temple, index) => (
                    <div 
                      key={index}
                      className="position-absolute bg-white rounded-pill py-1 px-3 shadow-sm"
                      style={{ 
                        top: temple.top, 
                        left: temple.left,
                        transform: 'translate(-50%, -50%)',
                        fontSize: '12px',
                        zIndex: 10
                      }}
                    >
                      {temple.name}, {temple.state}
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
          
        <CitiesSlider/>
        </div>
      </div>

      {/* Bootstrap JS (optional) */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}