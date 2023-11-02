import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {
  const topicListItemList = props.topics.map((topic, index) => {
    return <TopicListItem key={index} title={topic.title} />;
  });

  
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemList}
    </div>
  );
};

export default TopicList;
