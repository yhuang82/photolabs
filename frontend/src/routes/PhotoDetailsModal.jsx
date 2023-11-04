import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
const PhotoDetailsModal = (props) => {
  const {
    isModalOpen,
    onClosePhotoDetailsModal,
    selectedPhotoData,
    updateToFavPhotoIds,
    isFav,
    setPhotoSelected,
  } = props;

  if (!isModalOpen) {
    return null;
  }

  const { id, location, urls, user } = selectedPhotoData;
  const simPhotoArray = Object.values(selectedPhotoData.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__photo-container">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          isFav={isFav}
          id={id}
        />
        <img src={urls.full} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img
            src={user.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div>{user.name}</div>
            <div className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</div>
          </div>
        </div>
      </div>

      <h6 className="photo-details-modal__header">Similar Photos</h6>

      <PhotoList
        className="details-modal__images"
        photos={simPhotoArray}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFav={isFav}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default PhotoDetailsModal;
