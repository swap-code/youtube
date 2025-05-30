import React from "react";
import "./MainContainer.scss";
import ButtonList from "./ButtonList/ButtonList";
import VideoContainer from "./VideoContainer/VideoContainer";
const MainCOntainer = () => {
  return (
    <div className="mainContainer">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainCOntainer;
