import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
const PhotoListItem = (props) => {
  const {
    photo,
    updateToFavPhotoIds,
    isFav,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  } = props;

  const { id, location, urls, user } = photo;
  const handleImageClick = () => {
    setPhotoSelected(photo);
    onClosePhotoDetailsModal();
  };

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
        onClick={handleImageClick}
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
