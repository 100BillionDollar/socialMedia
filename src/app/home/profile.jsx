"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVideo,
  faBookmark,
  faThumbtack,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div className="sidebar p-3 mb-3">
      <div className="sidebar-menu">
        <a className="profile_box" href="#">
          <Image
            src="/assets/images/profile_icon.svg"
            alt="Profile"
            className="rounded-circle"
            width={36}
            height={36}
          />{" "}
          My Profile
        </a>
        <a href="#">
        <Image src="/assets/images/happening-feeds.svg" className="me-2" alt="Happening Feeds"   width={22}
            height={22}/> Happening Feeds
        </a>
        <a href="#">
        <Image src="/assets/images/videos.svg" className="me-2" alt="Happening Feeds"   width={22}
            height={22}/> Videos
        </a>
        <a href="#">
        <Image src="/assets/images/reels.svg" className="me-2" alt="Happening Feeds"   width={22}
            height={22}/> Saves
        </a>
        <a href="#">
        <Image src="/assets/images/saved-posts.svg" className="me-2" alt="Happening Feeds"   width={22}
            height={22}/> Saved Posts
        </a>
      
      </div>
    </div>
  );
}
