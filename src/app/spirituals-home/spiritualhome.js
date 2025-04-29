// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selectedReligion, setSelectedReligion] = useState(null);
  
  const religions = [
    {
      id: 'hinduism',
      name: 'HINDUISM',
      color: '#e65100',
      image: '/hinduism.jpg'
    },
    {
      id: 'sikhism',
      name: 'SIKHISM',
      color: '#146073',
      image: '/sikhism.jpg'
    },
    {
      id: 'islam',
      name: 'ISLAM',
      color: '#004d40',
      image: '/islam.jpg'
    },
    {
      id: 'buddhism',
      name: 'BUDDHISM',
      color: '#8e24aa',
      image: '/buddhism.jpg'
    },
    {
      id: 'christianity',
      name: 'CHRISTIANITY',
      color: '#b71c1c',
      image: '/christianity.jpg'
    },
    {
      id: 'jainism',
      name: 'JAINISM',
      color: '#5d4037',
      image: '/jainism.jpg'
    }
  ];

  const handleReligionSelect = (religionId) => {
    setSelectedReligion(religionId);
    // Instead of using router directly, use window.location
    // This avoids the router mounting issue
    // window.location.href = `/religion/${religionId}`;
    console.log(`Selected religion: ${religionId}`);
  };

  return (
    <>
      <Head>
        <title>Choose Your Religion</title>
        <meta name="description" content="Select your religion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <main className="religion-selection-page">
        <div className="container pt-5">
          <h1 className="text-center mb-5 fw-bold">CHOOSE YOUR PRACTISE RELIGION</h1>
          
          <div className="row justify-content-center">
            {religions.slice(0, 3).map((religion) => (
              <div key={religion.id} className="col-md-4 col-sm-6 mb-4">
                <div 
                  className="religion-card"
                  style={{ backgroundColor: religion.color }}
                  onClick={() => handleReligionSelect(religion.id)}
                >
                  <div className="position-relative w-100 h-100">
                    <Image
                      src={religion.image}
                      alt={religion.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <div className="religion-name">
                      {religion.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row justify-content-center">
            {religions.slice(3).map((religion) => (
              <div key={religion.id} className="col-md-4 col-sm-6 mb-4">
                <div 
                  className="religion-card"
                  style={{ backgroundColor: religion.color }}
                  onClick={() => handleReligionSelect(religion.id)}
                >
                  <div className="position-relative w-100 h-100">
                    <Image
                      src={religion.image}
                      alt={religion.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <div className="religion-name">
                      {religion.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(180deg, #ffc107 0%, #8B4513 100%);
          min-height: 100vh;
        }
        
        .religion-selection-page {
          padding: 20px 0 50px;
        }
        
        h1 {
          color: #000;
          font-size: 24px;
        }
        
        .religion-card {
          width: 170px;
          height: 170px;
          border-radius: 20px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          margin: 0 auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }
        
        .religion-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .religion-name {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 8px 0;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}