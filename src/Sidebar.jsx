import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramLogo from './assets/Instagramimage.png';

function Sidebar() {
  const navigate = useNavigate();
  const loggedInUsername = "harini"; // change as needed

  return (
    <div className="m-3">
      <div className='d-flex flex-column gap-3 position-fixed'>
        <img className="logo-text" src={InstagramLogo} alt="Instagram Logo" />

        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <i className="bi bi-house-fill"></i> Home
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/search")}>
          <i className="bi bi-search"></i> Search
        </div>
         <div style={{ cursor: "pointer" }} onClick={() => navigate("/explore")}>
          <i className="bi bi-compass"></i> Explore
        </div>

        {/* 👇 Navigates to /reels */}
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/reels")}>
          <i className="bi bi-collection-play"></i> Reels
        </div>

  <div style={{ cursor: "pointer" }} onClick={() => navigate("/messages")}>
          <i className="bi bi-chat-dots"></i> Messages
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/notifications")}>
          <i className="bi bi-heart"></i> Notifications
        </div>
         <div style={{ cursor: "pointer" }} onClick={() => navigate("/create")}>
          <i className="bi bi-plus-square"></i> Create
        </div>
 
        <div style={{ cursor: "pointer" }} onClick={() => navigate(`/profile/${loggedInUsername}`)}>
          <i className="bi bi-person-circle"></i> Profile
        </div>
      </div>

      <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        

        <div style={{ cursor: "pointer" }} onClick={() => navigate("/threads")}>
          <i className="bi bi-threads"></i> Threads
      </div>
       <div style={{ cursor: "pointer" }} onClick={() => navigate("/more")}>
          <i className="bi bi-three-dots"></i> More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
