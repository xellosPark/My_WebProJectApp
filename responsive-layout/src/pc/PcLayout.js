import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./PcLayout.css";

const PcLayout = () => {
  return (
    <div className="pc-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default PcLayout;