import { useState } from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    favs: [],
    isModalOpen: false,
    selectedPhotoData: null,
  });

  const updateToFavPhotoIds = (id) => {
    setState((prevState) => {
      if (prevState.favs.includes(id)) {
        // remove this id from the favs
        return { ...prevState, favs: prevState.favs.filter((x) => x !== id) };
      } else {
        return { ...prevState, favs: [...prevState.favs, id] };
      }
    });
  };

  

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

 
  const setPhotoSelected = (data) => {
    setState((prevState) => ({ ...prevState, selectedPhotoData: data }));
  };

  const isFav = (id) => state.favs.includes(id);

  return {
    ...state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    isFav,
  };
};

export default useApplicationData;
