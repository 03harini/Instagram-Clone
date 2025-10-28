import React, { useEffect, useState } from "react";
import "./index.css";

function StoryList() {
  const [stories, setStories] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error loading stories:", err));
  }, []);

  // Handle clicking a user's story
  const handleStoryClick = (user, index = 0) => {
    if (user.stories && user.stories.length > 0) {
      setSelectedUser(user);
      setStoryIndex(index);
    }
  };

  // Go to next story
  const handleNextStory = (e) => {
    e.stopPropagation();
    if (selectedUser && storyIndex < selectedUser.stories.length - 1) {
      setStoryIndex((prev) => prev + 1);
    } else {
      // Close popup when last story ends
      setSelectedUser(null);
    }
  };

  // Go to previous story
  const handlePrevStory = (e) => {
    e.stopPropagation();
    if (selectedUser && storyIndex > 0) {
      setStoryIndex((prev) => prev - 1);
    }
  };

  // Auto-advance to next story every 5 seconds
  useEffect(() => {
    if (!selectedUser) return;
    const timer = setTimeout(() => {
      if (storyIndex < selectedUser.stories.length - 1) {
        setStoryIndex((prev) => prev + 1);
      } else {
        setSelectedUser(null); // close popup when last story ends
      }
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, [storyIndex, selectedUser]);

  return (
    <>
      {/* Horizontal Story List */}
      <div className="stories-container">
        {stories.map((story) => (
          <div
            key={story.userId}
            className="story-item"
            onClick={() => handleStoryClick(story, 0)}
          >
            <div className="gradient-border">
              <img
                src={story.profile_pic}
                alt={story.username}
                className="story-dp"
              />
            </div>
            <p className="story-username">{story.username}</p>
          </div>
        ))}
      </div>

      {/* Story Popup */}
      {selectedUser && (
        <div className="story-overlay" onClick={() => setSelectedUser(null)}>
          {/* Left Arrow */}
          {storyIndex > 0 && (
            <div className="story-arrow left" onClick={handlePrevStory}>
              &#10094;
            </div>
          )}

          {/* Story Image */}
          <img
            src={selectedUser.stories[storyIndex].image}
            alt="Story"
            className="story-image"
          />

          {/* Right Arrow */}
          {selectedUser.stories.length > 1 &&
            storyIndex < selectedUser.stories.length - 1 && (
              <div className="story-arrow right" onClick={handleNextStory}>
                &#10095;
              </div>
            )}
        </div>
      )}
    </>
  );
}

export default StoryList;
