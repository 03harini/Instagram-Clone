import React, { useEffect, useState } from "react";
import "./Reels.css"; // We'll create this file for styling

function Reels() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reels")
      .then((res) => res.json())
      .then((data) => setReels(data))
      .catch((err) => console.error("Error fetching reels:", err));
  }, []);

  return (
    <div className="reels-container">
      <h2 className="reels-title">Reels</h2>

      <div className="reels-grid">
        {reels.length > 0 ? (
          reels.map((reel) => (
            <div key={reel.id} className="reel-card">
              <img src={reel.reel_image} alt="Reel" className="reel-image" />
              <div className="reel-info">
                <img
                  src={reel.profile_pic}
                  alt={reel.username}
                  className="reel-profile"
                />
                <p>@{reel.username}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reels">No reels available</p>
        )}
      </div>
    </div>
  );
}

export default Reels;
