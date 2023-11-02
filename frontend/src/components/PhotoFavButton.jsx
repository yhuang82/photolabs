import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [selected, setLike] = useState(false);
  const switchLike = () => { setLike(selected ? false : true); };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={switchLike}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
