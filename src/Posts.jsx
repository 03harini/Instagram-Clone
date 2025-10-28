import React, { useState, useEffect } from "react"; 
function Posts() {
   const [posts, setPosts] = useState([]);
    useEffect(() => { fetch("http://localhost:5000/posts") 
      .then((res) => res.json())
       .then((data) => setPosts(data))
        .catch((err) => console.error("Error loading posts:", err));
       }, []); 
       if (posts.length === 0) { 
        return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading posts...</p>; 
      } 
      return ( 
      <div> {posts.map((post) => ( <div key={post.id} 
        style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "10px", marginBottom: "30px", maxWidth: "500px", margin: "20px auto", padding: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", }} > 
        {/* Profile section */} 
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
           <img src={post.profile_pic} alt={post.username}
            style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", marginRight: "10px", }} />
             <div> 
              <strong>@{post.username}</strong>
               <p style={{ margin: 0, fontSize: "12px", color: "#555" }}></p> 
               </div> </div> {/* Post image */} <img src={post.image} alt="post" style={{ width: "100%", borderRadius: "10px", objectFit: "cover", marginBottom: "10px", }} /> 
               {/* Icons */}
                <div style={{ fontSize: "20px", marginBottom: "5px" }}> 
                  <i className="bi bi-heart me-3"></i> <i className="bi bi-chat me-3"></i> 
                  <i className="bi bi-send"></i> </div> <div> <b>{post.likes.length} Likes</b> 
                  </div>
                   {/* Caption */}
                   <p style={{ margin: "5px 0" }}> 
                    <strong>{post.username}</strong> {post.caption} </p> 
                    </div> ))} </div> ); } 
                    export default Posts;