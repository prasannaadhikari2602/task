import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
