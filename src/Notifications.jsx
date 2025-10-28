import React, { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.map((n) => (
        <div key={n.id} className="border-bottom py-2">
          <p><strong>{n.user}</strong> {n.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
