// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faPhone, faShareNodes, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {  
  return (
    <>
      <Head>
        <title>Arthros Multispeciality Hospital</title>
        <meta name="description" content="Arthros Multispeciality Hospital in Indore" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <div className="container mt-4">
        {/* Hospital Header */}
        <div className="row mb-3">
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-2">
              <h2 className="mb-0">Arthros Multispeciality Hospital</h2>
              <span className="ms-2 badge bg-success">
                <FontAwesomeIcon icon={faStar} /> 4.3
              </span>
              <span className="ms-2 text-muted small">120 Reviews</span>
            </div>
            <p className="text-muted mb-1">328/2/4/1 Dargah Bypass, Link Road, Link Roadnr 9 Road, Khajrana, Indore - 452018b</p>
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">
                <span className="badge bg-light text-dark border">Opens</span>
                <span className="text-muted ms-1">·</span>
                <span className="text-muted ms-1">Closes 6:30 pm</span>
              </span>
              <button className="btn btn-outline-primary btn-sm ms-3">Follow</button>
            </div>
            <div className="d-flex">
              <span className="me-3">100 likes</span>
              <span>250 followers</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <button className="btn btn-success me-2">
              <FontAwesomeIcon icon={faPhone} className="me-1" /> Mobile Number
            </button>
            <button className="btn btn-warning me-2">Get Best Price</button>
            <button className="btn btn-primary me-2">Send Enquiry</button>
            <button className="btn btn-outline-secondary me-2">
              <FontAwesomeIcon icon={faLocationDot} className="me-1" /> Direction
            </button>
            <button className="btn btn-outline-secondary me-2">
              <FontAwesomeIcon icon={faShareNodes} className="me-1" /> Share
            </button>
            <button className="btn btn-outline-secondary">Reviews</button>
          </div>
        </div>

        {/* Hospital Images */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="bg-light border" style={{ height: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p className="text-muted">Main Image</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light border mb-2" style={{ height: "135px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p className="text-muted">Image 2</p>
            </div>
            <div className="bg-secondary text-white" style={{ height: "135px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p>+30 More</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          {/* Left Content */}
          <div className="col-md-8">
            {/* About Section */}
            <div className="mb-4">
              <p>Johntech focuses on the AIoT and big data applications of smart logistics, and is committed to becoming a leading global provider and operator of mobile asset management solutions, particularly offering global solutions for logistics equipment that carries... <a href="#">more</a></p>
            </div>

            {/* Company Information */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Company CEO</h6>
                    <p className="card-text">Ankit Agarwal</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Year of Establishment</h6>
                    <p className="card-text">2025</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Nature of Business</h6>
                    <p className="card-text">Distributor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GST Information */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Business GSTIN Number</h6>
                    <p className="card-text">08CYJPA3301H2V</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">GST Legal Status</h6>
                    <p className="card-text">Private Limited Company</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Business GST Turnover</h6>
                    <p className="card-text">10 L - 50 L</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Number of Employees</h6>
                    <p className="card-text">Upto 10</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Payment Mode</h6>
                    <p className="card-text">Debit Card, Credit Card, UPI, IMPS, RTGS</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Banker Name</h6>
                    <p className="card-text">State Bank of India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-4">
              <h4>Frequently Asked Questions</h4>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      1. Are Sleepwell mattresses good?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, Sleepwell manufactures the best quality mattresses that promise comfort and quality sleep.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      2. Where can I get the best quality Sleepwell mattress in Thane?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      There are many Mattress Dealers- Sleepwell in the city where you can get mattresses and other products like quilts and blankets by Sleepwell.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      3. Can I wash the Sleepwell mattress?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, Sleepwell mattresses are washable. You can easily wash mattresses at home.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      4. Does Refresh Mattress also provide quilts and blankets?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Sleepwell dealers provide all products like quilts and blankets. You can also call and confirm Refresh Mattress for the availability of the product you need.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      5. Are there any Sleepwell mattress dealers in Thane?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Refresh Mattress is one of the highly recommended Sleepwell dealers in Thane. It is located in Mira Road East 8 K Avenue.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <button className="btn btn-outline-primary w-100 mb-2">
                  <FontAwesomeIcon icon={faPhone} className="me-1" /> Mobile Number
                </button>
                <button className="btn btn-outline-primary w-100 mb-2">Send Enquiry</button>
                <button className="btn btn-outline-secondary w-100 mb-2">Share</button>
                <button className="btn btn-outline-secondary w-100 mb-2">Review Business</button>
                <a href="#" className="btn btn-outline-secondary w-100 mb-2 d-flex justify-content-between align-items-center">
                  Visit Website <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <button className="btn btn-outline-secondary w-100">Follow</button>
              </div>
            </div>

            {/* Map Section */}
            <div className="card mb-4">
              <div className="card-header bg-light">Direction</div>
              <div className="card-body p-0">
                <div className="bg-light" style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p className="text-muted">Map</p>
                </div>
                <div className="p-3">
                  <p className="small">328/2/4/1 Dargah Bypass, Link Road, Link Roadnr 9 Road, Khajrana, Indore - 452018b</p>
                  <div className="d-flex">
                    <button className="btn btn-outline-secondary btn-sm me-2">Direction</button>
                    <button className="btn btn-outline-secondary btn-sm">Copy</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="card mb-4">
              <div className="card-header bg-light text-center">
                Buy Request for
                <p className="mb-0 text-primary">"Construction & Decoration"</p>
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
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>

            {/* Report Issue Button */}
            <button className="btn btn-danger w-100">Report Issue</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .badge.bg-success {
          background-color: #28a745 !important;
        }
        .text-muted {
          color: #6c757d !important;
        }
      `}</style>
    </>
  );
}