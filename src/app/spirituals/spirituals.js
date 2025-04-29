// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('Kalma Nagar, New Delhi');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Head>
        <title>Hindu Mandir Puja - A Spiritual Platform</title>
        <meta name="description" content="A Trusted Spiritual Platform for Offering Puja and Chadhavas at India's Most Famous Mandir" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <div className="container-fluid p-0">
        {/* Header/Navigation Bar */}
        <div className="row g-0 mb-3">
          <div className="col-12 p-2 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-2 mb-md-0">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-danger">
                      <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location" 
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-8">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="what are you looking for" 
                    />
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mb-4">
          <div className="row align-items-center bg-light bg-opacity-75 rounded-3 p-4">
            <div className="col-md-7">
              <div className="text-center text-md-start">
                <h3 className="text-warning mb-2">
                  <span className="text-danger me-2">ॐ</span>
                  Om is the sound of the universe
                </h3>
                <h1 className="text-danger fw-bold mb-3">Hindu Mandir Puja</h1>
                <p className="fs-5 mb-4">
                  A Trusted Spiritual Platform for Offering<br />
                  Puja and Chadhavas at India's<br />
                  Most Famous Mandir
                </p>
                <p className="mb-4">
                  Experience live darshan, participate in online pujas, and receive sacred prasad<br />
                  from India's most revered temples
                </p>
                <div className="d-flex gap-2 mb-3 justify-content-center justify-content-md-start">
                  <button className="btn btn-danger px-4">Ram</button>
                  <button className="btn btn-outline-dark px-3">Hanuman Chalisa</button>
                </div>
                <button className="btn btn-sm btn-outline-secondary rounded-circle mb-3">
                  <i className="bi bi-volume-up me-1"></i> Play
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-center">
                <Image 
                  src="/om-symbol.png" 
                  alt="Om Symbol with Sanskrit Mantras" 
                  width={320} 
                  height={320}
                  priority 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <div className="position-relative">
                <hr className="my-0" />
                <h2 className="position-absolute top-50 start-50 translate-middle bg-light px-4 fw-bold">FEATURED</h2>
              </div>
            </div>
          </div>

          {/* First Row of Features */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="bg-secondary mb-3 py-5" style={{height: "180px"}}></div>
                  <h5 className="card-title">Temple</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="mb-3" style={{height: "180px"}}>
                    <Image 
                      src="/aarti-thali.png" 
                      alt="Aarti Thali" 
                      width={250} 
                      height={180}
                      className="img-fluid" 
                    />
                  </div>
                  <h5 className="card-title">Aarti & Chalisa</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="mb-3" style={{height: "180px"}}>
                    <Image 
                      src="/sacred-book.png" 
                      alt="Sacred Book" 
                      width={250} 
                      height={180}
                      className="img-fluid" 
                    />
                  </div>
                  <h5 className="card-title">Dharmik Gyan</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Features */}
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="bg-secondary mb-3 py-5" style={{height: "180px"}}></div>
                  <h5 className="card-title">Articles</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="bg-secondary mb-3 py-5" style={{height: "180px"}}></div>
                  <h5 className="card-title">Festivals</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body text-center">
                  <div className="bg-secondary mb-3 py-5" style={{height: "180px"}}></div>
                  <h5 className="card-title">Live Darshan</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
{/* Spiritual Information Section */}
<div className="container mb-4">
  <div className="text-center mb-3">
    <h3 className="border-bottom border-dark pb-2 d-inline-block px-4">SPIRITUAL INFORMATION</h3>
  </div>
  
  <div className="card bg-primary text-white mb-4">
    <div className="card-body p-4">
      <div className="row">
        <div className="col-md-4">
          <div className="bg-purple rounded p-2 mb-2">
            <h6>Daily Panchang</h6>
            <div className="bg-purple-light rounded p-2 d-inline-block mb-2">
              <small>18th February 2025</small><br />
              <small>(Saturday)</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-2">
            <h6>Shubh Muhurat:</h6>
            <p className="mb-1">11:28 Am to 12:31 Pm</p>
            <small>Rahukaal:</small><br />
            <small>09:01 Am to 10:30 Am</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-6 text-center">
              <div className="bg-light rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <i className="bi bi-brightness-high text-warning"></i>
              </div>
              <p className="mb-1">Sunrise</p>
              <small>06:12 Am</small>
            </div>
            <div className="col-6 text-center">
              <div className="bg-light rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <i className="bi bi-sunset text-warning"></i>
              </div>
              <p className="mb-1">Sunset</p>
              <small>05:39 Pm</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Appointment Cards */}
  <div className="row mb-2">
    <div className="col-md-6 mb-3 mb-md-0">
      <div className="card rounded-3 border-0 overflow-hidden">
        <div className="card-img position-relative">
          <Image 
            src="/appointment-bg.jpg" 
            alt="Appointment Background" 
            width={600} 
            height={200}
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}>
            <div className="text-white">
              <p className="mb-1">Thinking about making a</p>
              <h4 className="text-warning">Big Change In Your Life?</h4>
            </div>
            <div>
              <p className="text-white mb-2">Schedule Your Appointment</p>
              <button className="btn btn-warning btn-sm">
                <i className="bi bi-telephone-fill me-1"></i> +91: 9999099700
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card rounded-3 border-0 overflow-hidden">
        <div className="card-img position-relative">
          <Image 
            src="/appointment-bg.jpg" 
            alt="Appointment Background" 
            width={600} 
            height={200}
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}>
            <div className="text-white">
              <p className="mb-1">Thinking about making a</p>
              <h4 className="text-warning">Big Change In Your Life?</h4>
            </div>
            <div>
              <p className="text-white mb-2">Schedule Your Appointment</p>
              <button className="btn btn-warning btn-sm">
                <i className="bi bi-telephone-fill me-1"></i> +91: 9999099700
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Upcoming Pujas Section */}
<div className="container mb-4">
  <div className="text-center mb-3">
    <h3 className="border-bottom border-dark pb-2 d-inline-block px-4">UPCOMING PUJAS</h3>
  </div>
  
  <div className="row">
    <div className="col-md-4 mb-3">
      <div className="card border-0 overflow-hidden rounded-3">
        <div className="position-relative">
          <Image 
            src="/vishesh-puja.jpg" 
            alt="Guru Purnima Vishesh Puja" 
            width={400}
            height={250}
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}>
            <div className="bg-danger text-white rounded-pill d-inline-block px-2 py-1 align-self-start">
              <small>गुरुवार</small>
            </div>
            <div className="text-white">
              <h5>विशेष पूजा</h5>
              <p className="mb-1">Guru Purnima Vishesh Puja</p>
              <button className="btn btn-warning btn-sm mt-2">BOOK PUJA NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card border-0 overflow-hidden rounded-3">
        <div className="position-relative">
          <Image 
            src="/vishesh-puja.jpg" 
            alt="Guru Purnima Vishesh Puja" 
            width={400}
            height={250}
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}>
            <div className="bg-danger text-white rounded-pill d-inline-block px-2 py-1 align-self-start">
              <small>गुरुवार</small>
            </div>
            <div className="text-white">
              <h5>विशेष पूजा</h5>
              <p className="mb-1">Guru Purnima Vishesh Puja</p>
              <button className="btn btn-warning btn-sm mt-2">BOOK PUJA NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card border-0 overflow-hidden rounded-3">
        <div className="position-relative">
          <Image 
            src="/vishesh-puja.jpg" 
            alt="Guru Purnima Vishesh Puja" 
            width={400}
            height={250}
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}>
            <div className="bg-danger text-white rounded-pill d-inline-block px-2 py-1 align-self-start">
              <small>गुरुवार</small>
            </div>
            <div className="text-white">
              <h5>विशेष पूजा</h5>
              <p className="mb-1">Guru Purnima Vishesh Puja</p>
              <button className="btn btn-warning btn-sm mt-2">BOOK PUJA NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Dots Pagination */}
  <div className="text-center my-3">
    <button className="btn btn-sm px-1 py-0">
      <span className="bg-primary rounded-circle d-inline-block" style={{width: '8px', height: '8px'}}></span>
    </button>
    <button className="btn btn-sm px-1 py-0">
      <span className="bg-secondary rounded-circle d-inline-block" style={{width: '8px', height: '8px'}}></span>
    </button>
    <button className="btn btn-sm px-1 py-0">
      <span className="bg-secondary rounded-circle d-inline-block" style={{width: '8px', height: '8px'}}></span>
    </button>
  </div>
