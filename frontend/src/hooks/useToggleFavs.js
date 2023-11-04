import { useState } from "react";

const useToggleFavs = () => {
  const [favs, setFavs] = useState([]);
  const toggleFavs = function (id) {
    if (favs.includes(id)) {
      // remove this id from the favs
      setFavs(favs.filter((x) => x !== id));
    } else {
      setFavs(favs.concat(id));
    }
  };
  const isFav = (id) => favs.includes(id);

  return { toggleFavs, isFav, favs };
};

export default useToggleFavs;