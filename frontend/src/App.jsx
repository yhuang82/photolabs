import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    favs,
    isModalOpen,
    selectedPhotoData,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    isFav,
  } = useApplicationData();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const onClosePhotoDetailsModal = () => setIsModalOpen(!isModalOpen);

  // const [seletedPhotoData, setSelectedPhotoData] = useState(null);
  // //function to update the seletedPhotoData
  // const setPhotoSelected = (data) => {
  //   setSelectedPhotoData(data)
  // }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        setPhotoSelected={setPhotoSelected}
        favs={favs}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFav={isFav}
      />
      <PhotoDetailsModal
        isModalOpen={isModalOpen}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        selectedPhotoData={selectedPhotoData}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFav={isFav}
      />
    </div>
  );
};

export default App;
