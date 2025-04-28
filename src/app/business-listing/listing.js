// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Image from 'next/image';
export default function Home() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [bannerIndex, setBannerIndex] = useState(0);

 useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  // Mock data for search results
  const searchResults = [
    {
      id: 1,
      name: "Dr. Shilpis Sparsh Skin Hair Dental & Cosmetology Center",
      address: "Shop No. 254, Uttam Nagar East, Delhi",
      rating: 4.3,
      reviewCount: 150,
      followers: '130K',
      image:"/assets/images/shop_one.jpg",
      memberSince: 35,
      offers: 5,
      opens: '9:30 pm',
      verified: true,
      services: ['Ayurvedic Hospital', 'Corner Hospital']
    },
    {
      id: 2,
      name: "Dr. Shilpis Sparsh Skin Hair Dental & Cosmetology Center",
      address: "Shop No. 254, Uttam Nagar East, Delhi",
      rating: 4.8,
      reviewCount: 150,
      followers: '130K',
      image:"/assets/images/left_imagve_card.jpg",
      memberSince: 35,
      offers: 5,
      opens: '9:30 pm',
      verified: true,
      services: ['Ayurvedic Hospital', 'Corner Hospital']
    },
    {
      id: 3,
      name: "Dr. Shilpis Sparsh Skin Hair Dental & Cosmetology Center",
      address: "Shop No. 254, Uttam Nagar East, Delhi",
      rating: 4.8,
      image:"/assets/images/shop_three.jpg",
      reviewCount: 150, 
      followers: '130K',
      memberSince: 35,
      offers: 5,
      opens: '9:30 pm',
      verified: false,
      services: ['Ayurvedic Hospital', 'Corner Hospital']
    },
    {
      id: 4,
      name: "Dr. Shilpis Sparsh Skin Hair Dental & Cosmetology Center",
      address: "Shop No. 254, Uttam Nagar East, Delhi",
      rating: 4.8,
      reviewCount: 150,
      followers: '130K',
      memberSince: 35,
      image:"/assets/images/shop_four.jpg",
      offers: 5,
      opens: '9:30 pm',
      verified: false,
      services: ['Ayurvedic Hospital', 'Corner Hospital']
    }
  ];

  // Related keywords
  const relatedKeywords = [
    "Hospitals", "Children Hospitals", "Private Hospitals", "Ayushman Hospital",
    "Public Hospitals", "CGHS Empanelled Hospitals", "Charitable Hospitals",
    "Multispeciality Hospitals", "Super Speciality Hospitals", "ESI Hospitals",
    "Prvisy Scheme Hospitals", "Echo Hospitals", "NICU 24 Hours Emergency Services",
    "24 Hours ICU", "Hospitals For Physically Handicapped", "Burns Hospital",
    "Naturopathy Hospitals", "24 Hours ICU", "Serpawon Hospital",
    "24 Hours NICU", "Cashless Hospitals", "ICU", "Critical Care Centers",
    "Paediatric District Hospitals", "HDU", "Health Care Services",
    "Command Hospital", "First Hospital"
  ];

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const BusinessCard = ({ business }) => (
    <div className="card business_card_item mb-3 border-0 shadow-sm">
      <div className="card-body">
        <div className="row">
          <div className="col-md-9">
            <div className='d-inline-flex'>
            <Image src={business.image} alt='business' className='me-4 rounded-2' height={'244'} width={'200'}/>
            <div className='content_container d-flex flex-column justify-content-between'>
            <h5 className="card-title d-flex">
              {business.name}
              {business.verified && (
                <span className="ms-2 text-success">
                 <svg width="25" height="25" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0726 4.95682C14.8882 5.53977 15.442 6.44318 15.442 7.5C15.442 8.55682 14.8882 9.46091 14.0726 10.0432C14.2375 11.0264 13.9805 12.06 13.2295 12.8045C12.4771 13.5511 11.4361 13.7993 10.4495 13.6398C9.86474 14.4518 8.94608 15 7.88382 15C6.81881 15 5.90634 14.4498 5.32024 13.6391C4.33218 13.7993 3.29054 13.5518 2.53747 12.8045C1.78509 12.058 1.53499 11.0243 1.70126 10.0432C0.88636 9.46159 0.325684 8.5575 0.325684 7.5C0.325684 6.4425 0.88636 5.53773 1.70126 4.95682C1.53499 3.97568 1.78509 2.94205 2.53816 2.19545C3.28916 1.44955 4.3315 1.19523 5.32574 1.35886C5.9084 0.548182 6.82087 0 7.88382 0C8.9454 0 9.86268 0.5475 10.4481 1.35886C11.4389 1.19523 12.4792 1.45091 13.2295 2.19545C13.9798 2.94 14.2382 3.97364 14.0726 4.95682ZM11.0314 4.89955C11.1049 4.95156 11.1673 5.01743 11.2151 5.09338C11.2629 5.16933 11.2952 5.25389 11.31 5.34221C11.3249 5.43053 11.3221 5.5209 11.3018 5.60814C11.2814 5.69538 11.244 5.7778 11.1915 5.85068L7.75602 10.6234C7.69803 10.704 7.62303 10.7711 7.53626 10.82C7.44948 10.869 7.35301 10.8985 7.25354 10.9067C7.15408 10.9149 7.05402 10.9015 6.96031 10.8674C6.8666 10.8333 6.78151 10.7794 6.71094 10.7093L4.64963 8.66386C4.52447 8.53527 4.45521 8.36304 4.45677 8.18427C4.45834 8.0055 4.5306 7.83449 4.658 7.70808C4.78539 7.58166 4.95773 7.50996 5.13788 7.5084C5.31804 7.50685 5.4916 7.57557 5.62119 7.69977L7.10877 9.17591L10.0729 5.05773C10.1789 4.91063 10.3394 4.81132 10.5192 4.78166C10.6989 4.752 10.8832 4.7944 11.0314 4.89955Z" fill="#059E54"/>
                </svg>

                </span>
              )}
            </h5>
            <div className='card-text'>
            <p className=" mb-1">
              <i className="bi bi-geo-alt me-1 text-secondary small"></i>
              <small className="text-muted">{business.address} - <span className="text-primary">more</span></small>
            </p>
            <div className="d-flex align-items-center mb-2">
              <small className="text-muted me-3"><i className="bi bi-clock me-1 small"></i>24 hours veterinary hospital</small>
              {business.services.map((service, index) => (
                <small key={index} className="text-muted me-3">{service}</small>
              ))}
            </div>
            </div>
            <div className="">
              <div className="bg-success d-inline-flex review_cnt text-white py-1 rounded me-2 d-flex align-items-center" style={{ fontSize: '12px' }}>
                <div className='d-flex review_txt align-items-center'><i className="bi bi-star-fill small"></i> {business.rating}</div>
                <span className="badge bg-light text-dark border">{business.reviewCount}</span>

              </div>
                          
              <p className="mb-1 text-success mt-2 timing_label">Opens <span className="text-muted">• Closes {business.opens}</span></p>

            </div>
            <div className="d-flex">
              <button className="btn first_btn common_btn btn-outline-success">
                <i className="bi bi-telephone-fill me-2"></i>
                Call
              </button>
            <button className="btn blue_btn">
              Enquiry
              </button>
            <button className="btn second_btn common_btn">
              Direction
              </button>
            </div>
            </div>
            </div>
          </div>
          <div className="col-md-3 text-end">
            <div className="d-flex h-100 flex-column align-items-end">
              <p className="mb-1 active">{business.followers} followers</p>
              <p className="mb-1  f-12">Member Since <span className='active'>{business.memberSince}</span> Months</p>
              <p className="mb-0 offer_text text-dark">              
                    <Image src={"/assets/images/offer_icon.svg"} alt
                    ="offer" height={"20"} width={"20"}/> {business.offers}+ offers on Utsav
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BuyRequestForm = () => (
    <div className="card bg-light mb-3">
      <div className="card-header ">
        Buy Request for
        <br/>
        <small>Construction & Decoration</small>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name*" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Mobile Number*" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="City*" />
          </div>
          <button type="submit" className="btn common_btn w-100">Submit</button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Supplier Search</title>
        <meta name="description" content="Search for suppliers" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
      </Head>

      <div className="container my-4">
        {/* Banner */}
           <div className="row mb-4">
                  <div className="col-12">
                    <div id="mainBanner" className="carousel slide rounded-3 position-relative overflow-hidden" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className={`carousel-item ${bannerIndex === 0 ? 'active' : ''}`}>
                          <div className="text-center">
                          <Image
                              src="/assets/images/healthcare_four.jpg"
                              width={1200}
                              height={400}
                              className="w-100"
                              alt=""
                            />
                            
                          </div>
                        </div>
                        <div className={`carousel-item ${bannerIndex === 1 ? 'active' : ''}`}>
                          <div className="bg-light text-center  rounded">
                          <Image
                              src="/assets/images/healthcare_two.jpg"
                              width={1200}
                              height={400}
                              className="w-100"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className={`carousel-item ${bannerIndex === 2 ? 'active' : ''}`}>
                          <div className="bg-light text-center  rounded">
                          <Image
                              src="/assets/images/healthcare_one.jpg"
                              width={1200}
                              height={400}
                              className="w-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="carousel-indicators position-absolute bottom-0 mt-2">
                        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className={bannerIndex === 0 ? 'active' : ''} onClick={() => setBannerIndex(0)}></button>
                        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" className={bannerIndex === 1 ? 'active' : ''} onClick={() => setBannerIndex(1)}></button>
                        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" className={bannerIndex === 2 ? 'active' : ''} onClick={() => setBannerIndex(2)}></button>
                      </div>
                    </div>
                  </div>
                </div>

        {/* Filter bar */}
        {/* <div className="row mb-3 align-items-center">
          <div className="col-md-12">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <span className="text-muted">Sort By</span>
                <div className="d-flex flex-column">
                  <span>Relevance</span>
                  <span>Rating</span>
                  <span>Distance</span>
                </div>
              </div>
              <div className="me-3">
                <button className="btn common_btn">
                  <i className="bi bi-funnel me-1"></i> All Filters
                </button>
              </div>
              <div className="dropdown me-3">
                <button className="btn common_btn dropdown-toggle" type="button" id="sortByDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort by
                </button>
                <ul className="dropdown-menu" aria-labelledby="sortByDropdown">
                  <li><a className="dropdown-item" href="#">Relevance</a></li>
                  <li><a className="dropdown-item" href="#">Rating</a></li>
                  <li><a className="dropdown-item" href="#">Distance</a></li>
                </ul>
              </div>
              <div className="dropdown me-3">
                <button className="btn common_btn dropdown-toggle" type="button" id="revenueDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Annual Revenue
                </button>
                <ul className="dropdown-menu" aria-labelledby="revenueDropdown">
                  <li><a className="dropdown-item" href="#">Any</a></li>
                  <li><a className="dropdown-item" href="#">₹1 Lakh - 20 Lakh</a></li>
                  <li><a className="dropdown-item" href="#">₹20 Lakh - 50 Lakh</a></li>
                  <li><a className="dropdown-item" href="#">₹50 Lakh - 5 Crore</a></li>
                </ul>
              </div>
              <div className="dropdown me-3">
                <button className="btn common_btn dropdown-toggle" type="button" id="businessTypeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Type
                </button>
                <ul className="dropdown-menu" aria-labelledby="businessTypeDropdown">
                  <li><a className="dropdown-item" href="#">Any</a></li>
                  <li><a className="dropdown-item" href="#">Distributor</a></li>
                  <li><a className="dropdown-item" href="#">Manufacturer</a></li>
                  <li><a className="dropdown-item" href="#">Retailer</a></li>
                  <li><a className="dropdown-item" href="#">Exporter</a></li>
                </ul>
              </div>
              <div className="dropdown me-3">
                <button className="btn common_btn dropdown-toggle" type="button" id="ratingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Ratings
                </button>
                <ul className="dropdown-menu" aria-labelledby="ratingsDropdown">
                  <li><a className="dropdown-item" href="#">Any</a></li>
                  <li><a className="dropdown-item" href="#">3.5+</a></li>
                  <li><a className="dropdown-item" href="#">4.0+</a></li>
                  <li><a className="dropdown-item" href="#">4.5+</a></li>
                  <li><a className="dropdown-item" href="#">5.0</a></li>
                </ul>
              </div>
              <div>
                <button className="btn common_btn">
                  <span className="text-muted">HB Verified</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Search results and filters */}
        <div className="row mb-3">
          <div className="col-12">
            <div className="bg-success-subtle border p-2 rounded mb-3">
              <span>Featured Supplier</span>
              <span className="float-end fw-100">200 Results for your search</span>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left sidebar */}
          <div className="col-md-3">
            {/* Ratings filter */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0">Ratings</h6>
              </div>
              <div className="card-body">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="anyRating" />
                  <label className="form-check-label" htmlFor="anyRating">Any</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="rating35" />
                  <label className="form-check-label" htmlFor="rating35">3.5+</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="rating40" />
                  <label className="form-check-label" htmlFor="rating40">4.0+</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="rating45" />
                  <label className="form-check-label" htmlFor="rating45">4.5+</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="rating50" />
                  <label className="form-check-label" htmlFor="rating50">5.0</label>
                </div>
                {/* <button className="btn btn-primary btn-sm w-100 mb-2">Apply</button>
                <button className="btn btn-warning btn-sm w-100" onClick={clearFilters}>Clear Filters</button> */}
              </div>
            </div>

            {/* Business Type filter */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0">Business Type</h6>
              </div>
              <div className="card-body">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="anyType" />
                  <label className="form-check-label" htmlFor="anyType">Any</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="distributor" />
                  <label className="form-check-label" htmlFor="distributor">Distributor</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="manufacturer" />
                  <label className="form-check-label" htmlFor="manufacturer">Manufacturer</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="retailer" />
                  <label className="form-check-label" htmlFor="retailer">Retailer</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="exporter" />
                  <label className="form-check-label" htmlFor="exporter">Exporter</label>
                </div>
                {/* <button className="btn btn-primary btn-sm w-100 mb-2">Apply</button>
                <button className="btn btn-warning btn-sm w-100" onClick={clearFilters}>Clear Filters</button> */}
              </div>
            </div>

            {/* Annual Revenue filter */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0">Annual Revenue</h6>
              </div>
              <div className="card-body">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="anyRevenue" />
                  <label className="form-check-label" htmlFor="anyRevenue">Any</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="revenue1to20" />
                  <label className="form-check-label" htmlFor="revenue1to20">₹1 Lakh - 20 Lakh</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="revenue20to50" />
                  <label className="form-check-label" htmlFor="revenue20to50">₹20 Lakh - 50 Lakh</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="revenue50to5cr" />
                  <label className="form-check-label" htmlFor="revenue50to5cr">₹50 Lakh - 5 Crore</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="revenue5crplus" />
                  <label className="form-check-label" htmlFor="revenue5crplus">₹5 Crore+</label>
                </div>
                {/* <button className="btn btn-primary btn-sm w-100 mb-2">Apply</button>
                <button className="btn btn-warning btn-sm w-100" onClick={clearFilters}>Clear Filters</button> */}
              </div>
            </div>

            {/* Buy Request form */}
            <BuyRequestForm />
          </div>

          {/* Search results */}
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                {searchResults.map(business => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </div>

            {/* Related Keywords */}
            <div className="mt-4">
              <h5>Related Keywords</h5>
              <div className="d-flex flex-wrap">
                {relatedKeywords.map((keyword, index) => (
                  <span key={index} className="badge bg-light text-dark border me-2 mb-2 p-2">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
