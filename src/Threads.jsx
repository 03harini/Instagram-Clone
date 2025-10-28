import React, { useEffect, useState } from "react";

function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/threads")
      .then((res) => res.json())
      .then((data) => setThreads(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Threads</h2>
      {threads.map((t) => (
        <div key={t.id} className="border-bottom py-2">
          <strong>{t.username}</strong>: {t.content}
        </div>
      ))}
    </div>
  );
}

export default Threads;
