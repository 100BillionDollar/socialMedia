// pages/index.js
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogDetail() {
  return (
    <div>
      <Head>
        <title>Trending Web & Landing Page Designs in 2023</title>
        <meta name="description" content="Discover the latest web design trends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            {/* Main Content */}
            <div className="mb-4">
              <div class="pills-container">Latest</div>
              <h1 className="mb-4">Trending web & landing page designs in 2023</h1>
              
              <div className="position-relative mb-4">
                <img 
                  src="/assets/images/design.jpg" 
                  alt="People walking with bicycle" 
                  className="img-fluid rounded"
                />
                <div className="position-absolute bottom-0 start-0 p-3 text-white d-flex align-items-center">
                  <span className="me-2">By John Smith</span>
                  <span className="me-2">•</span>
                  <span>4 min read</span>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <span className="badge bg-light text-dark me-2">Article</span>
                <span className="text-muted small">Last updated: July 8, 2023</span>
              </div>
              
              <h5 className="mb-3">List of Advance Features and Support with Goodup</h5>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              
              <div className="bg-light p-4 mb-4 rounded">
                <blockquote className="blockquote mb-0">
                  <p className="fs-5 fst-italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    <cite title="Source Title">John M. McNeil</cite>
                  </footer>
                </blockquote>
              </div>
              
              <div className="bg-light p-4 mb-4 rounded">
                <blockquote className="blockquote mb-0">
                  <p className="fs-5 fst-italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    <cite title="Source Title">Dr. A. Morton</cite>
                  </footer>
                </blockquote>
              </div>
              
              <hr className="my-5" />
              
              <div className="mb-5">
                <h4 className="mb-4">04 Comments</h4>
                
                <div className="d-flex mb-4">
                  <img 
                    src="/assets/images/man.png" 
                    alt="Profile" 
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-1">Edward R. McNeil</h6>
                    <p className="text-muted small mb-2">June 23, 2023</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                
                {/* More comments would go here */}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            {/* Sidebar */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Search</h5>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <button className="btn btn-primary" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Categories</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Design
                    <span className="badge btn-primary   rounded-pill">8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Travel
                    <span className="badge btn-primary   rounded-pill">12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Food
                    <span className="badge btn-primary   rounded-pill">5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Branding
                    <span className="badge btn-primary   rounded-pill">7</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Trending Posts</h5>
                
                <div className="d-flex mb-3">
                  <img 
                    src="/assets/images/design.jpg" 
                    alt="Beach in California" 
                    className="rounded object-fit-cover me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h6 className="mb-1">Top 10 beautiful beaches in California</h6>
                    <p className="text-muted small mb-0">June 8, 2023</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <img 
                    src="/assets/images/lifestyle.jpg" 
                    alt="Business setup" 
                    className="rounded object-fit-cover me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h6 className="mb-1">How to get success in your hotel?</h6>
                    <p className="text-muted small mb-0">May 12, 2023</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <img 
                    src="/assets/images/technologies__1.jpg" 
                    alt="Design blog" 
                    className="rounded object-fit-cover me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h6 className="mb-1">10 tips to choose design for blog</h6>
                    <p className="text-muted small mb-0">April 25, 2023</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <img 
                    src="/assets/images/food_1.jpg" 
                    alt="Real estate" 
                    className="rounded object-fit-cover me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h6 className="mb-1">How to choose about real bond before buying?</h6>
                    <p className="text-muted small mb-0">March 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Tags Cloud</h5>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Design</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Branding</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Travel</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Food</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Fashion</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Lifestyle</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Interior</a>
                  <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}