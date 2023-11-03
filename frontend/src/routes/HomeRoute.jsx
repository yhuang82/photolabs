import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { useState } from "react";

// Note: Rendering a single component to build components in isolation

const HomeRoute = (props) => {
  const { topics, photos } = props;
  const [favs, setFavs] = useState([])
  const toggleFavs = function (id) {
    if (favs.includes(id)) {
      // remove this id from the favs
      setFavs(favs.filter(x => x !== id))
    } else {
      setFavs(favs.concat(id))
    }
  }

  const isFav = id => favs.includes(id);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favs={favs} />
      <PhotoList photos={photos} toggleFavs={toggleFavs} isFav={isFav} />
    </div>
  );
};

export default HomeRoute;
