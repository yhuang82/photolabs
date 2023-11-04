import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "./mocks/photos"
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import useToggleFavs from "hooks/useToggleFavs";


// Note: Rendering a single component to build components in isolation



const App = () => {
  const { toggleFavs, isFav, favs } = useToggleFavs();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [seletedPhotoData, setSeletedPhotoData] = useState(null);
  //function to update the seletedPhotoData
  const togglePhotoData = (data) => {
    setSeletedPhotoData(data)
  }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        togglePhotoData={togglePhotoData}
        favs={favs}
        toggleFavs={toggleFavs}
        isFav={isFav}
      />
      <PhotoDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        seletedPhotoData={seletedPhotoData}
        togglePhotoData={togglePhotoData}
        toggleFavs={toggleFavs}
        isFav={isFav}
      />
    </div>
  );
};

export default App;
