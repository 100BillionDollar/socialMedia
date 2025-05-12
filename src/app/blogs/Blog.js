// pages/blog.js
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = () => {
 const blogCategories = [
    { name: 'All', image: '/assets/images/technologies__1.jpg'  },
    { name: 'Technology', image: '/assets/images/technologies__1.jpg' },
    { name: 'Design', image: '/assets/images/design.jpg' },
    { name: 'Lifestyle', image: '/assets/images/lifestyle.jpg' },
    { name: 'Food', image: '/assets/images/food_1.jpg' },
    { name: 'Lifestyle', image: '/assets/images/lifestyle.jpg' },
    { name: 'Food', image: '/assets/images/food_1.jpg' },
    { name: 'Health', image: '/assets/images/health.jpg' },
        { name: 'Health', image: '/assets/images/health.jpg' },

    { name: 'Health', image: '/assets/images/health.jpg' },
    { name: 'Food', image: '/assets/images/food_1.jpg' },
      { name: 'Technology', image: '/assets/images/technologies__1.jpg' },

  ];

  const blogArticles = [
    {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
     {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
      {
      id: 1,
      title: 'Exploring Modern Design Trends',
      excerpt: 'A deep dive into the latest design innovations and trends...',
      image: '/assets/images/design.jpg',
      date: 'May 10, 2025',
      category: 'Design'
    },
   
  ];

  return (
    <div className="container-fluid">
      <Head>
        <title>Blog | Your Website</title>
        <meta name="description" content="Latest blog articles and insights" />
      </Head>

      {/* Purple Header */}
      <div className="row mt-4 position-relative text-white  mb-4">
        <div className="col text-center">
            <div className='blog_banner'>
          <h1 className='m-0'>Blog</h1>
          </div>
          <div className='blog_search_container'>
            <img src="/assets/images/search.png" alt="search"/>
            <input type="text" placeholder='Search'/>
          </div>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="container mt-5 pt-4">
        <div className="row mb-4">
          <div className="col-12">
            <h3 className='mb-4'>Blog Categories</h3>
            <div className="cat_card_container_blog row row-cols-lg-6">
              {blogCategories.map((category, index) => (
            <div className='col'>
                <div class="cat_item position-relative">
                        <figure>
                        <img src={category.image} alt='' className='w-100 rounded' width={'200'}/>                                       
                        <div className='position-absolute d-flex justify-content-between caption bg-white'>
                          
                          {category.name}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#000000"/>
                        </svg>
                          </div>
                        </figure>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="row g-4 latest_aticles pt-4">
          <h2>Latest Articles</h2>
          <p className='small m-0 text-muted'>Discover the most outstanding articles in all topics of life.</p>
          {blogArticles.map((article) => (
            <div key={article.id} className="col-md-4 col-sm-6">
              <div className="card h-100">
                <img 
                  src={article.image} 
                  className="card-img-top" 
                  alt={article.title}
                />
                <div className="card-body">
                  <div className="flex-container justify-content-between d-flex mb-4">
                  <div className='pills-container'>Marketing</div>
                  <ul className='p-0 d-flex m-0'>
                    <li className='d-flex gap-1 me-3 align-items-center'><img src="/assets/images/eye.svg" height={"20"} alt="eye icon"/><small>10k views</small></li>
                      <li className='d-flex gap-1 align-items-center'><img src="/assets/images/clock.svg" height={"20"} alt="eye icon"/><small>10 july 2021</small>  </li>
                  </ul>
                         </div>
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-muted">{article.excerpt}</p>
           
                </div>
                <div className="card-footer align-items-center bg-transparent d-flex justify-content-between">
                  <small className='fw-bold'>CONTINUE READING</small>
                  <span className=""><svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#e5484d"></path></svg></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-start">
            <nav>
              <ul className="pagination  gap-4">
                <li className="page-item">
                  <a href="" className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">2</a>
                </li>
                 <li className="page-item">
                  <a href="#" className="page-link">...</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">5</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;