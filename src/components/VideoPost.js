import React from "react";
import { Player } from "video-react";
import { videopost } from "../assets";

const VideoPost = () => {
  return <Player playsInline poster="/assets/poster.png" src={videopost} />;
};

export default VideoPost;
