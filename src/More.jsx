import React from "react";

function More() {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
        More Options
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "8px" }}>Settings</li>
        <li style={{ marginBottom: "8px" }}>Saved</li>
        <li>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ff3b30",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default More;
