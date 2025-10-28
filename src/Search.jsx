import React, { useEffect, useState } from "react";


function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profiles")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />

        {query && (
          <div className="dropdown">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.userId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "5px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
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
                      <p
                        style={{
                          fontWeight: "bold",
                          margin: 0,
                          fontSize: "14px",
                        }}
                      >
                        {user.username}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "gray",
                          margin: 0,
                        }}
                      >
                        Followed by ...
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-user">No user found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
