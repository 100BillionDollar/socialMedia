// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Globalsearch from '../utils/globalsearch';

export default function HappeningBazaar() {
  // Fixed typo in component name

  const [contactMethod, setContactMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  // Import Bootstrap JS on client-side only
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  
  // Categories with proper data structure
  const categories = [
    {
      name: "Healthcare",
      image: "/assets/images/doctor.png",
      bgColor:"rgb(15, 125, 216)"
    },
    {
      name: "Real Estate",
      image: "/assets/images/real_estate.png", // Should be changed to real estate image
      bgColor:"rgb(38, 84, 161)"

    },
    {
      name: "Electronics",
      image: "/assets/images/electronics.png" ,// Should be changed to electronics image
      bgColor:"rgb(103, 105, 208)"

    },
    {
      name: "Fashion",
      image: "/assets/images/fashion.png", // Should be changed to fashion image
      bgColor:"rgb(15, 125, 216)"

    },
    {
      name: "Food",
      image: "/assets/images/food.png",
         bgColor:"rgb(15, 125, 216)"
       // Should be changed to food image
    },
    {
      name: "Services",
      image: "/assets/images/services.png",
      bgColor:"#00ac7d"
      // Should be changed to services image
    }
  ];
  
  const trendingCategories = [...categories]; // Using the same categories for trending
  
  return (
    <>
      <Head>
        <title>Happening Bazaar - Your Local Marketplace</title>
        <meta name="description" content="Find local products and services in your area" />
      </Head>
      
      {/* Hero Banner */}
      <div className="position-relative inner_banner_section" style={{ height: '330px', background: 'url(/assets/images/banner_cart.jpg)', backgroundPosition: "right", backgroundSize: "cover" }}>
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
          <h1 className="text-white mb-4 fw-medium">Happening Bazaar</h1>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className='col-lg-8 m-auto'>
              <Globalsearch trendingCategories={trendingCategories}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Section */}
      <div className="container py-5">
        <h2 className="mb-4 pb-2">All Categories</h2>
        
        {/* First Row of Categories */}
        <div className="row g-3 mb-3">
          {categories.map((category, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2" >
              <div className={`position-relative cat_card_container rounded-3 overflow-hidden border ${index==1?'realestate':index==2?'electronics':index==3?'fashion':index==4?'food':index==5?'services':''}`} style={{ height: '250px' ,background:category.bgColor}}>
                <Image
                  src={category.image}
                  width={300}
                  height={300}
                  className="w-100 h-100 object-fit-cover card_img position-absolute"
                  alt={category.name}
                />
                <div className='position-absolute d-flex align-items-center gap-2 explore_icon' style={{backgroundColor:category.bgColor}}>
                  <div class="explore_txt">Explore</div> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="8.003" height="14.002" viewBox="0 0 8.003 14.002">
                    <path data-name="Path 139969" d="M9.292 10.417a1 1 0 0 0 0 1.416l5.294 5.291-5.294 5.293a1 1 0 0 0 1.416 1.416l6-6a1 1 0 0 0 0-1.416l-6-6a1 1 0 0 0-1.416 0z" transform="translate(-8.998 -10.123)" />
                </svg>
                </div>
                <div className='position-absolute  p-2 text_container'>
                <label className=" text-white   w-100">{category.name}</label>
                <p>Quick Quotes</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trending Categories Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <h2 class="mb-4 pb-2">Trending Categories</h2>
          
          <div className="position-relative">
            <div className="row g-3">
            {categories.map((category, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2" >
              <div className={`position-relative cat_card_container rounded-3 overflow-hidden border ${index==1?'realestate':index==2?'electronics':index==3?'fashion':index==4?'food':index==5?'services':''}`} style={{ height: '250px' ,background:category.bgColor}}>
                <Image
                  src={category.image}
                  width={300}
                  height={300}
                  className="w-100 h-100 object-fit-cover card_img position-absolute"
                  alt={category.name}
                />
                <div className='position-absolute d-flex align-items-center gap-2 explore_icon' style={{backgroundColor:category.bgColor}}>
                  <div class="explore_txt">Explore</div> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="8.003" height="14.002" viewBox="0 0 8.003 14.002">
                    <path data-name="Path 139969" d="M9.292 10.417a1 1 0 0 0 0 1.416l5.294 5.291-5.294 5.293a1 1 0 0 0 1.416 1.416l6-6a1 1 0 0 0 0-1.416l-6-6a1 1 0 0 0-1.416 0z" transform="translate(-8.998 -10.123)" />
                </svg>
                </div>
                <div className='position-absolute  p-2 text_container'>
                <label className=" text-white   w-100">{category.name}</label>
                <p>Quick Quotes</p>

                </div>
              </div>
            </div>
          ))}
              {/* Next Button */}
              {/* <button className="position-absolute top-50 end-0 translate-middle-y bg-white rounded-circle border-0 shadow-sm" style={{ width: '40px', height: '40px', zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button> */}
            </div>
          </div>
          
          {/* Banner Carousel */}
          <div className="mt-4">
            <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="bg-light border rounded overflow-hidden">
                        <Image
                          src="/assets/images/slider_banner_one.jpg"
                          width={600}
                          height={300}
                          className="w-100 object-fit-cover"
                          alt="Featured banner"
                        />
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light border rounded overflow-hidden">
                        <Image
                          src="/assets/images/slider_banner_two.jpg"
                          width={600}
                          height={300}
                          className="w-100 object-fit-cover"
                          alt="Featured banner"
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="bg-light border rounded overflow-hidden">
                        <Image
                          src="/assets/images/slider_banner_three.jpg"
                          width={600}
                          height={300}
                          className="w-100"
                          alt="Featured banner"
                        />
                       
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light border rounded overflow-hidden">
                        <Image
                          src="/assets/images/slider_banner_two.jpg"
                          width={600}
                          height={300}
                          className="w-100"
                          alt="Featured banner"
                        />
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators position-relative mt-2">
                <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* App Download Section */}
      <section className="app_section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <div className="position-relative" style={{ maxWidth: '300px', margin: '0 auto' }}>
                <Image 
                  src="/assets/images/phone_mockup.png" 
                  alt="App Screenshot" 
                  width={300}
                  height={600}
                  className="img-fluid" 
                />
               
              </div>
            </div>
            
            <div className="col-md-7">
              <h2 className="mb-2">One Stop Solutions For Your Business Needs</h2>
              <h5 className="mb-3">Get the Happening Bazaar app</h5>
              <p className="mb-4">We will send you a link, open it on your phone to download the app</p>
              
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="emailRadio" 
                    name="contactMethod" 
                    value="email"
                    checked={contactMethod === 'email'}
                    onChange={() => setContactMethod('email')}
                  />
                  <label className="form-check-label" htmlFor="emailRadio">Email</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="phoneRadio" 
                    name="contactMethod" 
                    value="phone"
                    checked={contactMethod === 'phone'}
                    onChange={() => setContactMethod('phone')}
                  />
                  <label className="form-check-label" htmlFor="phoneRadio">Phone</label>
                </div>
              </div>
              
              <div className="input-group mb-4">
                <input 
                  type={contactMethod === 'email' ? "email" : "tel"}
                  className="form-control" 
                  placeholder={contactMethod === 'email' ? "Email" : "Phone Number"}
                  value={contactMethod === 'email' ? email : mobileNumber}
                  onChange={(e) => contactMethod === 'email' ? setEmail(e.target.value) : setMobileNumber(e.target.value)}
                />
                <button className="btn btn-danger px-3">Share App Link</button>
              </div>
              
              <div>
                <p className="text-muted mb-3">Download app from</p>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-dark px-3 py-2 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google-play me-2" viewBox="0 0 16 16">
                      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
                    </svg>
                    Google Play
                  </a>
                  <a href="#" className="btn btn-dark px-3 py-2 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-apple me-2" viewBox="0 0 16 16">
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    </svg>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="buy_requirment_section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 position-relative">
              <div className="rounded-circle position-relative" style={{ width: '320px', height: '320px', backgroundColor: '#FFE4E1', margin: '0 auto' }}>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <Image 
                    src="/assets/images/business_person.png" 
                    alt="Business Person" 
                    width={200} 
                    className='object-fit-cover'
                    height={200} 
                  />
                </div>
              </div>
            </div>
            
            <div className="col-md-7">
              <h2 className="mb-2">Tell Us Your Buy Requirement</h2>
              <p className="mb-4">
                Save Time in Search | Verified Suppliers | Competitive Price
              </p>
              
              <div className="mb-3">
                <p className="mb-3">Provide the below details to get quick quotes from sellers</p>
                
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder='Please enter a specific product name e.g. "MP3 Players" instead of "Electronics"'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text common_btn">
                      <div className="me-1">+91</div>
                    </span>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <button className="btn common_btn btn-lg w-100" style={{ backgroundColor: '#6C63FF' }}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Blogs Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Recent Blogs</h2>
          
          <div className="row">
            {[1, 2, 3].map((item) => (
              <div key={item} className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <Image 
                    src="/assets/images/event_img1.jpg" 
                    alt="Blog" 
                    width={400} 
                    height={250} 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-danger">Marketing</span>
                      <div className="d-flex align-items-center">
                        <span className="text-success me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill me-1" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                          </svg>
                          10k Views
                        </span>
                        <span className="text-warning">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar me-1" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                          </svg>
                          10 July 2021
                        </span>
                      </div>
                    </div>
                    
                    <h5 className="card-title">Luxury stays, budget-friendly travel, and cultural experiences.</h5>
                    <p className="card-text">City life refers to the lifestyle and characteristics associated with living in a densely populated urban area. It contrasts with...</p>
                    
                    <a href="#" className="fw-bold text-decoration-none text-danger">
                      CONTINUE READING 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}