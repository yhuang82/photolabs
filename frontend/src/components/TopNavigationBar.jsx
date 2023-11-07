import React, { useState } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, favs, selectTopic, passURLToBackend } = props;

  const [imageUrl, setImageUrl] = useState("");

  const handleCreatePhoto = () => {
    if (imageUrl) {
      console.log("got the image url", imageUrl);
      passURLToBackend(imageUrl);
      setImageUrl("");
    }
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{
          padding: "10px", // Add padding
          border: "1px solid #ccc", // Add a border
          borderRadius: "5px", // Add rounded corners
          fontSize: "16px", // Adjust font size
        }}
      />
      <button
        onClick={handleCreatePhoto}
        style={{
          backgroundColor: "#0074cc", // Background color
          color: "#fff", // Text color
          padding: "10px 20px", // Padding
          border: "none", // Remove border
          borderRadius: "5px", // Add rounded corners
          cursor: "pointer", // Change cursor on hover
        }}
      >
        Upload Photo
      </button>
      <TopicList topics={topics} selectTopic={selectTopic} />
      <FavBadge isFavPhotoExist={favs.length > 0} />
    </div>
  );
};

export default TopNavigation;
