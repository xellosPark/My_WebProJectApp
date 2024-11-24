import React, { useState, useEffect } from "react";
import PcLayout from "./pc/PcLayout";
import TabletLayout from "./tablet/TabletLayout";
import MobileLayout from "./mobile/MobileLayout";

const App = () => {
  const [deviceType, setDeviceType] = useState("pc");

  const detectDevice = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      setDeviceType("pc");
    } else if (width > 768) {
      setDeviceType("tablet");
    } else {
      setDeviceType("mobile");
    }
  };

  useEffect(() => {
    detectDevice(); // 초기 디바이스 감지
    window.addEventListener("resize", detectDevice); // 창 크기 변경 감지
    return () => {
      window.removeEventListener("resize", detectDevice);
    };
  }, []);

  return (
    <>
      {deviceType === "pc" && <PcLayout />}
      {deviceType === "tablet" && <TabletLayout />}
      {deviceType === "mobile" && <MobileLayout />}
    </>
  );
};

export default App;