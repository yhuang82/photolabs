import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {
    photos,
    updateToFavPhotoIds,
    isFav,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  } = props;

  const photolist = photos.map((photo, index) => (
    <PhotoListItem
      key={index}
      photo={photo}
      updateToFavPhotoIds={updateToFavPhotoIds}
      isFav={isFav}
      onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      setPhotoSelected={setPhotoSelected}
    />
  ));
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
