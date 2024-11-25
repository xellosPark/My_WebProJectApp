import React from "react";
import "./MobileBanner.css";

const MobileBanner = () => {
  return (
    <div className="mobile-banner">
      <img
        src="https://via.placeholder.com/350x150" // 배너 이미지
        alt="UbiSam Banner"
        className="banner-image"
      />
      <p>LCD/반도체 장비 제어분야의 선도업체</p>
      <p>(주)유비샘이 함께합니다.</p>
    </div>
  );
};

export default MobileBanner;