import React from "react";
import ReactPlayer from "react-player";
import { videopost } from "../assets";

const VideoPost = () => {
  return (
    <div>
      <ReactPlayer src={videopost} />
    </div>
  );
};

export default VideoPost;
