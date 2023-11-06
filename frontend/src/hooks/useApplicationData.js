import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
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

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };

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

  // implement the data fetch process
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  // implement the change topic:
  
  

  // impelent the topic fetch process

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  return {
    ...state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    isFav,
  };
};

export default useApplicationData;
