import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList photos={props.photos} />
    </div>
  );
};

export default HomeRoute;
