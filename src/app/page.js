import Profile from "./home/profile";
import ProfileProgress from "./home/profileprogress";
import QuickLinks from "./home/quickLinks";
import StoriesSlider from "./home/storiesSlider";
import FollowingTabs from "./home/followingTabs";
import RightFeedCard from "./home/rightFeedCard";
import TrendingFeedCard from "./home/trendingFeedCard";
import RightVendorCard from "./home/rightVendor";
import RightEvents from "./home/rightEvents";

export default function Home() {
  return (
        <div className="container main-content">
        <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <Profile/>
          <ProfileProgress/>
          <QuickLinks/>
        </div>
        <div className="col-lg-6">
        <StoriesSlider/>
        <FollowingTabs/>
       </div>
       <div class="col-lg-3 d-none d-lg-block">
        <RightFeedCard/>
        <TrendingFeedCard/>
        <RightVendorCard/>
        <RightEvents/>
        </div>
        </div>
        </div>
  );
}
