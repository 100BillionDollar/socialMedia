"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLocation, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src="/assets/images/logo.png"
            width={127}
            height={35}
            className="logo"
            alt="Logo"
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
              />{" "}
            
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
          <div className="search-bar mx-auto mt-2 mt-lg-0 mb-2 mb-lg-0">
          <span className="location_icon"><Image
            src="/assets/images/location.svg"
            width={20}
            height={20}
            className="location"
            alt="location"
          />
          </span>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
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
