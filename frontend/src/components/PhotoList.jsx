import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const {photos, toggleFavs, isFav} = props;
  const photolist = photos.map((photo, index) => (
    <PhotoListItem
      key={index}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      profile={photo.user.profile}
      toggleFavs={toggleFavs}
      isFav={isFav}
    />
  ));
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
