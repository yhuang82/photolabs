import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import useToggleFavs from 'hooks/useToggleFavs';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = (props) => {
  const {
    isModalOpen,
    toggleModal,
    seletedPhotoData,
    toggleFavs,
    isFav,
  } = props;

  if (!isModalOpen) {
    return null;
  }


  const { id, location, urls, user } = seletedPhotoData; 
  
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

    
      <div className="photo-list__item">
        <PhotoFavButton toggleFavs={toggleFavs} isFav={isFav} id={id} />
        <img
          src={urls.regular}
          className="photo-list__image"
        />
        <div className="photo-list__user-details">
          <img src={user.profile} className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <div>{user.name}</div>
            <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
          </div>
        </div>
      </div>

      <h6 className="photo-details-modal__header">Similar Photos</h6>

      {/* <PhotoList
        photos={photos}
        toggleFavs={toggleFavs}
        isFav={isFav}
        toggleModal={toggleModal}
        togglePhotoData={togglePhotoData}
      /> */}
    </div>
  );
};

export default PhotoDetailsModal;
