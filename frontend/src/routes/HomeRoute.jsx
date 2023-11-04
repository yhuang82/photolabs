import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { useState } from "react";
import useToggleFavs from "hooks/useToggleFavs";

// Note: Rendering a single component to build components in isolation

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    toggleModal,
    togglePhotoData,
    favs,
    toggleFavs,
    isFav,
  } = props;
  
  

  console.log("reload");
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favs={favs} />
      <PhotoList
        photos={photos}
        toggleFavs={toggleFavs}
        isFav={isFav}
        toggleModal={toggleModal}
        togglePhotoData={togglePhotoData}
      />
    </div>
  );
};

export default HomeRoute;
