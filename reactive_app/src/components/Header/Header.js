import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="UbiSam Logo" className="logo-img" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><a href="#">회사소개</a></li>
          <li><a href="#">장비제어시스템</a></li>
          <li><a href="#">생산정보시스템</a></li>
          <li><a href="#">리크루트</a></li>
          <li><a href="#">고객지원</a></li>
        </ul>
        <div className="nav-links">
          <a href="#">Login</a> | <a href="#">Mobile</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
