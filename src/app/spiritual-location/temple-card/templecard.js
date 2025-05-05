// TempleCard.js
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TempleCard() {
  const [activeTab, setActiveTab] = useState('visit');

  return (
    <div className='col'>
    <div className="card mandir_card pb-4 border-0 p-0 shadow-none">
      {/* Temple Image */}
      <div className="position-relative">
        <img 
          src="/assets/images/mandir.jpg" 
          alt="Prem Mandir" 
         className='w-100 object-cover'
        />
      </div>
      
      {/* Temple Information */}
      <div className="card-body px-0 pb-0">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <h5 className="card-title fw-bold mb-0">Prem Mandir</h5>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-check-circle-fill ms-2 text-success" 
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
          <span className="active fw-medium">1.10K Followers</span>
        </div>
        
        <div className="text-muted small mb-3">
          Mathura, Uttar Pradesh
        </div>
        
        <p className="card-text small">
          A huge building has been constructed for satsang in the temple, in which 25000 people can sit together. The walls and pillars of the temple are made of pure white marble.
        </p>
      </div>
      </div>
    
    </div>
  );
}