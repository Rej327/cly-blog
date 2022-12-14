import React from "react";
import Header from "../components/Header";
import MostPopularPost from "../components/MostPopularPost";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div>
      <Header />
      <MostPopularPost />
      <Profile />
    </div>
  );
};

export default Home;
