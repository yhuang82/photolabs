import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  FETCH_ERROR: "FETCH_ERROR",
};

const initialState = {
  photos: [],
  topics: [],
  favs: [],
  isModalOpen: false,
  selectedPhotoData: null,
  error: null, // add an error state
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

    case ACTIONS.FETCH_ERROR:
      return { ...state, error: action.error };

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

  // Fetch photos with error handling(tips: can put the dependency arry for adding new photo)
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok for get /api/photos");
        }
        return res.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        dispatch({ type: ACTIONS.FETCH_ERROR, error });
      });
  }, []);

  // Fetch topics with error handling
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok for get /api/topics");
        }
        return res.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => dispatch({ type: ACTIONS.FETCH_ERROR, error }));
  }, []);

  // Implement the change topic with error handling
  const selectTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => dispatch({ type: ACTIONS.FETCH_ERROR, error }));
  };

  // Create a function to fetch photos
  const fetchPhotos = () => {
    fetch("/api/photos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok for get /api/photos");
        }
        return res.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        dispatch({ type: ACTIONS.FETCH_ERROR, error });
      });
  };

  // passURLToBackend
  // no useeffect;
  // user clicked on something document is already ready
  const passURLToBackend = (imageUrl) => {
    axios.post("/api/photos", { imageUrl }).then((response) => {
      console.log(response);
      fetchPhotos(); 
    });
    
  };

  return {
    ...state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    isFav,
    selectTopic,
    passURLToBackend,
  };
};

export default useApplicationData;
