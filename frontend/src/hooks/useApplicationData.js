import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const initialState = {
  photos: [],
  topics: [],
  favs: [],
  isModalOpen: false,
  selectedPhotoData: null,
};

//Define my reduce function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      if (state.favs.includes(action.id)) {
        // remove this id from the favs
        return { ...state, favs: state.favs.filter((x) => x !== action.id) };
      } else {
        return { ...state, favs: [...state.favs, action.id] };
      }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhotoData: action.data };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const setPhotoSelected = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, data });
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
