import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./TabletLayout.css";

const TabletLayout = () => {
  return (
    <div className="tablet-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default TabletLayout;