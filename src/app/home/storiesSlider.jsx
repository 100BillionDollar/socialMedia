"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCirclePlus, 
  faThumbsUp, 
  faHeart, 
  faLaugh, 
  faComment, 
  faPaperPlane, 
  faTimes,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"

export default function EnhancedStoriesSlider() {
  const [stories, setStories] = useState([
    { 
      id: 1, 
      name: "James J. Smith", 
      time: "10 mins ago", 
      media: [
        "/assets/images/stories_img1.jpg",
        "/assets/images/event_img1.jpg"
      ],
      reactions: { likes: 12, hearts: 5, laughs: 3 },
      comments: [
        { id: 101, user: "Sarah Wilson", text: "Amazing photo!", time: "5 mins ago" },
        { id: 102, user: "Mike Johnson", text: "Where is this place?", time: "3 mins ago" }
      ]
    },
    { 
      id: 2, 
      name: "Amanda Jordan", 
      time: "20 mins ago", 
      media: [
        "/assets/images/event_img1.jpg", 
        "/assets/images/stories_img2.jpg",
        "/assets/images/stories_img1.jpg"
      ],
      reactions: { likes: 24, hearts: 18, laughs: 7 },
      comments: [
        { id: 201, user: "David Chen", text: "Love the second photo!", time: "15 mins ago" }
      ]
    },
    { 
      id: 3, 
      name: "Kevin J. Nate", 
      time: "30 mins ago", 
      media: [
        "/assets/images/stories_img2.jpg",
        "/assets/images/event_img1.jpg"
      ],
      reactions: { likes: 8, hearts: 2, laughs: 0 },
      comments: []
    },
    { 
      id: 4, 
      name: "James J. Smith", 
      time: "10 mins ago", 
      media: [
        "/assets/images/event_img1.jpg",
        "/assets/images/stories_img1.jpg",
        "/assets/images/stories_img2.jpg"
      ],
      reactions: { likes: 17, hearts: 9, laughs: 5 },
      comments: [
        { id: 401, user: "Lisa Thompson", text: "Great shot!", time: "8 mins ago" }
      ]
    },
    { 
      id: 5, 
      name: "Kevin J. Nate", 
      time: "30 mins ago", 
      media: [
        "/assets/images/stories_img2.jpg",
        "/assets/images/event_img1.jpg"
      ],
      reactions: { likes: 8, hearts: 2, laughs: 0 },
      comments: []
    },
  ]);

  const [selectedStory, setSelectedStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [userReaction, setUserReaction] = useState(null);

  useEffect(() => {
    if (selectedStory !== null) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            handleNextMedia();
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [selectedStory, currentMediaIndex]);

  const handleAddStory = (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newStory = {
      id: Date.now(),
      name: "You",
      time: "Just now",
      media: [...Array.from(files)].map((file) => URL.createObjectURL(file)),
      reactions: { likes: 0, hearts: 0, laughs: 0 },
      comments: []
    };

    setStories((prevStories) => [newStory, ...prevStories]);
    event.target.value = null;
  };

  const handleViewStory = (index) => {
    setSelectedStory(stories[index]);
    setCurrentIndex(index);
    setCurrentMediaIndex(0);
    setShowComments(false);
    setUserReaction(null);
  };

  const handleModalClick = (event) => {
    // Close the modal when clicking on the overlay
    if (event.target.classList.contains('story-modal')) {
      handleCloseStory();
    }
  };

  const handleContentClick = (event) => {
    // Prevent clicks on the content from closing the modal
    event.stopPropagation();
    
    // Only proceed to next media if not showing comments
    if (!showComments) {
      handleNextMedia();
    }
  };

  const handleNextMedia = (event) => {
    if (event) event.stopPropagation();
    
    if (currentMediaIndex < selectedStory.media.length - 1) {
      setCurrentMediaIndex((prev) => prev + 1);
    } else {
      handleNextStory();
    }
  };

  const handlePrevMedia = (event) => {
    if (event) event.stopPropagation();
    
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex((prev) => prev - 1);
    }
  };

  const handleNextStory = () => {
    if (currentIndex < stories.length - 1) {
      handleViewStory(currentIndex + 1);
    } else {
      handleCloseStory();
    }
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
    setProgress(0);
    setCurrentIndex(null);
    setShowComments(false);
  };

  const handleReaction = (type, event) => {
    event.stopPropagation();
    
    setStories(prevStories => 
      prevStories.map(story => {
        if (story.id === selectedStory.id) {
          const updatedReactions = { ...story.reactions };
          
          // If already reacted with this type, remove it
          if (userReaction === type) {
            updatedReactions[type] -= 1;
            setUserReaction(null);
          } 
          // If reacted with different type, update both
          else if (userReaction) {
            updatedReactions[userReaction] -= 1;
            updatedReactions[type] += 1;
            setUserReaction(type);
          } 
          // First reaction
          else {
            updatedReactions[type] += 1;
            setUserReaction(type);
          }
          
          return {
            ...story,
            reactions: updatedReactions
          };
        }
        return story;
      })
    );
    
    // Also update selected story
    setSelectedStory(prev => {
      if (!prev) return null;
      
      const updatedReactions = { ...prev.reactions };
      if (userReaction === type) {
        updatedReactions[type] -= 1;
      } else if (userReaction) {
        updatedReactions[userReaction] -= 1;
        updatedReactions[type] += 1;
      } else {
        updatedReactions[type] += 1;
      }
      
      return {
        ...prev,
        reactions: updatedReactions
      };
    });
  };

  const toggleComments = (event) => {
    event.stopPropagation();
    setShowComments(!showComments);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      user: "You",
      text: commentText,
      time: "Just now"
    };

    setStories(prevStories => 
      prevStories.map(story => {
        if (story.id === selectedStory.id) {
          return {
            ...story,
            comments: [...story.comments, newComment]
          };
        }
        return story;
      })
    );

    // Also update selected story
    setSelectedStory(prev => ({
      ...prev,
      comments: [...prev.comments, newComment]
    }));

    setCommentText("");
  };

  const renderMediaIndicators = () => {
    if (!selectedStory) return null;
    
    return (
      <div className="media-indicators">
        {selectedStory.media.map((_, index) => (
          <div 
            key={index} 
            className={`indicator ${index === currentMediaIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mb-3">
      <Swiper modules={[Navigation]} navigation spaceBetween={8} slidesPerView={4.5} className="stories-slider">

        {stories.map((story, index) => (
          <SwiperSlide key={story.id}>
            <div className="story-item" onClick={() => handleViewStory(index)}>
              <Image src={story.media[0]} alt="Story" width={134} height={202} className="story-image" />
              {story.media.length > 1 && (
                <div className="multi-image-badge">+{story.media.length}</div>
              )}
              <div className="story-username">{story.name}</div>
              <div className="story-time">{story.time}</div>
              <div className="story-stats">
                <span className="story-comments">
                  <FontAwesomeIcon icon={faComment} /> {story.comments.length}
                </span>
                <span className="story-reactions">
                  <FontAwesomeIcon icon={faThumbsUp} /> {story.reactions.likes + story.reactions.hearts + story.reactions.laughs}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedStory && (
        <div className="story-modal" onClick={handleModalClick}>
          <div className="story-content" onClick={handleContentClick}>
            <Image src={selectedStory.media[currentMediaIndex]} alt="Story" layout="fill" objectFit="cover" priority />
            
            {/* Media navigation buttons */}
            {selectedStory.media.length > 1 && (
              <>
                {currentMediaIndex > 0 && (
                  <button className="nav-btn prev-btn" onClick={handlePrevMedia}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                )}
                {currentMediaIndex < selectedStory.media.length - 1 && (
                  <button className="nav-btn next-btn" onClick={handleNextMedia}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                )}
                {renderMediaIndicators()}
              </>
            )}
            
            <div className="story-info">
              <h6>{selectedStory.name}</h6>
              <p>{selectedStory.time}</p>
            </div>
            <div className="story-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="story-actions" onClick={(e) => e.stopPropagation()}>
              <div className="reaction-buttons">
                <button 
                  className={`reaction-btn ${userReaction === 'likes' ? 'active' : ''}`} 
                  onClick={(e) => handleReaction('likes', e)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} /> {selectedStory.reactions.likes}
                </button>
                <button 
                  className={`reaction-btn ${userReaction === 'hearts' ? 'active' : ''}`}
                  onClick={(e) => handleReaction('hearts', e)}
                >
                  <FontAwesomeIcon icon={faHeart} /> {selectedStory.reactions.hearts}
                </button>
                <button 
                  className={`reaction-btn ${userReaction === 'laughs' ? 'active' : ''}`}
                  onClick={(e) => handleReaction('laughs', e)}
                >
                  <FontAwesomeIcon icon={faLaugh} /> {selectedStory.reactions.laughs}
                </button>
                <button className="comment-btn" onClick={toggleComments}>
                  <FontAwesomeIcon icon={faComment} /> {selectedStory.comments.length}
                </button>
              </div>
            </div>
            
            {showComments && (
              <div className="comments-panel" onClick={(e) => e.stopPropagation()}>
                <div className="comments-header">
                  <h6>Comments ({selectedStory.comments.length})</h6>
                  <button className="close-btn" onClick={toggleComments}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                
                <div className="comments-list">
                  {selectedStory.comments.length > 0 ? (
                    selectedStory.comments.map(comment => (
                      <div key={comment.id} className="comment-item">
                        <div className="comment-user">{comment.user}</div>
                        <div className="comment-text">{comment.text}</div>
                        <div className="comment-time">{comment.time}</div>
                      </div>
                    ))
                  ) : (
                    <div className="no-comments">No comments yet. Be the first to comment!</div>
                  )}
                </div>
                
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            )}
          </div>
          
          <button className="close-modal" onClick={handleCloseStory}>✕</button>
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
        .multi-image-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.6);
          color: white;
          border-radius: 20px;
          padding: 2px 8px;
          font-size: 12px;
        }
        .story-stats {
          position: absolute;
          bottom: 5px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          color: white;
          background: rgba(0,0,0,0.5);
          padding: 2px 0;
          font-size: 12px;
        }
        .add-story { 
          background: #f0f0f0; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          height: 202px; 
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
          border-radius: 10px;
          overflow: hidden;
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
        .story-actions {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        }
        .reaction-buttons {
          background: rgba(0,0,0,0.5);
          border-radius: 30px;
          padding: 8px 15px;
          display: flex;
          gap: 15px;
        }
        .reaction-btn, .comment-btn {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .reaction-btn.active {
          color: #3578E5;
        }
        .close-modal {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 18px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prev-btn {
          left: 15px;
        }
        .next-btn {
          right: 15px;
        }
        .media-indicators {
          position: absolute;
          top: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 5px;
        }
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
        }
        .indicator.active {
          background: white;
        }
        .comments-panel {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 300px;
          background: white;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }
        .comments-header {
          padding: 15px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .comments-header h6 {
          margin: 0;
          color: #333;
        }
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .comments-list {
          flex: 1;
          overflow-y: auto;
          padding: 10px 15px;
        }
        .comment-item {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .comment-user {
          font-weight: bold;
          font-size: 14px;
        }
        .comment-text {
          margin: 5px 0;
          font-size: 14px;
        }
        .comment-time {
          font-size: 12px;
          color: #777;
        }
        .no-comments {
          text-align: center;
          color: #777;
          padding: 20px 0;
        }
        .comment-form {
          padding: 15px;
          border-top: 1px solid #eee;
          display: flex;
        }
        .comment-form input {
          flex: 1;
          border: 1px solid #ddd;
          border-radius: 20px;
          padding: 8px 15px;
          font-size: 14px;
        }
        .comment-form button {
          background: #3578E5;
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-left: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}