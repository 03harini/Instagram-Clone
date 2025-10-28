import React, { useState, useEffect } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]); // track followed users

  useEffect(() => {
    fetch("http://localhost:5000/suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.error("Error fetching suggestions:", error));
  }, []);

  const handleFollow = (userId) => {
    if (!followedUsers.includes(userId)) {
      setFollowedUsers([...followedUsers, userId]);
    } else {
      setFollowedUsers(followedUsers.filter((id) => id !== userId));
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h3>Suggestions for you</h3>
      {suggestions.map((user) => (
        <div
          key={user.userId}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            padding: "5px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={user.profile_pic}
              onError={(e) => (e.target.src = "/assets/default.jpg")}
              alt={user.username}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <div>
              <strong>{user.username}</strong>
              <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>
                
              </p>
            </div>
          </div>
          <button
            onClick={() => handleFollow(user.userId)}
            style={{
              padding: "5px 10px",
              fontSize: "12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              backgroundColor: followedUsers.includes(user.userId)
                ? "#ccc"
                : "#0095f6",
              color: followedUsers.includes(user.userId) ? "#000" : "#fff",
            }}
          >
            {followedUsers.includes(user.userId) ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