</div>

{/* Join Our Community Section */}
<div className="container mb-5">
  <div className="text-center mb-3">
    <h3 className="border-bottom border-dark pb-2 d-inline-block px-4">JOIN OUR COMMUNITY</h3>
  </div>
  
  <div className="row justify-content-center text-center">
    <div className="col-6 col-md-3 mb-3">
      <a href="#" className="text-decoration-none">
        <div className="d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
            <i className="bi bi-facebook fs-4 text-primary"></i>
          </div>
          <h6 className="mb-1">Facebook</h6>
          <small className="text-muted">Channel for Community</small>
        </div>
      </a>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <a href="#" className="text-decoration-none">
        <div className="d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
            <i className="bi bi-linkedin fs-4 text-primary"></i>
          </div>
          <h6 className="mb-1">LinkedIn</h6>
          <small className="text-muted">Latest News & Updates</small>
        </div>
      </a>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <a href="#" className="text-decoration-none">
        <div className="d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
            <i className="bi bi-instagram fs-4 text-danger"></i>
          </div>
          <h6 className="mb-1">Instagram</h6>
          <small className="text-muted">Latest News & Updates</small>
        </div>
      </a>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <a href="#" className="text-decoration-none">
        <div className="d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
            <i className="bi bi-youtube fs-4 text-danger"></i>
          </div>
          <h6 className="mb-1">YouTube</h6>
          <small className="text-muted">Latest News & Updates</small>
        </div>
      </a>
    </div>
  </div>
</div>

{/* App Download Section */}
<div className="container mb-5">
  <div className="bg-purple text-white rounded-4 p-4 position-relative">
    <div className="row align-items-center">
      <div className="col-md-3 text-center mb-4 mb-md-0">
        <div className="position-relative" style={{marginTop: '-60px'}}>
          <Image 
            src="/app-screen.png" 
            alt="App Screenshot" 
            width={200} 
            height={400}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-md-6 mb-4 mb-md-0">
        <h3 className="mb-2">Download</h3>
        <h2 className="mb-3">Happening Bazar App</h2>
        <div className="d-flex gap-3 mt-4">
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
      </div>
      <div className="col-md-3 text-center">
        <div className="bg-white rounded p-3 mx-auto" style={{width: '150px', height: '150px'}}>
          <h4 className="text-black mb-2">QR</h4>
          <p className="text-black small mb-0">Scan to Download the App</p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="bg-warning rounded-circle mx-1" style={{width: '10px', height: '10px'}}></div>
          <div className="bg-warning rounded-circle mx-1" style={{width: '10px', height: '10px'}}></div>
          <div className="bg-warning rounded-circle mx-1" style={{width: '10px', height: '10px'}}></div>
          <div className="bg-warning rounded-circle mx-1" style={{width: '10px', height: '10px'}}></div>
        </div>
      </div>
    </div>
  </div>
</div> 

      {/* Bootstrap Icons and Bootstrap JS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
    </>
  );
}