import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div style={{ position: 'relative' }}>
        <img src={event.image} alt={event.title} className="event-image" />
        <div className="date-badge">
          <div className="date-month">{event.month}</div>
          <div className="date-day">{event.day}</div>
        </div>
      </div>
      
      <div className="event-details">
        <div className="event-time">{event.dayOfWeek}, at {event.time}</div>
        
        <div className="event-location">
        <Image
            src="/assets/images/location.svg"
            width={16}
            height={16}
            className="location"
            alt="location"
          />
          <span>{event.location}</span>
        </div>
        
        <div className="event-title">{event.title}</div>
        
        <div className="event-organizer">
          <FontAwesomeIcon 
            icon={faBriefcase} 
            className="organizer-icon" 
            width="24" 
            height="24" 
          />
          <span className="organizer-name">{event.organizer}</span>
        </div>
      </div>
    </div>
  );
};

const RightEvents = () => {
  // Events data for maintainability
  const events = [
    {
      image: "./assets/images/event_img1.jpg",
      title: "Holiday Events in NYC New York, NY, United States",
      month: "Oct",
      day: "20",
      dayOfWeek: "Thu",
      time: "17:00",
      location: "New York, NY",
      organizer: "Happening Bazar"
    },
    {
      image: "./assets/images/event_img2.jpg",
      title: "Wedding photography workshop",
      month: "Oct",
      day: "11",
      dayOfWeek: "Tue",
      time: "16:37",
      location: "Derrimut hall, Victoria",
      organizer: "Happening Bazar"
    }
  ];

  return (
    <div className="feed-card mb-3">
      <div className="p-3">
        <h6 className="fw-bold mb-3">Popular Events</h6>     
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default RightEvents;