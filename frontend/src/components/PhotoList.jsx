import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const { photos, toggleFavs, isFav, toggleModal, togglePhotoData } = props;
  
  const photolist = photos.map((photo, index) => (
    <PhotoListItem
      key={index}
      photo={photo}
      toggleFavs={toggleFavs}
      isFav={isFav}
      toggleModal={toggleModal}
      togglePhotoData={togglePhotoData}
    />
  ));
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
