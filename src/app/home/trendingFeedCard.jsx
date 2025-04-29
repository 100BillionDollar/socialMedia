import React from 'react';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faHashtag } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const TrendingFeedCard = () => {
  // Trending topics data for easier maintenance
  const trendingTopics = [
    { icon: "/assets/images/seo.svg", hashtag: 'professional_special', posts: '10K+' },
    { icon: "/assets/images/seo.svg", hashtag: 'jobs', posts: '8K+' },
    { icon: "/assets/images/socialmedia.svg", hashtag: 'crosstheworld', posts: '5.5K+' },
    { icon: "/assets/images/developer.svg", hashtag: 'developer', posts: '3K+' },
    { icon: "/assets/images/digitalmarketer.svg", hashtag: 'digitalmarketer', posts: '2K+' }
  ];

  return (
    <div className="feed-card mb-3">
      <div className="p-3">
        <h6 className="fw-bold mb-3">
          Trending <FontAwesomeIcon icon={faFire} className="text-danger ms-1" />
        </h6>
        
        {trendingTopics.map((topic, index) => (
          <div className="trending-item" key={index}>
            <div className="trending-icon">
              <img src={topic.icon} alt="icon" width={25} height={25} />
            </div>
            <div>
              <p className="mb-0 small">#{topic.hashtag}</p>
              <p className="text-muted mb-0 small">{topic.posts} posts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingFeedCard;