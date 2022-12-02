import React from "react";
import { videopost } from "../assets";

const VideoPost = () => {
  return (
    <div>
      <video src={videopost} autoPlay="true" loop controls />
    </div>
  );
};

export default VideoPost;
