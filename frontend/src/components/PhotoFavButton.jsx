import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { toggleFavs, isFav, id } = props;

  const handleClick = () => toggleFavs(id);
  const selected = isFav(id);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={selected} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
