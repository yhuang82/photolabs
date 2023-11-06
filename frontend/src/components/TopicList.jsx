import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, selectTopic } = props;
  const topicListItemList = topics.map((topic, index) => {
    return (
      <TopicListItem key={index} topic={topic} selectTopic={selectTopic} />
    );
  });

  return <div className="top-nav-bar__topic-list">{topicListItemList}</div>;
};

export default TopicList;
