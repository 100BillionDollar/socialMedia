// CitiesSlider.js
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

export default function CitiesSlider() {
  const [selectedCity, setSelectedCity] = useState('Mathura');
  
  // Sample cities data - replace with your actual data
  const cities = [
    { name: 'All', icon: '/assets/images/allcategpry.png' },
    { name: 'Ayodhya', icon: '/assets/images/ayodhya.png' },
    { name: 'Bhopal', icon: '/assets/images/bhopal.png' },
    { name: 'Varanasi', icon: '/assets/images/varanasi.png' },
    { name: 'Prayagraj', icon: '/assets/images/ayodhya.png' },
    { name: 'Mathura', icon: '/assets/images/mathura.png' },
    { name: 'Vrindavan', icon: '/assets/images/ayodhya.png' },
    { name: 'Gorakhpur', icon: '/assets/images/ayodhya.png' },
    { name: 'Ujjain', icon: '/assets/images/ayodhya.png' },
    { name: 'Indore', icon: '/assets/images/ayodhya.png' },
    { name: 'Haridwar', icon: '/assets/images/ayodhya.png' },
    { name: 'Rishikesh', icon: '/assets/images/ayodhya.png' },
    { name: 'Dehradun', icon: '/assets/images/ayodhya.png' },
    { name: 'Manaskhanda', icon: '/assets/images/ayodhya.png' },
    { name: 'Sidhpeeth', icon: '/assets/images/ayodhya.png' },
  ];

  return (
    <div className="mt-5">
      <Swiper
        modules={[FreeMode, Scrollbar]}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        scrollbar={{
          hide: false,
          draggable: true
        }}
        className="mySwiper pb-4"
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index} style={{ width: 'auto', minWidth: '80px' }}>
            <div
              className={`d-flex flex-column align-items-center cursor-pointer ${
                selectedCity === city.name ? 'position-relative' : ''
              }`}
              onClick={() => setSelectedCity(city.name)}
            >
              <div
                className={`rounded-3 overflow-hidden mb-2 ${
                  selectedCity === city.name ? 'border border-2' : ''
                }`}
                style={{ color: "#e5484d" }}
              >
                <img
                  src={city.icon}
                  alt={city.name}
                  width={64}
                  height={64}
                  className="img-fluid"
                />
              </div>
              <span className="small text-center">{city.name}</span>
              {selectedCity === city.name && (
                <div className="position-absolute bottom-0 start-50 translate-middle">
                  <div
                    className="bg_primary"
                    style={{ height: '3px', width: '40px', marginTop: '2px' }}
                  ></div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom styles for Swiper scrollbar - add this to your CSS */}
      <style jsx global>{`
        .swiper-scrollbar {
          background: rgba(0, 0, 0, 0.1);
          height: 4px !important;
          bottom: 0 !important;
        }
        .swiper-scrollbar-drag {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}