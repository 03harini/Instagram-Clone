import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all users and filter by username (replace with your API)
    fetch(`http://localhost:5000/profile`)
      .then(res => res.json())
      .then(data => setUser(data[0]))
      .catch(err => console.error(err));
  }, [username]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <img
        src={user.profile_pic}
        alt={user.username}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>@{user.username}</h2>
      <p>User ID: {user.id}</p>

      <button onClick={() => navigate("/")}>Back to Feed</button>
    </div>
  );
}

export default Profile;
