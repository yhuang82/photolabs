import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const photolist = props.photos.map((photo, index) => (
    <PhotoListItem
      key={index}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      profile={photo.user.profile}
    />
  ));
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
