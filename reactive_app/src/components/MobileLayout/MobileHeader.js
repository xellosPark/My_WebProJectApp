import React, { useState } from "react";
import "./MobileHeader.css";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열기/닫기 상태 관리

  return (
    <header className="mobile-header">
      <div className="logo">UbiSam</div>
      <button
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)} // 클릭 시 메뉴 토글
      >
        ☰
      </button>
      {menuOpen && ( // 메뉴가 열렸을 때만 표시
        <nav className="mobile-nav">
          <ul>
            <li><a href="#intro">(주)유비샘 소개</a></li>
            <li><a href="#recruit">리크루트</a></li>
            <li><a href="#control-system">장비제어시스템</a></li>
            <li><a href="#info-system">생산정보시스템</a></li>
            <li><a href="#resources">자료실</a></li>
            <li><a href="#qa">Q&A</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;