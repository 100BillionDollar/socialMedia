
"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPlugCircleBolt } from "@fortawesome/free-solid-svg-icons";

export default function StoriesSlider() {
  const [stories, setStories] = useState([
    { id: 1, name: "James J. Smith", time: "10 mins ago", image: "/assets/images/stories_img1.jpg" },
    { id: 2, name: "Amanda Jordan", time: "20 mins ago", image: "/assets/images/event_img1.jpg" },
    { id: 3, name: "Kevin J. Nate", time: "30 mins ago", image: "/assets/images/stories_img2.jpg" },
    { id: 4, name: "Rachel A. Nate", time: "40 mins ago", image: "/assets/images/event_img2.jpg" },
    { id: 5, name: "Kendall J. Nate", time: "50 mins ago", image: "/assets/images/post_img.jpg" },
  ]);

  const [selectedStory, setSelectedStory] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleAddStory = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const newStory = {
      id: Date.now(),
      name: "You",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      image: URL.createObjectURL(file),
    };

    setStories((prevStories) => [newStory, ...prevStories]);
    event.target.value = null;
  };

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setProgress(0);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleCloseStory();
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
    setProgress(0);
  };

  return (
    <div className="mb-3">
      <Swiper modules={[Navigation]} navigation spaceBetween={8} slidesPerView={4.5} className="stories-slider">
        <SwiperSlide>
          <div className="story-item add-story" onClick={() => document.getElementById("upload-story").click()}>
            <label htmlFor="upload-story" className="upload-btn">
              <div className="add-icon"> <FontAwesomeIcon icon={faCirclePlus} /></div>
              <p>Create Story</p>
            </label>
            <input type="file" id="upload-story" accept="image/*" onChange={handleAddStory} style={{ display: "none" }} />
          </div>
        </SwiperSlide>
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="story-item" onClick={() => handleViewStory(story)}>
              <span className="stories_logo">
                <Image
                          src="/assets/images/stories_img1.jpg"
                          alt="Profile"
                          className="rounded-circle"
                          width={43}
                          height={43}
                        /></span>
              <Image src={story.image} alt="Story" width={134} height={202} className="story-image" />
              <div className="story-username">{story.name}</div>
              <div className="story-time">{story.time}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedStory && (
        <div className="story-modal" onClick={handleCloseStory}>
          <div className="story-content">
            <Image src={selectedStory.image} alt="Story" layout="fill" objectFit="cover" priority />
            <div className="story-info">
              <h6>{selectedStory.name}</h6>
              <p>{selectedStory.time}</p>
            </div>
            <div className="story-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .story-item {
          cursor: pointer;
          text-align: center;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .add-story {
          background: #f0f0f0;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 202px;
          cursor: pointer;
        }
        .add-icon {
          font-size: 24px;
          font-weight: bold;
        }
        .upload-btn {
          text-align: center;
          cursor: pointer;
        }
        .story-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .story-content {
          position: relative;
          width: 80%;
          max-width: 500px;
          height: 80vh;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .story-info {
          position: absolute;
          top: 20px;
          left: 20px;
          color: white;
        }
        .story-progress {
          position: absolute;
          top: 10px;
          left: 10%;
          width: 80%;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .progress-bar {
          height: 100%;
          background: #fff;
          transition: width 0.1s linear;
        }
      `}</style>
    </div>
  );
}