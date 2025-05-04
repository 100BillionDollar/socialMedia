import React from 'react'
import OmSymbolBootstrap from './omAnimation'
export default function Herosection() {
  return (
    <div className="container spiritual_hero_sec mb-4" style={{marginTop:'120px'}}>
    <div className="row align-items-center bg-opacity-75 rounded-3 p-4">
      <div className="col-md-7">
        <div className="text-center text-md-start">
          <h3 className="mb-4">
            <span className="text-danger me-2">ॐ</span>
            <small className='fw-bold'>Om is the sound of the universe</small>
          </h3>
          <h1 className="text-danger">Hindu Mandir Puja</h1>
          <p className="fs-5 mb-4">
            A Trusted Spiritual Platform for Offering<br />
            Puja and Chadhavas at India's<br />
            Most Famous Mandpir
          </p>
          <p className="mb-4">
            Experience live darshan, participate in online pujas, and receive sacred prasad<br />
            from India's most revered temples
          </p>
          <div className='main_btn_sec d-inline-block'>
          <div className="d-flex  mb-3 btn_sec justify-content-center justify-content-md-start">
            <button className="btn btn-danger px-4">Ram</button>
            <button className="btn  px-3">Hanuman Chalisa</button>
          </div>
          <div className=''>
          <button className="btn btn-sm d-flex align-items-center  m-auto">
            <span className='play_circle rounded-circle'><i className="bi bi-megaphone-fill"></i></span><strong>Play</strong> 
          </button>
          </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <OmSymbolBootstrap/>
      </div>
    </div>
  </div>

  )
}
