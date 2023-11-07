import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

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
    selectTopic,
    passURLToBackend,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favs={favs}
        selectTopic={selectTopic}
        passURLToBackend={passURLToBackend}
      />
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
