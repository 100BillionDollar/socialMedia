"use client";
import Image from "next/image";

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
  faImage
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faComment,
  faBookmark
} from '@fortawesome/free-regular-svg-icons';

export default function FollowingTabs() {
  const [activeTab, setActiveTab] = useState('for-you');
  const [commentInputs, setCommentInputs] = useState({});
  const [newPostText, setNewPostText] = useState('');
  const [newPostImages, setNewPostImages] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const openPostModal = (post) => {
    setSelectedPost(post);
  };
  const closePostModal = () => {
    setSelectedPost(null);
  };
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Steve Jones",
      profileImage: "./assets/images/post_profile.png",
      timeAgo: "6 hours ago",
      images: ["./assets/images/event_img1.jpg", "./assets/images/event_img2.jpg"],
      likes: 1300,
      liked: true,
      bookmarked: false,
      comments: [],
      following: false
    },
    {
      id: 2,
      username: "Angel Methews",
      profileImage: "./assets/images/post_profile.png",
      timeAgo: "12 hours ago",
      video: ["./assets/video/dummy.mp4"],
      likes: 1300,
      liked: true,
      bookmarked: false,
      comments: [],
      following: false
    }
  ]);
  const fileInputRef = useRef(null);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleLike = (postId) => {
    setPosts(
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const handleBookmark = (postId) => {
    setPosts(
      posts.map(post =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const handleFollow = (postId) => {
    setPosts(
      posts.map(post =>
        post.id === postId ? { ...post, following: !post.following } : post
      )
    );
  };

  const handleCommentInputChange = (postId, value) => {
    setCommentInputs({ ...commentInputs, [postId]: value });
  };

  const handleCommentSubmit = (postId) => {
    if (!commentInputs[postId]?.trim()) return;
    setPosts(
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  username: "You",
                  profileImage: "./assets/images/post_profile.png",
                  text: commentInputs[postId]
                }
              ]
            }
          : post
      )
    );
    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  const handleNewPostSubmit = () => {
    if (!newPostText.trim() && newPostImages.length === 0) return;
    const newPost = {
      id: posts.length + 1,
      username: "You",
      profileImage: "./assets/images/post_profile.png",
      timeAgo: "Just now",
      text: newPostText,
      images: newPostImages,
      likes: 0,
      liked: false,
      bookmarked: false,
      comments: [],
      following: false
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
    setNewPostImages([]);
  };

  return (
    <div className="container my-4 p-0">
      {/* New Post Section */}
      
      {/* <div className="feed-card mb-4 p-3">
        
        <textarea
          className="form-control post-comment-textarea mb-2"
          placeholder="What's on your mind?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          rows="3"
        />
        <div className="d-flex align-items-center">
          <label htmlFor="imageUpload" className="upload_icon">
            <Image
            src="/assets/images/upload_icon.png"
            alt="upload image"
            width={24}
            height={24}
          /> Photo/video
          </label>
          <input
            type="file"
            id="imageUpload"
            hidden
            multiple
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) =>
              setNewPostImages([
                ...newPostImages,
                ...Array.from(e.target.files).map((file) =>
                  URL.createObjectURL(file)
                )
              ])
            }
          />
          <button className="btn btn-outline-primary ms-auto primary_btn" onClick={handleNewPostSubmit}>
            Post
          </button>
        </div>

        
        {newPostImages.length > 0 && (
          <div className="mt-3 d-flex flex-wrap">
            {newPostImages.map((img, index) => (
              <div key={index} className="position-relative me-2 mb-2">
                <img
                  src={img}
                  alt={`upload-${index}`}
                  className="rounded"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <button
                  className="btn btn-sm btn-danger position-absolute top-0 end-0"
                  style={{ borderRadius: '50%' }}
                  onClick={() =>
                    setNewPostImages(newPostImages.filter((_, i) => i !== index))
                  }
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3 feedTabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'for-you' ? 'active' : ''}`}
            onClick={() => handleTabChange('for-you')}
          >
            For You
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'following' ? 'active' : ''}`}
            onClick={() => handleTabChange('following')}
          >
            Following
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {/* For You Tab */}
        <div
          className={`tab-pane fade ${activeTab === 'for-you' ? 'show active' : ''}`}
        >
          {posts.map((post) => (
            <div className="feed-card mb-4" key={post.id}>
              <div className="feed-header d-flex align-items-center">
                <img
                  src={post.profileImage}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="mb-0">{post.username}</h6>
                  <small className="text-muted">{post.timeAgo}</small>
                </div>
                <button
                  className="btn btn-outline-primary ms-auto primary_btn"
                  onClick={() => handleFollow(post.id)}
                >
                  {post.following ? 'Following' : 'Follow'}
                </button>
                <button className="btn text-muted ms-2">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
              </div>

              {post.images && post.images.length > 0 && (
  <Swiper modules={[Navigation]} navigation className="mySwiper">
    {post.images.map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image}
          alt={`Post ${index + 1}`}
          className="w-100"
          onClick={() => openPostModal(post)}
          style={{ cursor: 'pointer' }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)}

{/* Render Video if Available */}
{post.video && post.video.length > 0 && (
  <div modules={[Navigation]} navigation className="mySwiper">
    {post.video.map((video, index) => (
      <SwiperSlide key={index}>
        <video
          src={video}
          controls
          className=" video_cntr w-100"
        />
      </SwiperSlide>
    ))}
  </div>
)}


              {post.text && (
                <div className="card-body p-3">
                  <p className="mb-0">{post.text}</p>
                </div>
              )}

              <div className="feed-footer d-flex align-items-center">
                <button
                  className={`btn me-0 ${post.liked ? 'text-danger' : 'text-muted'}`}
                  onClick={() => handleLike(post.id)}
                >
                  <FontAwesomeIcon icon={post.liked ? faHeartSolid : faHeart} /> {post.likes}
                </button>
                <button className="btn text-muted me-auto">
                  <FontAwesomeIcon icon={faComment} /> {post.comments.length}
                </button>
                <button
                  className={`btn ${post.bookmarked ? 'text-primary' : 'text-muted'}`}
                  onClick={() => handleBookmark(post.id)}
                >
                  <FontAwesomeIcon icon={post.bookmarked ? faBookmarkSolid : faBookmark} />
                </button>
              </div>

              <div className="comment_cntr">
                {post.comments.map((comment, index) => (
                  <div className="comment d-flex align-items-start" key={index}>
                    <img
                      src={comment.profileImage}
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{
                        width: '30px',
                        height: '30px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="comment_inner_box">
                      <div className="comment_reply_box">
                      <h6 className="mb-0" style={{ fontSize: '0.9rem' }}>
                        {comment.username}
                      </h6>

                      <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                        {comment.text}
                      </p>
                      </div>

                      <div className="d-flex align-items-center">
                      <small className="text-muted">{post.timeAgo}</small>
                      <button
                    className="btn btn-link text-primary  comment_reply"
                    onClick={() => handleCommentSubmit(post.id)}
                  >
                    Reply
                  </button>
                  </div>
                    </div>
                  </div>
                ))}
                <div className="add-comment d-flex align-items-center">
                  <img
                    src="./assets/images/post_profile.png"
                    alt="Profile"
                    className="rounded-circle me-2"
                    style={{
                      width: '30px',
                      height: '30px',
                      objectFit: 'cover'
                    }}
                  />
                  <input
                    type="text"
                    className="form-control comment_input"
                    placeholder="Add Comment..."
                    value={commentInputs[post.id] || ''}
                    onChange={(e) =>
                      handleCommentInputChange(post.id, e.target.value)
                    }
                    onKeyPress={(e) =>
                      e.key === 'Enter' && handleCommentSubmit(post.id)
                    }
                  />
                  <button
                    className="btn btn-link text-primary ms-2"
                    onClick={() => handleCommentSubmit(post.id)}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Following Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === 'following' ? 'show active' : ''
          }`}
        >
          <div className="text-center py-5">
            <h5>Follow more accounts to see their updates here</h5>
            <button className="btn btn-primary mt-3 primary_btn">Find People to Follow</button>
          </div>
        </div>
      </div>

      {selectedPost && (
  <div className="post-modal">
    <div className="modal-content">

      <button className="close-btn" onClick={closePostModal}>&times;</button>

      <div className="modal-body">
        {/* Image Slider */}
        <div className="modal_cntr">
        <Swiper modules={[Navigation]} navigation className="mySwiper">
          {selectedPost.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Post ${index + 1}`} className="w-100" />
            </SwiperSlide>
          ))}
        </Swiper>

      
        {/* Like, Comment, and Bookmark Buttons */}
        <div className="right_comment_cntr">
        <div className="modal-actions">
            {/* Post Info */}
        <div className="feed-header d-flex align-items-center w-100">
        <img
                  src={selectedPost.profileImage}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
            <div className="w-100">    
          <h6 className="mb-0">{selectedPost.username}</h6>
          <small className="text-muted">{selectedPost.timeAgo}</small>
         </div>
        
                <button className="btn text-muted ms-2">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
        </div>

   
        </div>
        <div className="comment_box d-flex">
          <button
            className={`btn ${selectedPost.liked ? 'text-danger' : 'text-muted'}`}
            onClick={() => handleLike(selectedPost.id)}
          >
            <FontAwesomeIcon icon={selectedPost.liked ? faHeartSolid : faHeart} /> {selectedPost.likes}
          </button>
          <button className="btn text-muted me-auto">
            <FontAwesomeIcon icon={faComment} /> {selectedPost.comments.length}
          </button>
          <button
            className={`btn ${selectedPost.bookmarked ? 'text-primary' : 'text-muted'}`}
            onClick={() => handleBookmark(selectedPost.id)}
          >
            <FontAwesomeIcon icon={selectedPost.bookmarked ? faBookmarkSolid : faBookmark} />
          </button>
          </div>
        {/* Comments Section */}
        <div className="comments-section">
          
          {selectedPost.comments.map((comment, index) => (
            
            <div className="comment d-flex align-items-start" key={index}>
              <img
                src={comment.profileImage}
                alt="Profile"
                className="rounded-circle me-2"
                style={{ width: '30px', height: '30px', objectFit: 'cover' }}
              />
              <div className="comment_inner_box">
              <div className="comment_reply_box">
                <h6 className="mb-0">{comment.username}</h6>
                <p className="mb-0">{comment.text}</p>
              </div>

              <div className="d-flex align-items-center">
                      <small className="text-muted">1d</small>
                      <button
                    className="btn btn-link text-primary  comment_reply"
                    onClick={() => handleCommentSubmit(comment.id)}
                  >
                    Reply
                  </button>
                  </div>
              </div>
            </div>
            
          ))}
      
          {/* Add Comment */}
          
          <div className="add-comment d-flex align-items-center">
            <img
              src="./assets/images/post_profile.png"
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: '30px', height: '30px', objectFit: 'cover' }}
            />
            <input
              type="text"
              className="form-control comment_input"
              placeholder="Add Comment..."
              value={commentInputs[selectedPost.id] || ''}
              onChange={(e) =>
                handleCommentInputChange(selectedPost.id, e.target.value)
              }
              onKeyPress={(e) =>
                e.key === 'Enter' && handleCommentSubmit(selectedPost.id)
              }
            />
            <button
              className="btn btn-link text-primary ms-2"
              onClick={() => handleCommentSubmit(selectedPost.id)}
            >
              Reply
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
    
    
  );
}
