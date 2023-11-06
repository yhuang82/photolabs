import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favs, selectTopic } = props;
  

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectTopic={selectTopic} />
      <FavBadge isFavPhotoExist={favs.length > 0} />
    </div>
  );
}

export default TopNavigation;