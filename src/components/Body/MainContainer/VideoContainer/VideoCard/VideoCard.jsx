import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { thumbnails, channelTitle, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="video-card">
      <img src={thumbnails.medium.url} alt="thumbnail" className="video-thumbnail" />
      <div className="video-info">
        <h4 className="video-title">{title}</h4>
        <p className="video-channel">{channelTitle}</p>
        <p className="video-views">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
