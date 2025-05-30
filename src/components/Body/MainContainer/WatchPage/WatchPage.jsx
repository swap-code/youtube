import React, { useEffect } from "react";
import { closeMenu } from "../../../../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
import LiveChat from "./LiveChat/LiveChat";
import './watchPage.scss';
const WatchPage = () => {
  let [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="watchPage">
    <div  style={{display:"flex"}}>
      <div  style={{display:"flex"}}>
      <iframe 
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div style={{width:"100%"}}>
        <LiveChat/>
      </div>

    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
