"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Globalsearch from "../utils/globalsearch";
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
let pathname=usePathname();
  // Handle scroll to toggle sticky behavior for the search bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 10; // Adjust this value based on when you want the search bar to reposition
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg py-4 navbar-light sticky-top mb-3 ${isSticky ? 'navbar--sticky' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src="/assets/images/logo.png"
            width={127}
            height={35}
            className="logo"
            alt="Logo"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/127x35?text=Logo')}
          />
        </a>

        <div className="d-flex align-items-center order-lg-last">
          <div className="dropdown me-2">
            <button
              className="btn btn-light rounded-circle"
              type="button"
              id="notificationsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="notificationsDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">Notification 1</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Notification 2</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">See all notifications</a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn p-0"
              type="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                src="/assets/images/profile_icon.svg"
                alt="Profile"
                className="rounded-circle"
                width={36}
                height={36}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/36x36?text=Profile')}
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="profileDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">My Profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="position-relative w-100">
          <div className={`search_bar ${isSticky ? 'search_bar--sticky' : ''}`}>

{pathname=="/spirituals"&& <div className="col-md-12 position-relative"><Globalsearch /></div>}
           
          </div>
          </div>
          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Spiritual</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Happening</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Utsav</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}