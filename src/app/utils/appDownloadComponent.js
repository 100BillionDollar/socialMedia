import React from 'react';
import Image from 'next/image';

export default function AppDownloadComponent() {
  return (
    <div className="container mb-5 mt-5 pt-5">
      <div className="bg-purple text-white rounded-4 p-4 position-relative">
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <div className="position-relative" style={{ marginTop: '-60px' }}>
              <Image
                src="/assets/images/app_screenshot_puja.png"
                alt="App Screenshot"
                width={200}
                height={600}
                className="ss_img position-absolute"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/200x400?text=App+Screenshot')}
              />
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="mb-2">Download</h3>
            <h2 className="mb-3">Happening Bazar App</h2>
            
          </div>
          <div className="col-md-6 ml-auto text-center">
            <div className="rounded p-3 mx-auto qr-box">
                <div className='bg-white d-inline-block'>                
                    <img src="/assets/images/qrcode.svg" alt="QR CODE"  height={'150'} width={'150'}/>
                    </div>

              <p className="text-white small mb-0 mt-4">Scan to Download the App</p>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#" className="btn bg-black text-white px-3 py-2 rounded-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-apple fs-4 me-2"></i>
                  <div>
                    <small className="d-block">Download on the</small>
                    <span>App Store</span>
                  </div>
                </div>
              </a>
              <a href="#" className="btn bg-black text-white px-3 py-2 rounded-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-google-play fs-4 me-2"></i>
                  <div>
                    <small className="d-block">GET IT ON</small>
                    <span>Google Play</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <span className="text-warning me-2">★★★★★</span>
              <span className="text-warning">4.5+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}