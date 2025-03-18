"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function ProfileProgress() {
  return (
    <div className="p-3 mb-3">
      <h6 className="fw-bold mb-3">Quick Links</h6>
      <ul className="list-unstyled mb-0">
        <li className="mb-2">
          <a href="#" className="text-decoration-none text-dark">About Us</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none text-dark">Privacy Policy</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none text-dark">Terms & Conditions</a>
        </li>
      </ul>

      <div className="d-flex mt-4 social_box">
        <a href="#" className="btn btn-dark btn-sm rounded-circle me-2">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="btn btn-dark btn-sm rounded-circle me-2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="btn btn-dark btn-sm rounded-circle">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
