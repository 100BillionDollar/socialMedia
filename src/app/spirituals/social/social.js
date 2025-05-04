import React from 'react'
import SpiritualHeading from '@/app/utils/spiritualHeading'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function social() {
    const socialLinks = [
        {
          name: 'Facebook',
          description: 'Channel for Community',
          icon: <FaFacebookF />,
          link: 'https://facebook.com',
        },
        {
          name: 'LinkedIn',
          description: 'Latest News & Updates',
          icon: <FaLinkedinIn />,
          link: 'https://linkedin.com',
        },
        {
          name: 'Instagram',
          description: 'Latest News & Updates',
          icon: <FaInstagram />,
          link: 'https://instagram.com',
        },
        {
          name: 'YouTube',
          description: 'Latest News & Updates',
          icon: <FaYoutube />,
          link: 'https://youtube.com',
        },
      ];
    
  return (
    <div className="container mb-5">
    <SpiritualHeading text="Join our Community"/>
    
      
    <div className="social-container  mt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <div className="social-icon">{social.icon}</div>
          <div className="social-text">
            <h3>{social.name}</h3>
            <p>{social.description}</p>
          </div>
        </a>
      ))}
    </div>
  
    </div>
    
  )
}
