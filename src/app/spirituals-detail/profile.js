import { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
// Note: You'll need to add the Bootstrap JS import in your _app.js or custom layout

export default function CompanyProfile() {

  return (
    <>
   
      
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left dark sidebar */}
          <div className="col-1 bg-dark" style={{ minHeight: '100vh' }}></div>
          
          {/* Main content */}
          <div className="col-11">
            <div className="container py-4">
              {/* Posts and Follow button */}
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
                <h5 className="mb-0">Posts</h5>
                <button className="btn btn-outline-primary px-4">Follow</button>
              </div>
              
              {/* Company description */}
              <div className="mb-4">
                <p className="text-muted small">
                  Jointech focuses on the AIoT and big data applications of smart logistics, and is committed to becoming a leading global provider and operator of mobile asset management solutions, particularly offering global solutions for logistics equipment that carries. Jointech focuses on the AIoT and big data applications of smart logistics, and is committed to becoming a leading global provider and operator of mobile asset management solutions, particularly offering global solutions for logistics equipment that carries.
                </p>
              </div>
              
              {/* History section */}
              <div className="mb-4">
                <h5 className="mb-2">History of Temple</h5>
                <p className="text-muted small">
                  Jointech focuses on the AIoT and big data applications of smart logistics, and is committed to becoming a leading global provider and operator of mobile asset management solutions, particularly offering global solutions for logistics equipment that carries. Jointech focuses on the AIoT and big data applications of smart logistics, and is committed to becoming a leading global provider and operator of mobile asset management solutions, particularly offering global solutions for logistics equipment that carries.
                </p>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}