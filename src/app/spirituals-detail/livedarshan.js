// LiveDarshanCards.jsx
import React from 'react';
import Image from 'next/image';

const LiveDarshanCards = () => {
  // Mock data for the cards
  const darshanItems = [
    {
      id: 1,
      title: 'Morning Aarti',
      temple: 'Sai Baba Temple',
      image: '/assets/images/darshan_1.jpg',
    },
    {
      id: 2,
      title: 'Morning Aarti',
      temple: 'Sai Baba Temple',
      image: '/assets/images/darshan_1.jpg',
    },
    {
      id: 3,
      title: 'Morning Aarti',
      temple: 'Sai Baba Temple',
      image: '/assets/images/darshan_1.jpg',
    },
    {
      id: 4,
      title: 'Morning Aarti',
      temple: 'Sai Baba Temple',
      image: '/assets/images/darshan_1.jpg',
    },
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {darshanItems.map((item) => (
          <div key={item.id} className="col-12 mb-3">
            <div className="card border-0 shadow-sm  p-3">
              <div className="d-flex ">
                <div className="position-relative" style={{ width: '180px' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="rounded object-fit-cover"
                  />
                 
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                  <div className=" start-0 m-3 mt-0 ">
                    <span className="bg-danger text-white px-2 py-1 d-block rounded-1 mb-2" style={{ fontSize: '12px',lineHeight:'' }}>
                      🔴 LIVE DARSHAN
                    </span>
                
                    
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="text-muted mb-0" style={{ fontSize: '14px' }}>{item.temple}</p>
                    </div>
                    <div>
                    <button className="btn btn-warning btn-sm rounded-1 fw-bold text-dark">
                      Darshan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDarshanCards;

// To use this component in your Next.js application:
// 1. Make sure to include Bootstrap CSS in your project:
//    - Either add a link in your _document.js: 
//      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//    - Or import it in your _app.js if you installed it via npm:
//      import 'bootstrap/dist/css/bootstrap.min.css';
// 
// 2. Import and use this component in your page:
//    import LiveDarshanCards from '../components/LiveDarshanCards';
//    
//    export default function Home() {
//      return (
//        <main>
//          <LiveDarshanCards />
//        </main>
//