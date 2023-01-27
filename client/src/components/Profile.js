import React from "react";
import AboutMe from "./AboutMe";
import LatestBlog from "./LatestBlog";
import Newsletter from "./Newsletter";

const Profile = () => {
  return (
    <div className="px-4 flex gap-4 mt-[-60px] flex-col-reverse lg:grid-cols-3 md:grid-cols-2 md:mx-auto sm:mt-auto sm:grid sm:grid-cols-3 sm:gap-8 sm:px-28 md:px-12 m-h-[500px]">
      <AboutMe />
      <LatestBlog />
      <Newsletter />
    </div>
  );
};

export default Profile;
