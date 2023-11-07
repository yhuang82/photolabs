import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    photos,
    topics,
    favs,
    isModalOpen,
    selectedPhotoData,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    isFav,
    selectTopic,
    error,
  } = useApplicationData();

  // right now the error is just for incorrect data fetching purpose
  if (error) {
    // Render an error component or message
    return (
      <h3 className="error-message">An error occurred: {error.message}</h3>
    );
  }

  // If no error, render the main application content
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
        selectTopic={selectTopic}
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
