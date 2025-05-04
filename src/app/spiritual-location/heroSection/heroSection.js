// File: pages/index.js or app/page.js (depending on your Next.js version)
"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// This import is required only if you're using pages directory
// In app directory, you would use a separate ClientComponent

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('All');
  
  const cities = [
    { name: 'All', icon: '/images/all.png' },
    { name: 'Ayodhya', icon: '/images/ayodhya.png' },
    { name: 'Bhopal', icon: '/images/bhopal.png' },
    { name: 'Varanasi', icon: '/images/varanasi.png' },
    { name: 'Prayagraj', icon: '/images/prayagraj.png' },
    { name: 'Mathura', icon: '/images/mathura.png' },
    { name: 'Vrindavan', icon: '/images/vrindavan.png' },
    { name: 'Gorakhpur', icon: '/images/gorakhpur.png' },
    { name: 'Ujjain', icon: '/images/ujjain.png' },
    { name: 'Indore', icon: '/images/indore.png' },
    { name: 'Haridwar', icon: '/images/haridwar.png' },
    { name: 'Rishikesh', icon: '/images/rishikesh.png' },
    { name: 'Dehradun', icon: '/images/dehradun.png' },
    { name: 'Manaskhanda', icon: '/images/manaskhanda.png' },
    { name: 'Sidhpeeth', icon: '/images/sidhpeeth.png' },
  ];

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
                    <span className="bg-warning rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                      <i className="bi bi-circle-fill text-warning" style={{ fontSize: '8px' }}></i>
                    </span>
                  </div>
                  <div>Learn about the culture and religious history of temples</div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <span className="bg-warning rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                      <i className="bi bi-circle-fill text-warning" style={{ fontSize: '8px' }}></i>
                    </span>
                  </div>
                  <div>Connect with temples of your favourite deities</div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <span className="bg-warning rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
                      <i className="bi bi-circle-fill text-warning" style={{ fontSize: '8px' }}></i>
                    </span>
                  </div>
                  <div>Offer charity work and donate in your favourite temples</div>
                </div>
              </div>
              
              <div className="d-flex gap-2">
                <button className="btn btn-warning px-4">Explore Temples of India</button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="bi bi-plus"></i> Add Temples
                </button>
              </div>
            </div>
            
            <div className="col-lg-6 position-relative">
              <div className="position-relative mt-4 mt-lg-0">
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="India map" 
                    className="img-fluid" 
                    style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))', backgroundColor: '#FFC107' }}
                  />
                  
                  {featuredTemples.map((temple, index) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
            <div className="d-flex flex-nowrap overflow-auto pb-3 gap-3">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className={`d-flex flex-column align-items-center cursor-pointer ${selectedCity === city.name ? 'position-relative' : ''}`}
                  onClick={() => setSelectedCity(city.name)}
                  style={{ minWidth: '80px' }}
                >
                  <div className={`rounded-3 overflow-hidden mb-2 ${selectedCity === city.name ? 'border border-warning border-2' : ''}`}>
                    <img 
                      src="/api/placeholder/64/64" 
                      alt={city.name}
                      width={64}
                      height={64}
                      className="img-fluid"
                    />
                  </div>
                  <span className="small text-center">{city.name}</span>
                  {selectedCity === city.name && (
                    <div className="position-absolute bottom-0 start-50 translate-middle">
                      <div className="bg-warning" style={{ height: '3px', width: '40px', marginTop: '2px' }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS (optional) */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}