import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PujaCards = () => {
  // Puja card data
  const pujaCards = [
    {
      id: 1,
      image: "/assets/images/puja_1.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    },
    {
      id: 2,
      image: "/assets/images/puja_2.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    },
    {
      id: 3,
      image: "/assets/images/puja_3.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    },
    {
      id: 1,
      image: "/assets/images/puja_1.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    },
    {
      id: 2,
      image: "/assets/images/puja_2.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    },
    {
      id: 3,
      image: "/assets/images/puja_3.jpg",
      alt: "Guru Purnima Vishesh Puja",
      title: "विशेष पूजा",
      description: "Guru Purnima Vishesh Puja"
    }
  ];

  return (
    <div className="puja-slider-container">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="puja-swiper"
      >
        {pujaCards.map((card,index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 overflow-hidden rounded-3 h-full">
              <div className="position-relative">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="img-fluid w-full"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between"
                  style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'}}
                >
                  <div className="text-white rounded-5 px-2 py-1  d-inline-block">
                    <small>गुरुवार</small>
                  </div>
                  <div className="text-white">
                    <h5 className="mb-1">{card.title}</h5>
                    <p className="mb-1">{card.description}</p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-3 rounded text-sm mt-2">
                      BOOK PUJA NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom swiper styles */}
      <style jsx global>{`
        .puja-swiper {
          padding-bottom: 40px;
        }
        .puja-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #aaa;
          opacity: 0.5;
        }
        .puja-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--primary-color);
        }
        .puja-swiper .swiper-button-next,
        .puja-swiper .swiper-button-prev {
          color: var(--primary-color);
          background: rgba(255, 255, 255, 0.5);
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .puja-swiper .swiper-button-next:after,
        .puja-swiper .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PujaCards;