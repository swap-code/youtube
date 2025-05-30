import React, { useEffect, useState } from "react";
import "./VideoContainer.scss"; // Import a CSS file for styling
import { YOUTUBE } from "../../../../constants/apiConstants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react"; // Import Semantic UI Grid

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE);
    const youtubeVideo = await data.json();
    setVideos(youtubeVideo.items);
  };

  return (
    <Grid className="video-container" stackable columns={4}>
      {videos.map((video) => (
        <Grid.Column key={video.id}>
          <Link to={"/watch?v=" + video.id}>
            <VideoCard video={video} />
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default VideoContainer;
