// TestimonialSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TestimonialSlider() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      title: 'Mahamrityunjaya Yantra',
      content: "My father's health was deteriorating until we placed the Hindu Mandir Puja Mahamrityunjaya Yantra near his bed, which helped stabilize his condition.",
      rating: 5,
      user: 'Nisha Kothari',
      via: null,
      icon: '/assets/images/whatsapp.svg',
      logo: '/assets/images/man.png'
    },
    {
      id: 2,
      title: 'Prasad Delivery',
      content: "The prasad delivery service is amazing. I received the sacred prasad from Kashi Vishwanath temple within 3 days. Very satisfied with the service.",
      rating: 5,
      user: 'Rajesh Kumar',
      via: 'Google',
      icon: '/assets/images/google.svg',
      logo: '/assets/images/man.png'
    },
    {
      id: 3,
      title: 'Online Puja',
      content: "Being away from India, the online puja service helped me stay connected with our traditions. The live streaming was crystal clear.",
      rating: 5,
      user: 'Priya Sharma',
      via: 'Facebook',
      icon: '/assets/images/facebook.svg',
      logo: '/assets/images/man.png'
    },
    {
      id: 4,
      title: 'Temple Yantra',
      content: "My father's health was deteriorating until we placed the Hindu Mandir Puja Yantra near his bed, which helped stabilize his condition.",
      rating: 5,
      user: 'Amit Singh',
      via: 'WhatsApp',
      icon: '/assets/images/whatsapp.svg',
      logo: '/assets/images/man.png'
    },
    {
      id: 5,
      title: 'Temple Yantra',
      content: "My father's health was deteriorating until we placed the Hindu Mandir Puja Yantra near his bed, which helped stabilize his condition.",
      rating: 5,
      user: 'Amit Singh',
      via: 'WhatsApp',
      icon: '/assets/images/whatsapp.svg',
      logo: '/assets/images/man.png'
    },
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="text-warning">★</span>
      );
    }
    return stars;
  };

  return (
    <div className="py-5 mt-5" style={{ background: '#FEF6F0' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#F15A22' }}>
            Happy Devotees Corner 
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="testimonial-swiper pb-5"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                      <img 
                        src={item.logo} 
                        alt={item.title}
                        width={40}
                        height={40}
                        layout="responsive"
                      />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-semibold">{item.title}</h5>
                    </div>
                  </div>
                  
                  <p className="card-text small text-muted mb-4">
                    {item.content}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div>
                      <div className="mb-1">
                        {renderStars(item.rating)}
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle overflow-hidden me-2" style={{ width: '30px', height: '30px', position: 'relative' }}>
                          <img 
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.user)}&background=random`} 
                            alt={item.user}
                            width={30}
                            height={30}
                            layout="responsive"
                          />
                        </div>
                        <span className="small fw-medium">{item.user}</span>
                      </div>
                    </div>
                    
                    {item.via && (
                      <div className="d-flex align-items-center">
                        {/* <small className="text-muted me-1">Via @</small> */}
                        <div style={{ width: '30px', height: '30px', position: 'relative' }}>
                          <img 
                            src={item.icon} 
                            alt={item.via}
                            width={30}
                            height={30}
                            layout="responsive"
                          />
                        </div>
                        {/* <small className="text-muted ms-1">{item.via}</small> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Bottom navigation dots/buttons */}
        
      </div>
      
      {/* Custom styles for Swiper and cards */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background-color: #F15A22;
        }
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #F15A22;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .card {
          border-radius: 12px;
          height: 100%;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}