// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    mobile: '',
    city: ''
  });
  const [bannerIndex, setBannerIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Use effect to handle component mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', mobile: '', city: '' };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    
    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
      valid = false;
    }
    
    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    } else if (formData.city.trim().length < 2) {
      newErrors.city = 'Enter a valid city name';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      // Here you would typically send the data to an API
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', mobile: '', city: '' });
      }, 3000);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  // Carousel control functions
  const handlePrevBanner = () => {
    setBannerIndex(prev => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextBanner = () => {
    setBannerIndex(prev => (prev === 2 ? 0 : prev + 1));
  };

  // Hospital categories for the sidebar
  const hospitalCategories = [
    "Hospitals",
    "Children Hospitals",
    "ENT Hospitals",
    "Eye Hospitals",
    "Maternity Hospitals",
    "Mental Hospitals",
    "Multispeciality Hospitals",
    "Private Hospitals",
    "Public Hospitals",
    "Veterinary Hospitals"
  ];

  // New companies data
  const newCompanies = [
    "Vidarbha allied industries",
    "Sr lab instrument",
    "Zhejiang tianti rubber & plastic co",
    "volkschem crop science pvt ltd",
    "Aksha development research"
  ];

  // Return null during SSR
  if (!mounted) {
    return null; // Return null on server-side rendering
  }

  return (
    <>
   
        <style>{`
          .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
          .form-control.is-invalid {
            border-color: #dc3545;
            padding-right: calc(1.5em + 0.75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(0.375em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
          }
          .success-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1050;
            animation: fadeInOut 3s ease-in-out;
          }
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
     
      <div className="container px-4 py-3">
        {/* Success Alert */}
        {formSubmitted && (
          <div className="alert alert-success success-alert" role="alert">
            Request submitted successfully!
          </div>
        )}
        
        {/* Header/Navbar */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div></div>
            <button className="btn btn-outline-secondary rounded-pill d-flex align-items-center">
              Download App
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download ms-1" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div id="mainBanner" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${bannerIndex === 0 ? 'active' : ''}`}>
                  <div className="text-center">
                      <Image
                      src="/assets/images/banner_cart.jpg"
                      width={300}
                      height={300}
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className={`carousel-item ${bannerIndex === 1 ? 'active' : ''}`}>
                  <div className="bg-light text-center p-5 rounded">
                  <Image
                      src="/assets/images/banner_cart.jpg"
                      width={300}
                      height={300}
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className={`carousel-item ${bannerIndex === 2 ? 'active' : ''}`}>
                  <div className="bg-light text-center p-5 rounded">
                  <Image
                      src="/assets/images/banner_cart.jpg"
                      width={300}
                      height={300}
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-indicators position-relative mt-2">
                <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className={bannerIndex === 0 ? 'active' : ''} onClick={() => setBannerIndex(0)}></button>
                <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" className={bannerIndex === 1 ? 'active' : ''} onClick={() => setBannerIndex(1)}></button>
                <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" className={bannerIndex === 2 ? 'active' : ''} onClick={() => setBannerIndex(2)}></button>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <span className="text-white bg-success px-3 py-1 rounded">Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="text-white bg-warning px-3 py-1 rounded">Construction & Decoration</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Sidebar - Hospital Categories */}
          <div className="col-md-6 col-lg-7">
            <div className="list-group mb-4">
              {hospitalCategories.map((category, index) => (
                <Link 
                  href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={index}
                >
                  <span className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    {category}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Form and New Companies */}
          <div className="col-md-6 col-lg-5">
            {/* Buy Request Form */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Buy Request for</h5>
                <h6 className="card-subtitle mb-4 text-primary">"Construction & Decoration"</h6>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                      placeholder="Name*"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <input 
                      type="tel" 
                      className={`form-control ${formErrors.mobile ? 'is-invalid' : ''}`}
                      placeholder="Mobile Number*"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.mobile && <div className="error-message">{formErrors.mobile}</div>}
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                      placeholder="City*"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.city && <div className="error-message">{formErrors.city}</div>}
                  </div>
                  <button type="submit" className="btn w-100 py-2" style={{backgroundImage: 'linear-gradient(to right, #9fd649, #64c28d)'}}>
                    <span className="text-white">Submit</span>
                  </button>
                </form>
              </div>
            </div>

            {/* New Companies Section */}
            <div className="card">
              <div className="card-header bg-light">
                <h6 className="mb-0">New Companies on Happening Bazar</h6>
              </div>
              <ul className="list-group list-group-flush">
                {newCompanies.map((company, index) => (
                  <li key={index} className="list-group-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right me-1" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}