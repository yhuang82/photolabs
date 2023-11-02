import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "components/PhotoList";




// Note: Rendering a single component to build components in isolation



const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem
          key={index}
          id={id}
          location={location}
          imageSource={imageSource}
          username={username}
          profile={profile}
        />) } */}
      <PhotoList />
    </div>
  );
};

export default App;
