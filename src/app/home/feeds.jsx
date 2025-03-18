import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisH, 
  faHeart as faHeartSolid, 
  faBookmark as faBookmarkSolid 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faHeart, 
  faComment, 
  faBookmark 
} from '@fortawesome/free-regular-svg-icons';

const FeedCard = ({ post }) => {
  return (
    <div className="feed-card mb-4">
      <div className="feed-header">
        <img src={post.profileImage} alt="Profile" />
        <div>
          <h6 className="mb-0">{post.username}</h6>
          <p className="text-muted small mb-0">{post.timeAgo}</p>
        </div>
        {!post.following && (
          <button className="btn btn-primary btn-sm ms-auto">Follow</button>
        )}
        <button className="btn text-muted ms-2">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>

      {post.images && post.images.length > 0 && (
        <div className="feed-container">
          <div className="feed-body">
            <Swiper
              modules={[Navigation]}
              navigation
              className="mySwiper"
            >
              {post.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Post ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {post.text && (
        <div className="p-3">
          <p>{post.text}</p>
        </div>
      )}

      <div className="feed-footer">
        <div className="feed-actions d-flex mb-2">
          <button className={post.liked ? "active" : ""}>
            <FontAwesomeIcon icon={post.liked ? faHeartSolid : faHeart} />
            <span className="ms-1">{post.likes}</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} />
            <span className="ms-1">{post.comments.length}</span>
          </button>
          <button className="ms-auto">
            <FontAwesomeIcon icon={post.bookmarked ? faBookmarkSolid : faBookmark} />
          </button>
        </div>
      </div>

      {post.comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="comment-header">
            <img src={comment.profileImage} alt="Profile" />
            <div>
              <h6 className="mb-0">{comment.username}</h6>
            </div>
          </div>
          <div className="comment-body">
            <p>{comment.text}</p>
          </div>
        </div>
      ))}

      <div className="add-comment">
        <img src="./assets/images/post_profile.png" alt="Profile" />
        <input type="text" className="form-control" placeholder="Add Comment..." />
        <button className="btn text-primary">Reply</button>
      </div>
    </div>
  );
};

export default FeedCard;