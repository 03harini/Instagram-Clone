import React, { useEffect, useState } from "react";

function Explore() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Explore</h2>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt={post.caption}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;
