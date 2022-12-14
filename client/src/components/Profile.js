import React from "react";
import AboutMe from "./AboutMe";
import LatestBlog from "./LatestBlog";
import Newsletter from "./Newsletter";

const Profile = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-28">
      <AboutMe />
      <LatestBlog />
      <Newsletter />
    </div>
  );
};

export default Profile;
