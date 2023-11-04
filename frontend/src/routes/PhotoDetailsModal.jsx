import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = (props) => {
  const {
    isModalOpen,
    toggleModal,
    seletedPhotoData,
    toggleFavs,
    isFav,
    togglePhotoData,
  } = props;

  if (!isModalOpen) {
    return null;
  }


  const { id, location, urls, user } = seletedPhotoData; 
  const simPhotoArray = Object.values(seletedPhotoData.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__photo-container">
        <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={id} />
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
        toggleFavs={toggleFavs}
        isFav={isFav}
        toggleModal={toggleModal}
        togglePhotoData={togglePhotoData}
      />
    </div>
  );
};

export default PhotoDetailsModal;
