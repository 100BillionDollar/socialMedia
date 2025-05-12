// pages/temples/prem-mandir.js
import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap
import LiveDarshanCarousel from './livedarshan';

export default function PremMandir() {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('about'); // State to track active tab
  
  const handleCopy = () => {
    navigator.clipboard.writeText("328/2/4/1 Dargah Bypass, Link Road, Link Road/M.R Road, Khagaria, Indore - 452016");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Tab content components
  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className='about_content_container'>
            {/* About Content */}
            <div className='content pb-3'>
              <p className="text-muted small">
                Prem Mandir, also known as the "Temple of Divine Love," is a magnificent Hindu temple complex located in Vrindavan, Mathura district, Uttar Pradesh. Built by Jagadguru Kripalu Parishat, it's dedicated to Radha Krishna and Sita Ram. The temple is constructed entirely of Italian marble and features intricate carvings depicting scenes from Krishna's life.
              </p>
            </div>
              
            {/* Temple description */}
            <div className="content mb-4 py-3">
              <h5 className="mb-3 fw-medium">Overview</h5>
              <p className="text-muted small">
                Prem Mandir is not just a temple but a spiritual complex spanning 54 acres. The main shrine is surrounded by beautifully landscaped gardens, fountains, and walkways. The temple illuminates in the evening with colorful lights, creating a divine atmosphere that attracts thousands of devotees and tourists alike.
              </p>
            </div>
              
            {/* History section */}
            <div className="content mb-4 py-3">
              <h5 className="mb-3 fw-medium">History of Temple</h5>
              <p className="text-muted small">
                Construction of Prem Mandir began in 2001 and was completed in 2012. The temple was inaugurated on February 15, 2012, by the spiritual leader Jagadguru Kripalu Maharaj. It took over a decade to build this architectural marvel, with hundreds of skilled artisans working on the carvings and construction. The temple stands as a testament to devotion and craftsmanship.
              </p>
            </div>
              
            <div className="content mb-4 py-3">
              <h5 className="mb-3 fw-medium">Darshan Time</h5>
              <div className='content_txt'>
                <ul className='list-unstyled'>
                  <li className="small">Morning</li>
                  <li className="small">6:30 AM - 12:00 PM</li>
                </ul>
                <ul className='list-unstyled'>
                  <li className="small">Evening</li>
                  <li className="small">4:00 PM - 8:00 PM</li>
                </ul>
              </div>
            </div>
              
            <div className="content mb-4 py-3">
              <h5 className="mb-3 fw-medium">Aarti Time</h5>
              <div className='content_txt'>
                <ul className='list-unstyled'>
                  <li className="small">Mangala Aarti Timing</li>
                  <li className="small">5:30 AM - 6:00 AM</li>
                </ul>
                <ul className='list-unstyled'>
                  <li className="small">Sandhya Aarti Timing</li>
                  <li className="small">7:00 PM - 7:30 PM</li>
                </ul>
              </div>
            </div>
              
            <div className="content mb-4 py-3">
              <h5 className="mb-3 fw-medium">Address</h5>
              <p>Raman Reti, Vrindavan, Mathura, Uttar Pradesh 281121, India</p>
            </div>
          </div>
        );
      
      case 'gallery':
        return (
          <div className="gallery-container">
            <h5 className="mb-4 fw-medium">Temple Gallery</h5>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/mandir_new.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Front View" />
                </div>
              </div>
              <div className="col-md-4">  
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/mandir_new1.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Evening View" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/mandir_new2.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Interior" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/location.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Grounds" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/mandir_new.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Architecture" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/location.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Grounds" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light rounded overflow-hidden">
                  <img src="/assets/images/mandir_new.jpg" className="w-100 h-100 object-fit-cover" alt="Temple Architecture" />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'donation':
        return (
          <div className="donation-container">
            <h5 className="mb-4 fw-medium">Make a Donation</h5>
            <p className="text-muted mb-4">Your generous contributions help maintain the temple and support various religious and charitable activities.</p>
            
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title">Bank Details</h6>
                <p className="card-text small mb-1">Account Name: Prem Mandir Trust</p>
                <p className="card-text small mb-1">Account Number: XXXX XXXX XXXX 1234</p>
                <p className="card-text small mb-1">IFSC Code: ABCD0001234</p>
                <p className="card-text small">Bank: State Bank of India, Vrindavan Branch</p>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title">UPI Payment</h6>
                <p className="card-text small mb-3">Scan the QR code or use UPI ID: premmandir@sbi</p>
                <div className="bg-light rounded d-flex justify-content-center p-3">
                  <div style={{ width: '150px', height: '150px', backgroundColor: '#e9ecef' }} className="d-flex justify-content-center align-items-center">
                    <span className="text-muted small">QR Code Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'darshan':
        return (
          // <div className="darshan-container">
          //   <h5 className="mb-4 fw-medium">Darshan & Pooja Information</h5>
            
          //   <div className="card mb-4">
          //     <div className="card-body">
          //       <h6 className="card-title">Special Darshan</h6>
          //       <p className="card-text small mb-3">VIP darshan tickets are available at the temple counter with the following rates:</p>
          //       <ul className="list-group list-group-flush small">
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Individual Ticket</span>
          //           <span>₹500 per person</span>
          //         </li>
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Family Ticket (up to 4 members)</span>
          //           <span>₹1,500</span>
          //         </li>
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Group Ticket (5-10 members)</span>
          //           <span>₹3,000</span>
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
            
          //   <div className="card mb-4">
          //     <div className="card-body">
          //       <h6 className="card-title">Special Pooja Services</h6>
          //       <p className="card-text small mb-3">Book special pooja services in advance:</p>
          //       <ul className="list-group list-group-flush small">
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Abhishekam</span>
          //           <span>₹2,100</span>
          //         </li>
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Sahasranama Archana</span>
          //           <span>₹1,100</span>
          //         </li>
          //         <li className="list-group-item d-flex justify-content-between align-items-center">
          //           <span>Annadanam (Food donation for 100 people)</span>
          //           <span>₹11,000</span>
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
            
          //   <div className="alert alert-info small" role="alert">
          //     <i className="bi bi-info-circle me-2"></i>
          //     For special pooja bookings, please contact the temple office at least 3 days in advance at 9846876654.
          //   </div>
          // </div>
          <LiveDarshanCarousel/>
        );
      
      case 'posts':
        return (
          <div className="posts-container">
            <h5 className="mb-4 fw-medium">Recent Posts & Updates</h5>
            <div className='row'>
              <div className='col-md-6'>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>
            <div className='col-md-6'>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>
            <div className='col-md-6'>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>
            <div className='col-md-6'>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>  
            <div className='col-md-6'>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>
            <div className='col-md-6'>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                    <img src="/assets/images/man.png" className='h-100 w-100' alt=""/>
                  </div>
                  <div>
                    <h6 className="mb-0">Prem Mandir Official</h6>
                    <p className="text-muted small mb-0">2 days ago</p>
                  </div>
                </div>
                <p className="card-text">Join us for the special Janmashtami celebrations this year! The temple will have extended darshan hours and special cultural programs throughout the day.</p>
                <img src="/assets/images/mandir_new.jpg" className="w-100 rounded mb-3" alt="Janmashtami Celebration" />
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-heart"></i> 245</button>
                  <button className="btn btn-sm btn-light me-2"><i className="bi bi-chat"></i> 32</button>
                  <button className="btn btn-sm btn-light"><i className="bi bi-share"></i> Share</button>
                </div>
              </div>
            </div>
            </div>
            
            </div>
          </div>
        );
      
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <>
      <Head>
        <title>Prem Mandir - Happening Bazaar</title>
        <meta name="description" content="Prem Mandir temple in Mathura, Uttar Pradesh" />
        <link rel="icon" href="/favicon.ico" />
        {/* You may need to include Bootstrap CSS here if not using _app.js for global imports */}
      </Head>

      <div className="container detail_page_styling bg-white">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="py-2 my-4">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><Link href="/uttar-pradesh">Uttar Pradesh</Link></li>
            <li className="breadcrumb-item"><Link href="/mathura">Mathura</Link></li>
            <li className="breadcrumb-item active">Prem Mandir</li>
          </ol>
        </nav>

        {/* Temple Profile Content */}
        <div className="pb-4">
          {/* Title Section */}
          <div className="mb-1">
            <h1 className="d-flex align-items-center">
              Prem Mandir 
              <img src="/assets/images/tick-mark.svg" className='ms-2' alt="tick mark" height={"35"} width={"35"}/>
            </h1>
            <p className="text-muted">Mathura, Uttar Pradesh</p>
          </div>

          {/* Action Buttons & Stats */}
          <div className="row align-items-center mb-4">
            <div className="col-md-3">
              <button class="btn btn-outline-danger me-2" >Follow +</button>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <span className="fs-2 active">6.63K</span> <span className="text-muted small">Visits</span>
                </div>
                <div className="text-center">
                  <span className="fs-2 active">1.10K</span> <span className="text-muted small">Followers</span>
                </div>
                <div className="text-center">
                  <span className="fs-2 active">10.8K</span> <span className="text-muted small">Likes</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <button className="btn btn_icon btn-outline-danger me-2">
                <i className="bi bi-geo-alt"></i> 
              </button>
              <button className="btn btn_icon btn-outline-secondary">
                <i className="bi bi-share"></i> 
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="bg-light rounded overflow-hidden h-100">
                <img src="/assets/images/mandir_new.jpg" className='w-100 h-100 object-fit-cover' alt="mandir" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="row g-2">
                <div className="bg-light img_mb overflow-hidden position-relative p-0 rounded">
                  <img src="/assets/images/mandir_new1.jpg" className='w-100 object-cover' alt="mandir" />                  
                </div>
                <div className="bg-secondary rounded position-relative p-0 overflow-hidden d-flex align-items-center justify-content-center">
                  <img src="/assets/images/mandir_new2.jpg" alt="mandir" className='w-100'/>
                  <div className="text-white image_counter">+30 More</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='row'>
            <div className='col-md-9'>
              {/* Tabs Navigation */}
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('about');
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('gallery');
                    }}
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'donation' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('donation');
                    }}
                  >
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'darshan' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('darshan');
                    }}
                  >
                    Darshan & Pooja
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('posts');
                    }}
                  >
                    Posts
                  </a>
                </li>
              </ul>

              {/* Dynamic Tab Content */}
              {renderTabContent()}
            </div>

            <div className='col-md-3'>
              {/* Direction section */}
              <div className="mb-4 position-sticky sticky_card">
              <button class="btn btn-outline-danger w-100 me-2 mb-3" >Follow +</button>
                    <div className='direction_card_container'>
                <h5 className="mb-3 fw-medium">Direction</h5>
                
                {/* Map placeholder */}
                <div className="bg-light rounded position-relative mb-3" style={{ height: '160px' }}>
                  <img src="/assets/images/location.jpg" className='w-100 h-100 object-fit-cover' alt=""/>
                </div>
                
                {/* Address and direction buttons */}
                <div className="mb-4">
                  <p className="small mb-2">
                    328/2/4/1 Dargah Bypass, Link Road, Link Road/M.R Road, Khagaria, Indore - 452016
                  </p>
                  <div className="d-flex map_btn gap-2">
                    <button className="btn btn-sm btn-light border">
                      <i className="bi bi-geo-alt text-danger me-1"></i> Direction
                    </button>
                    <button className="btn btn-sm btn-light border" onClick={handleCopy}>
                      <i className="bi bi-clipboard me-1"></i> {isCopied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                
                {/* Social Media section */}
                <div className="mb-4 social_icon">
                  <h5 className="mb-2 fw-medium">Social Media</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-decoration-none d-flex align-items-center">
                      <span className="bg-danger text-white p-1 rounded">
                        <i className="bi bi-youtube"></i>
                      </span>
                    </a>
                    <a href="#" className="text-decoration-none d-flex align-items-center">
                      <span className="bg-pink text-white p-1 rounded" style={{ backgroundColor: '#E1306C' }}>
                        <i className="bi bi-instagram"></i>
                      </span>
                    </a>
                    <a href="#" className="text-decoration-none d-flex align-items-center">
                      <span className="bg-primary text-white p-1 rounded">
                        <i className="bi bi-facebook"></i>
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Contact section */}
                <div className="mb-4">
                  <h5 className="mb-2 fw-medium">Contact</h5>
                  <p className="small mb-3">9846876654, 8547896547</p>
                  <button className="btn common-btn text-white w-100" style={{ backgroundColor: '#fd7e14' }}>
                    REPORT ISSUE
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons (you need to add this to your project) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      
      {/* Bootstrap JS (optional, for dropdowns, etc.) */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}