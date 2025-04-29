import Image from "next/image";

export default function ProfileProgress() {
  return (
    <div className="profile-completion p-3 mb-3">
    <h6 className="fw-bold mb-2">Complete Your Profile</h6>
    <p className="text-muted small mb-2">Your Profile is 61% complete</p>
    <div className="progress-container">
    <svg width="120" height="120">
      <circle className="progress-ring progress-ring-bg" cx="60" cy="60" r="50" stroke="#e0e0e0"></circle>
      <circle className="progress-ring progress-ring-fill" cx="60" cy="60" r="50" stroke="#007bff"
          strokeDasharray="500" strokeDashoffset="314"></circle>
    </svg>
    <div className="progress-text" id="progress-text">65%</div>
    </div>
    
    <div className="profile-completion-list">
      <a href="#" className="d-flex align-items-center">
          <Image src="/assets/images/update.svg" className="me-2" alt="Happening Feeds"   width={15}
                    height={15}/> Update Your Profile
      </a>
      <a href="#" className="d-flex align-items-center">
          <Image src="/assets/images/update.svg" className="me-2" alt="Happening Feeds"   width={15}
                    height={15}/> Your Date of Birth
      </a>
      <a href="#" className="d-flex align-items-center">
         <Image src="/assets/images/update.svg" className="me-2" alt="Happening Feeds"   width={15}
                   height={15}/> Your Address
      </a>
    </div>
    </div>
    
  );
}
