import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
const PhotoListItem = (props) => {
  const { id, imageSource, profile, username, location, toggleFavs, isFav } = props;
  return (
    <li className="photo-list__item">
      <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={id} />
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
