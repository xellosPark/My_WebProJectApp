import React from "react";
import "./styles/base.css"; // 기본 스타일
import Container from "./components/Container/Container"; // 컨테이너 컴포넌트
// import Title from "./components/Title/Title"; // 제목 컴포넌트
import ResponsiveGrid from "./components/ResponsiveGrid/ResponsiveGrid"; // 반응형 그리드 컴포넌트

function App() {
  return (
    <>
      {/* 헤더 영역 */}
      <header className="header">Responsive Design App</header>

      {/* 메인 컨테이너 */}
      <Container>
        {/* 반응형 그리드 */}
        <ResponsiveGrid />
      </Container>

      {/* 푸터 영역 */}
      <footer className="footer">
        <p>© 2024 Responsive Design App. All Rights Reserved.</p>
        <p>
          <a href="#" style={{ color: "#f39c12", textDecoration: "none" }}>
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" style={{ color: "#f39c12", textDecoration: "none" }}>
            Privacy Policy
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;