import React from "react";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">New Posts</h1>
      <Post />
    </div>
  );
};

export default Home;
