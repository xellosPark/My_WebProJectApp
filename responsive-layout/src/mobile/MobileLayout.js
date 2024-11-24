import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./MobileLayout.css";

const MobileLayout = () => {
  return (
    <div className="mobile-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MobileLayout;