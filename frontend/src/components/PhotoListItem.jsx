import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
// Handle the image click event. lift out of the component 
const handleImageClick = (
  photo,
  setPhotoSelected,
  onClosePhotoDetailsModal
) => {
  // Use setPhotoSelected and onClosePhotoDetailsModal if available.
  
  if (setPhotoSelected) {
    setPhotoSelected(photo);
  }
  if (onClosePhotoDetailsModal) {
    onClosePhotoDetailsModal();
  }
};

const PhotoListItem = (props) => {
  const {
    photo,
    updateToFavPhotoIds,
    isFav,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  } = props;

  const { id, location, urls, user } = photo;

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFav={isFav}
        id={id}
      />
      <img
        src={urls.regular}
        className="photo-list__image"
        onClick={() =>
          {handleImageClick(photo, setPhotoSelected, onClosePhotoDetailsModal)}
        }
      />
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{user.name}</div>
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
