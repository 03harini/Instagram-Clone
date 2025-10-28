import React, { useEffect, useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-100 p-3 rounded-lg">
            <p className="font-medium">{msg.sender}</p>
            <p>{msg.text}</p>
            <p className="text-sm text-gray-500">{msg.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
