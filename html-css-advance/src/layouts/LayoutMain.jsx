import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

const LayoutMain = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutMain;
