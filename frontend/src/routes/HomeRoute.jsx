import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { useState } from "react";

// Note: Rendering a single component to build components in isolation

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    favs,
    updateToFavPhotoIds,
    isFav,
    selectTopic
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favs={favs} selectTopic={selectTopic} />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFav={isFav}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
