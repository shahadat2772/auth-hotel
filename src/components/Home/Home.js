import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Rooms from "../Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Rooms></Rooms>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
