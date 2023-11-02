import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
